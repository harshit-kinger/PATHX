import { useContext, useState } from "react";
import Card from "../../../components/common/Card";
import { NavigationContext } from "../../../context/NavigationContext";
import { optimizeRoute } from "../../../services/routeService";

function FindRouteButton() {

    const {

        source,
        destination,
        emergencyType,
        algorithm,
        optimization,

        setRouteResult,
        incidentId,
        setIncidentId,

        setComparison,

        setRouteHistory,

        setLatestRoute,

        setAlgorithmWinner,

        setLastUpdated,

        setRouteStatistics,

        addNotification

    } = useContext(NavigationContext);

    const [loading, setLoading] = useState(false);

    const [loadingStep, setLoadingStep] = useState("");

    const canCalculate =
        source.trim() !== "" &&
        destination.trim() !== "";

    const wait = (min = 250, max = 500) =>
        new Promise(resolve =>
            setTimeout(
                resolve,
                Math.floor(Math.random() * (max - min + 1)) + min
            )
        );

    const handleCalculate = async () => {

        try {

            setLoading(true);

            setLoadingStep("🔗 Connecting to PATHX Engine...");
            await wait();

            setLoadingStep("🗺 Loading Road Network...");
            await wait();

            setLoadingStep("⚡ Running Dijkstra...");
            await wait(350, 650);

            setLoadingStep("🧠 Running A* Search...");
            await wait(350, 650);

            setLoadingStep("📊 Comparing Results...");
            await wait();

            setLoadingStep("🚑 Generating Optimized Route...");
            await wait();

            const data = await optimizeRoute({

                source,
                destination,
                emergencyType,
                algorithm,
                optimization,

            });

            const selectedRoute =
                algorithm === "astar"
                    ? data.comparison.astar
                    : data.comparison.dijkstra;

            selectedRoute.winner = data.comparison.winner;

            setRouteResult(selectedRoute);

            setLatestRoute(selectedRoute);

            setAlgorithmWinner(data.comparison.winner);

            setLastUpdated(new Date().toLocaleTimeString());

            setRouteStatistics(previous => ({

                ...previous,

                optimizedRoutes: previous.optimizedRoutes + 1,

                averageTime: selectedRoute.estimatedTime,

                averageDistance: selectedRoute.distance,

                averageExecution: Number(
                    selectedRoute.executionTime.toFixed(2)
                )

            }));

            setComparison(data.comparison);

            const id =
                `PATHX-${new Date().getFullYear()}-${String(
                    Math.floor(Math.random() * 100000)
                ).padStart(5, "0")}`;

            setIncidentId(id);

            addNotification(

                "success",

                `Optimized route generated from ${source} to ${destination}.`

            );

            setRouteHistory(previous => [

                {

                    id,

                    source,

                    destination,

                    algorithm: selectedRoute.algorithm,

                    distance: selectedRoute.distance,

                    eta: selectedRoute.estimatedTime,

                    date: new Date().toLocaleTimeString()

                },

                ...previous

            ].slice(0, 10));

            setLoadingStep("✅ Route Optimized Successfully");

            await wait(500, 700);

            console.log(data);

        }

        catch (err) {

            console.error(err);

            addNotification(

                "error",

                "Unable to calculate optimized route."

            );

        }

        finally {

            setLoading(false);

            setLoadingStep("");

        }

    };

    return (

        <Card>

            <button

                disabled={!canCalculate || loading}

                onClick={handleCalculate}

                className={`
                    w-full
                    rounded-xl
                    py-4
                    text-lg
                    font-semibold
                    transition-all
                    duration-300
                    ${

                        canCalculate && !loading

                            ? "bg-blue-600 text-white hover:bg-blue-500 hover:scale-[1.02] shadow-lg shadow-blue-500/20"

                            : "bg-slate-700 text-gray-400 cursor-not-allowed"

                    }
                `}

            >

                {

                    loading ?

                        <div className="space-y-3">

                            <div className="animate-pulse text-base font-medium">

                                {loadingStep}

                            </div>

                            <div className="h-2 overflow-hidden rounded-full bg-slate-700">

                                <div className="h-full w-full animate-pulse rounded-full bg-blue-500" />

                            </div>

                        </div>

                        :

                        <div className="flex items-center justify-center gap-2">

                            🚀

                            <span>

                                Calculate Optimized Route

                            </span>

                        </div>

                }

            </button>

        </Card>

    );

}

export default FindRouteButton;