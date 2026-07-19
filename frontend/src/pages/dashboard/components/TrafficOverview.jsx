import { useEffect, useState } from "react";
import Card from "../../../components/common/Card";
import LoadingSpinner from "../../../components/common/LoadingSpinner";
import ErrorState from "../../../components/common/ErrorState";
import { getTraffic } from "../../../services/trafficService";

import {
  TrafficCone,
  CircleAlert,
  CircleCheckBig,
} from "lucide-react";

function TrafficOverview() {

  const [traffic, setTraffic] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  const loadTraffic = async () => {

    try {

      setLoading(true);

      setError(false);

      const data = await getTraffic();

      setTraffic(data.traffic);

    }

    catch (err) {

      console.error(err);

      setError(true);

    }

    finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    loadTraffic();

  }, []);

  if (loading) {

    return (

      <Card
        title="Traffic Overview"
        subtitle="Loading traffic intelligence"
      >

        <LoadingSpinner

          title="Loading Traffic"

          subtitle="Fetching live traffic intelligence..."

        />

      </Card>

    );

  }

  if (error) {

    return (

      <Card
        title="Traffic Overview"
        subtitle="Unable to load data"
      >

        <ErrorState

          title="Traffic Service Offline"

          subtitle="Unable to fetch live traffic information."

          onRetry={loadTraffic}

        />

      </Card>

    );

  }

  const congestion = Math.round(

    ((traffic.heavy + traffic.moderate) /

      (

        traffic.low +

        traffic.moderate +

        traffic.heavy +

        traffic.closed

      )) * 100

  );

  return (

    <Card

      title="Traffic Overview"

      subtitle="Live city traffic conditions"

    >

      <div className="space-y-5">

        <div>

          <div className="mb-2 flex justify-between">

            <span className="text-slate-400">

              Overall Congestion

            </span>

            <span className="font-semibold text-yellow-400">

              {congestion}%

            </span>

          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-800">

            <div

              className="h-full rounded-full bg-yellow-400 transition-all duration-700"

              style={{

                width: `${congestion}%`

              }}

            />

          </div>

        </div>

        <div className="grid grid-cols-2 gap-3">

          <div className="rounded-xl bg-slate-900 p-4">

            <p className="text-sm text-slate-400">

              Low

            </p>

            <h3 className="mt-2 text-xl font-bold text-green-400">

              {traffic.low}

            </h3>

          </div>

          <div className="rounded-xl bg-slate-900 p-4">

            <p className="text-sm text-slate-400">

              Moderate

            </p>

            <h3 className="mt-2 text-xl font-bold text-yellow-400">

              {traffic.moderate}

            </h3>

          </div>

          <div className="rounded-xl bg-slate-900 p-4">

            <p className="text-sm text-slate-400">

              Heavy

            </p>

            <h3 className="mt-2 text-xl font-bold text-orange-400">

              {traffic.heavy}

            </h3>

          </div>

          <div className="rounded-xl bg-slate-900 p-4">

            <p className="text-sm text-slate-400">

              Closed

            </p>

            <h3 className="mt-2 text-xl font-bold text-red-400">

              {traffic.closed}

            </h3>

          </div>

        </div>

        <div className="rounded-xl bg-slate-900 p-4">

          <div className="flex items-center gap-3">

            <TrafficCone className="text-blue-400" />

            <div>

              <p className="text-sm text-slate-400">

                Average Speed

              </p>

              <h3 className="text-xl font-bold text-white">

                {traffic.averageSpeed}

              </h3>

            </div>

          </div>

        </div>

        <div className="space-y-3">

          {

            traffic.alerts.map((alert, index) => (

              <div

                key={index}

                className="flex items-center justify-between rounded-lg bg-slate-900 p-3"

              >

                <div>

                  <p className="font-medium text-white">

                    {alert.road}

                  </p>

                </div>

                {

                  alert.status === "Clear"

                    ?

                    <CircleCheckBig className="text-green-400" />

                    :

                    <CircleAlert className="text-yellow-400" />

                }

              </div>

            ))

          }

        </div>

      </div>

    </Card>

  );

}

export default TrafficOverview;