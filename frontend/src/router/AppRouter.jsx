import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/dashboard/Dashboard";
import RouteOptimization from "../pages/navigation/RouteOptimization";
import Emergency from "../pages/emergency/Emergency";
import Traffic from "../pages/traffic/Traffic";
import Analytics from "../pages/analytics/Analytics";
import AlgorithmLab from "../pages/algorithm/AlgorithmLab";
import GraphExplorer from "../pages/graph/GraphExplorer";
import Architecture from "../pages/architecture/Architecture";
import Settings from "../pages/settings/Settings";

function AppRouter() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<MainLayout />}
        >

          <Route
            index
            element={<Dashboard />}
          />

          <Route
            path="navigation"
            element={<RouteOptimization />}
          />

          <Route
            path="emergency"
            element={<Emergency />}
          />

          <Route
            path="traffic"
            element={<Traffic />}
          />

          <Route
            path="analytics"
            element={<Analytics />}
          />

          <Route
            path="algorithm-lab"
            element={<AlgorithmLab />}
          />

          <Route
            path="graph-explorer"
            element={<GraphExplorer />}
          />

          <Route
            path="architecture"
            element={<Architecture />}
          />

          <Route
            path="settings"
            element={<Settings />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default AppRouter;