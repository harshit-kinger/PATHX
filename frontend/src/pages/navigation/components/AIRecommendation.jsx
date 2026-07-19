import { useContext } from "react";

import Card from "../../../components/common/Card";

import { NavigationContext } from "../../../context/NavigationContext";

import {
    Brain,
    CheckCircle2,
    Sparkles
} from "lucide-react";

function AIRecommendation() {

    const { comparison } = useContext(NavigationContext);

    if (!comparison) {

        return (

            <Card
                title="AI Recommendation"
                subtitle="Smart routing assistant"
            >

                <div className="py-10 text-center text-slate-400">

                    Calculate a route to receive an AI recommendation.

                </div>

            </Card>

        );

    }

    const winner =
        comparison.winner === "A*"
            ? comparison.astar
            : comparison.dijkstra;

    const loser =
        comparison.winner === "A*"
            ? comparison.dijkstra
            : comparison.astar;

    const reasons = [];

    if (winner.executionTime < loser.executionTime)
        reasons.push("Lower execution time");

    if (winner.visitedNodes < loser.visitedNodes)
        reasons.push("Visited fewer nodes");

    if (winner.distance <= loser.distance)
        reasons.push("Same shortest distance");

    reasons.push("Best suited for emergency routing");

    let confidence = 90;

    confidence += Math.min(
        9,
        Math.round(
            (loser.executionTime - winner.executionTime) * 10
        )
    );

    return (

        <Card
            title="AI Recommendation"
            subtitle="PATHX Intelligent Routing Assistant"
        >

            <div className="space-y-5">

                <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-4">

                    <div className="flex items-center gap-3">

                        <Brain className="text-blue-400" />

                        <div>

                            <p className="text-slate-300">

                                Recommended Algorithm

                            </p>

                            <h2 className="text-2xl font-bold text-white">

                                ⭐ {comparison.winner}

                            </h2>

                        </div>

                    </div>

                </div>

                <div>

                    <h3 className="mb-3 flex items-center gap-2 font-semibold text-white">

                        <Sparkles
                            size={18}
                            className="text-yellow-400"
                        />

                        Recommendation Reason

                    </h3>

                    <div className="space-y-3">

                        {

                            reasons.map((reason) => (

                                <div
                                    key={reason}
                                    className="flex items-center gap-3"
                                >

                                    <CheckCircle2
                                        size={18}
                                        className="text-green-400"
                                    />

                                    <span className="text-slate-300">

                                        {reason}

                                    </span>

                                </div>

                            ))

                        }

                    </div>

                </div>

                <div className="rounded-xl bg-green-500/10 border border-green-500/20 p-4">

                    <p className="text-green-300">

                        AI Confidence

                    </p>

                    <h2 className="text-3xl font-bold text-green-400">

                        {confidence}%

                    </h2>

                </div>

            </div>

        </Card>

    );

}

export default AIRecommendation;