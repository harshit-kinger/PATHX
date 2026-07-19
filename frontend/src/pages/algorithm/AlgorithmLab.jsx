import AlgorithmCards from "./components/AlgorithmCards";
import AlgorithmStatus from "./components/AlgorithmStatus";
import BenchmarkPanel from "./components/BenchmarkPanel";

function AlgorithmLab() {
  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold text-white">
          Algorithm Lab
        </h1>

        <p className="mt-2 text-slate-400">
          Analyze routing algorithms and benchmark their performance.
        </p>

      </div>

      <AlgorithmCards />

      <div className="grid gap-6 lg:grid-cols-2">

        <AlgorithmStatus />

        <BenchmarkPanel />

      </div>

    </div>
  );
}

export default AlgorithmLab;