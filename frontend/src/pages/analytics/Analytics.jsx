import { useEffect, useState } from "react";

import AnalyticsCards from "./components/AnalyticsCards";
import PerformanceSummary from "./components/PerformanceSummary";
import AlgorithmComparison from "./components/AlgorithmComparison";
import ResponseMetrics from "./components/ResponseMetrics";

import RouteTrendChart from "./components/RouteTrendChart";
import AlgorithmPieChart from "./components/AlgorithmPieChart";
import ExecutionChart from "./components/ExecutionChart";

import { getAnalytics } from "../../services/analyticsService";

function Analytics() {

    const [analytics, setAnalytics] = useState(null);

    useEffect(() => {

        async function load() {

            try {

                const data = await getAnalytics();

                setAnalytics(data.analytics);

            }

            catch (err) {

                console.log(err);

            }

        }

        load();

    }, []);

    if (!analytics) {

        return (

            <div className="flex items-center justify-center py-20">

                <div className="animate-pulse text-xl text-white">

                    Loading Analytics...

                </div>

            </div>

        );

    }

    return (

        <div className="space-y-6">

            {/* ================= Header ================= */}

            <div>

                <h1 className="text-3xl font-bold text-white">

                    Performance Analytics

                </h1>

                <p className="mt-2 text-slate-400">

                    Monitor routing efficiency, algorithm performance and emergency response metrics.

                </p>

            </div>

            {/* ================= KPI Cards ================= */}

            <AnalyticsCards analytics={analytics} />

            {/* ================= Performance ================= */}

            <PerformanceSummary analytics={analytics} />

            {/* ================= Charts Row 1 ================= */}

            <div className="grid gap-6 xl:grid-cols-2">

                <RouteTrendChart />

                <AlgorithmPieChart analytics={analytics} />

            </div>

            {/* ================= Charts Row 2 ================= */}

            <div className="grid gap-6 xl:grid-cols-2">

                <ExecutionChart analytics={analytics} />

                <ResponseMetrics analytics={analytics} />

            </div>

            {/* ================= Bottom ================= */}

            <AlgorithmComparison analytics={analytics} />

        </div>

    );

}

export default Analytics;