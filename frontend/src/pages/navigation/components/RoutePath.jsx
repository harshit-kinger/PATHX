import { useContext } from "react";
import Card from "../../../components/common/Card";
import { NavigationContext } from "../../../context/NavigationContext";

function RoutePath() {
  const { routeResult } = useContext(NavigationContext);

  if (!routeResult || !routeResult.path) {
    return (
      <Card
        title="Optimized Route"
        subtitle="Calculated navigation path"
      >
        <div className="py-8 text-center text-gray-500">
          No route calculated yet.
        </div>
      </Card>
    );
  }

  return (
    <Card
      title="Optimized Route"
      subtitle="Calculated navigation path"
    >
      <div className="space-y-4">

        {routeResult.path.map((stop, index) => (

          <div
            key={stop.id}
            className="flex items-start gap-4"
          >

            <div className="flex flex-col items-center">

              <div className="h-3 w-3 rounded-full bg-blue-500"></div>

              {index !== routeResult.path.length - 1 && (
                <div className="h-10 w-0.5 bg-blue-500"></div>
              )}

            </div>

            <div>

              <h3 className="font-semibold text-white">
                {stop.name}
              </h3>

              <p className="text-sm text-slate-400">
                {stop.type}
              </p>

              <p className="text-xs text-slate-500">
                {stop.latitude}, {stop.longitude}
              </p>

            </div>

          </div>

        ))}

      </div>
    </Card>
  );
}

export default RoutePath;