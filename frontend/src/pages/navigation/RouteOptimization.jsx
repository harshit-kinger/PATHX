import SourceInput from "./components/SourceInput";
import DestinationInput from "./components/DestinationInput";
import EmergencySelector from "./components/EmergencySelector";
import AlgorithmSelector from "./components/AlgorithmSelector";
import OptimizationSelector from "./components/OptimizationSelector";
import FindRouteButton from "./components/FindRouteButton";
import DownloadReportButton from "./components/DownloadReportButton";
import ReplayControls from "./components/ReplayControls";

import RouteSummary from "./components/RouteSummary";
import AIRecommendation from "./components/AIRecommendation";
import BenchmarkPanel from "../algorithm/components/BenchmarkPanel";
import RouteMap from "./components/RouteMap";
import RoutePath from "./components/RoutePath";

function RouteOptimization() {

    return (

        <div className="space-y-6">

            {/* ================= Header ================= */}

            <div>

                <h1 className="text-3xl font-bold text-white">

                    Navigation Engine

                </h1>

                <p className="mt-2 text-gray-400">

                    Calculate optimized emergency routes using intelligent graph algorithms.

                </p>

            </div>

            {/* ================= Input + Summary ================= */}

            <div className="grid gap-6 xl:grid-cols-3">

                {/* LEFT */}

                <div className="space-y-4 xl:col-span-2">

                    <SourceInput />

                    <DestinationInput />

                    <EmergencySelector />

                    <AlgorithmSelector />

                    <OptimizationSelector />

                    <FindRouteButton />

                    <DownloadReportButton />

                </div>

                {/* RIGHT */}

                <div className="space-y-4">

                    <RouteSummary />

                    <AIRecommendation />

                </div>

            </div>

            {/* ================= Benchmark ================= */}

            <BenchmarkPanel />

            {/* ================= Replay ================= */}

            <ReplayControls />

            {/* ================= Map ================= */}

            <RouteMap />

            {/* ================= Route Path ================= */}

            <RoutePath />

        </div>

    );

}

export default RouteOptimization;