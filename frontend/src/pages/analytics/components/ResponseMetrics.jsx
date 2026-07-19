import Card from "../../../components/common/Card";

function ResponseMetrics({ analytics }) {

  return (

    <Card
      title="System Metrics"
      subtitle="Live backend statistics"
    >

      <div className="space-y-5">

        <div>

          <p className="text-slate-400">

            Traffic Alerts

          </p>

          <div className="mt-2 h-2 rounded-full bg-slate-700">

            <div
              className="h-2 rounded-full bg-red-500"
              style={{ width: `${analytics.trafficAlerts * 10}%` }}
            ></div>

          </div>

        </div>

        <div>

          <p className="text-slate-400">

            Emergency Requests

          </p>

          <div className="mt-2 h-2 rounded-full bg-slate-700">

            <div
              className="h-2 rounded-full bg-yellow-500"
              style={{ width: `${analytics.emergencyRequests * 5}%` }}
            ></div>

          </div>

        </div>

        <div>

          <p className="text-slate-400">

            Route Optimization

          </p>

          <div className="mt-2 h-2 rounded-full bg-slate-700">

            <div
              className="h-2 rounded-full bg-green-500"
              style={{
                width: `${
                  (analytics.optimizedRoutes /
                    analytics.totalRoutes) *
                  100
                }%`,
              }}
            ></div>

          </div>

        </div>

      </div>

    </Card>

  );

}

export default ResponseMetrics;