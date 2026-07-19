import { useContext } from "react";

import {
  Ambulance,
  Clock3,
  Activity,
  Building2,
} from "lucide-react";

import { NavigationContext } from "../../context/NavigationContext";

import MetricCard from "./components/MetricCard";
import EmergencyOverview from "./components/EmergencyOverview";
import TrafficOverview from "./components/TrafficOverview";
import QuickActions from "./components/QuickActions";
import AlgorithmOverview from "./components/AlgorithmOverview";
import RecentActivity from "./components/RecentActivity";
import RouteHistory from "./components/RouteHistory";

import NotificationCenter from "../../components/common/NotificationCenter";
import DemoMode from "../../components/common/DemoMode";

function Dashboard() {

  const {

    routeStatistics,

    latestRoute,

    systemHealth,

    lastUpdated,

    routeHistory,

  } = useContext(NavigationContext);

  return (

    <div className="space-y-6">

      {/* ================= Header ================= */}

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-3xl font-bold text-white">

            Dashboard

          </h1>

          <p className="mt-2 text-gray-400">

            Smart Emergency Route Optimization Overview

          </p>

        </div>

        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-3">

          <p className="text-sm text-slate-400">

            System Health

          </p>

          <h2 className="text-xl font-bold text-emerald-400">

            {systemHealth}

          </h2>

        </div>

      </div>

      {/* ================= KPI ================= */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <MetricCard

          title="Optimized Routes"

          value={routeStatistics.optimizedRoutes}

          icon={Ambulance}

          color="text-red-400"

        />

        <MetricCard

          title="Average Route Time"

          value={`${routeStatistics.averageTime} min`}

          icon={Clock3}

          color="text-blue-400"

        />

        <MetricCard

          title="Average Distance"

          value={`${routeStatistics.averageDistance} km`}

          icon={Activity}

          color="text-yellow-400"

        />

        <MetricCard

          title="Available Hospitals"

          value={18}

          icon={Building2}

          color="text-green-400"

        />

      </div>

      {/* ================= Latest Route ================= */}

      {

        latestRoute &&

        <div className="rounded-xl border border-blue-500/20 bg-slate-900 p-5">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-lg font-bold text-white">

                Latest Optimized Route

              </h2>

              <p className="mt-1 text-slate-400">

                Updated {lastUpdated}

              </p>

            </div>

            <div className="rounded-lg bg-blue-600 px-3 py-1 text-sm font-semibold">

              {latestRoute.algorithm}

            </div>

          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">

            <div>

              <p className="text-slate-400">

                Distance

              </p>

              <h3 className="text-xl font-bold text-white">

                {latestRoute.distance} km

              </h3>

            </div>

            <div>

              <p className="text-slate-400">

                ETA

              </p>

              <h3 className="text-xl font-bold text-white">

                {latestRoute.estimatedTime} min

              </h3>

            </div>

            <div>

              <p className="text-slate-400">

                Visited Nodes

              </p>

              <h3 className="text-xl font-bold text-white">

                {latestRoute.visitedNodes}

              </h3>

            </div>

          </div>

        </div>

      }

      {/* ================= ROW 2 ================= */}

      <div className="grid gap-6 lg:grid-cols-3">

        <div className="lg:col-span-2">

          <EmergencyOverview />

        </div>

        <TrafficOverview />

      </div>

      {/* ================= ROW 3 ================= */}

      <div className="grid gap-6 lg:grid-cols-3">

        <div className="lg:col-span-2">

          <AlgorithmOverview />

        </div>

        <div className="space-y-6">

          <QuickActions />

          <DemoMode />

        </div>

      </div>

      {/* ================= ROW 4 ================= */}

      <div className="grid gap-6 lg:grid-cols-3">

        <RecentActivity />

        <NotificationCenter />

        <RouteHistory />

      </div>

      {/* ================= Footer ================= */}

      <div className="text-center text-sm text-slate-500">

        Total Routes Calculated Today:{" "}

        <span className="font-semibold text-white">

          {routeHistory.length}

        </span>

      </div>

    </div>

  );

}

export default Dashboard;