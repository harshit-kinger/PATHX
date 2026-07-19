import { useEffect, useState } from "react";
import Card from "../../../components/common/Card";
import { getTraffic } from "../../../services/trafficService";

function TrafficAlerts() {

  const [alerts, setAlerts] = useState([]);

  useEffect(() => {

    async function loadTraffic() {

      const data = await getTraffic();

      setAlerts(data.traffic.alerts);
    }

    loadTraffic();

  }, []);

  return (

    <Card
      title="Live Traffic Alerts"
      subtitle="Current traffic conditions"
    >

      <div className="space-y-4">

        {alerts.map((alert) => (

          <div
            key={alert.road}
            className="flex items-center justify-between rounded-lg bg-slate-800 p-3"
          >

            <span className="font-medium text-white">

              {alert.road}

            </span>

            <span className="rounded-full bg-orange-500/20 px-3 py-1 text-sm text-orange-300">

              {alert.status}

            </span>

          </div>

        ))}

      </div>

    </Card>

  );

}

export default TrafficAlerts;