import TrafficCards from "./components/TrafficCards";
import TrafficAlerts from "./components/TrafficAlerts";

function Traffic() {
  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold text-white">
          Traffic Intelligence
        </h1>

        <p className="mt-2 text-slate-400">
          Monitor live traffic conditions across the city.
        </p>

      </div>

      <TrafficCards />

      <TrafficAlerts />

    </div>
  );
}

export default Traffic;