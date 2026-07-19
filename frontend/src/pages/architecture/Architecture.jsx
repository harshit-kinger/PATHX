import SystemFlow from "./components/SystemFlow";
import TechStack from "./components/TechStack";
import ProjectFeatures from "./components/ProjectFeatures";

function Architecture() {
  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold text-white">
          System Architecture
        </h1>

        <p className="mt-2 text-slate-400">
          Complete architecture of the PATHX Smart Emergency Route Optimization System.
        </p>

      </div>

      <SystemFlow />

      <div className="grid gap-6 lg:grid-cols-2">

        <TechStack />

        <ProjectFeatures />

      </div>

    </div>
  );
}

export default Architecture;