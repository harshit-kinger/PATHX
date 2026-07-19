import { useContext } from "react";
import Card from "../../../components/common/Card";
import { NavigationContext } from "../../../context/NavigationContext";
import {
  Route,
  Clock3,
  Brain,
  Activity,
  CheckCircle2,
  Shield,
  Hash,
} from "lucide-react";

function RouteSummary() {

  const {
    routeResult,
    incidentId,
  } = useContext(NavigationContext);

  if (!routeResult) {

    return (

      <Card
        title="Route Summary"
        subtitle="Calculated route information"
      >

        <div className="py-12 text-center">

          <Route
            size={42}
            className="mx-auto mb-4 text-slate-500"
          />

          <p className="text-slate-400">

            Calculate an optimized route to view
            navigation statistics.

          </p>

        </div>

      </Card>

    );

  }

  return (

    <Card
      title="Route Summary"
      subtitle="Live optimization results"
    >

      <div className="space-y-4">

        {/* Incident */}

        <div className="flex items-center justify-between rounded-xl border border-blue-500/20 bg-blue-500/10 p-3">

          <div className="flex items-center gap-3">

            <Hash className="text-blue-400" />

            <span className="text-blue-300">

              Incident ID

            </span>

          </div>

          <span className="font-mono font-semibold text-white">

            {incidentId}

          </span>

        </div>

        {/* Algorithm */}

        <div className="flex items-center justify-between rounded-xl bg-slate-800 p-3">

          <div className="flex items-center gap-3">

            <Brain className="text-blue-400" />

            <span>

              Algorithm

            </span>

          </div>

          <span className="font-semibold text-blue-400">

            {routeResult.algorithm}

          </span>

        </div>

        {/* Distance */}

        <div className="flex items-center justify-between rounded-xl bg-slate-800 p-3">

          <div className="flex items-center gap-3">

            <Route className="text-cyan-400" />

            <span>

              Distance

            </span>

          </div>

          <span className="font-semibold">

            {routeResult.distance} km

          </span>

        </div>

        {/* ETA */}

        <div className="flex items-center justify-between rounded-xl bg-slate-800 p-3">

          <div className="flex items-center gap-3">

            <Clock3 className="text-orange-400" />

            <span>

              Estimated Time

            </span>

          </div>

          <span className="font-semibold">

            {routeResult.estimatedTime} min

          </span>

        </div>

        {/* Nodes */}

        <div className="flex items-center justify-between rounded-xl bg-slate-800 p-3">

          <div className="flex items-center gap-3">

            <Activity className="text-purple-400" />

            <span>

              Visited Nodes

            </span>

          </div>

          <span className="font-semibold">

            {routeResult.visitedNodes}

          </span>

        </div>

        {/* Route Status */}

        <div className="flex items-center justify-between rounded-xl border border-green-500/20 bg-green-500/10 p-3">

          <div className="flex items-center gap-3">

            <CheckCircle2 className="text-green-400" />

            <span className="text-green-300">

              Route Status

            </span>

          </div>

          <span className="font-semibold text-green-400">

            Optimized

          </span>

        </div>

        {/* Emergency Priority */}

        <div className="flex items-center justify-between rounded-xl border border-red-500/20 bg-red-500/10 p-3">

          <div className="flex items-center gap-3">

            <Shield className="text-red-400" />

            <span className="text-red-300">

              Priority

            </span>

          </div>

          <span className="font-semibold text-red-400">

            HIGH

          </span>

        </div>

      </div>

    </Card>

  );

}

export default RouteSummary;