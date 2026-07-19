import { createContext, useEffect, useRef, useState } from "react";

export const NavigationContext = createContext();

function NavigationProvider({ children }) {

    /* ===============================
       Navigation
    =============================== */

    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [emergencyType, setEmergencyType] = useState("ambulance");
    const [algorithm, setAlgorithm] = useState("dijkstra");
    const [optimization, setOptimization] = useState("fastest");

    /* ===============================
       Route
    =============================== */

    const [routeResult, setRouteResult] = useState(null);
    const [comparison, setComparison] = useState(null);
    const [incidentId, setIncidentId] = useState("");

    /* ===============================
       Global Engine
    =============================== */

    const [latestRoute, setLatestRoute] = useState(null);
    const [algorithmWinner, setAlgorithmWinner] = useState("");
    const [lastUpdated, setLastUpdated] = useState("");
    const [systemHealth, setSystemHealth] = useState("Healthy");

    const [routeStatistics, setRouteStatistics] = useState({

        optimizedRoutes: 231,
        averageTime: 8.6,
        averageDistance: 5.8,
        averageExecution: 2.1

    });

    /* ===============================
       Route History
    =============================== */

    const [routeHistory, setRouteHistory] = useState([]);

    /* ===============================
       Notifications
    =============================== */

    const [notifications, setNotifications] = useState([]);

    const addNotification = (type, message) => {

        const id = Date.now();

        let title = "PATHX Notification";

        switch (type) {

            case "success":
                title = "Route Optimized";
                break;

            case "warning":
                title = "Traffic Alert";
                break;

            case "error":
                title = "System Error";
                break;

            case "report":
                title = "Report Generated";
                break;

            case "route":
                title = "Emergency Route";
                break;

            default:
                title = "PATHX Event";

        }

        setNotifications(previous => [

            ...previous,

            {

                id,
                type,
                title,
                message,
                time: new Date().toLocaleTimeString()

            }

        ]);

        setTimeout(() => {

            setNotifications(previous =>

                previous.filter(item => item.id !== id)

            );

        }, 5000);

    };

    /* ===============================
       Demo Mode
    =============================== */

    const [demoRunning, setDemoRunning] = useState(false);
    const [demoStep, setDemoStep] = useState("");

    /* ===============================
       Replay Engine
    =============================== */

    const [isReplayRunning, setIsReplayRunning] = useState(false);
    const [currentReplayNode, setCurrentReplayNode] = useState(0);
    const [replayProgress, setReplayProgress] = useState(0);

    const replayInterval = useRef(null);

    const startReplay = () => {

        if (!routeResult?.path?.length) return;

        if (replayInterval.current) return;

        setIsReplayRunning(true);

        addNotification(

            "route",

            "Emergency vehicle replay started."

        );

        replayInterval.current = setInterval(() => {

            setCurrentReplayNode(previous => {

                const lastIndex = routeResult.path.length - 1;

                if (previous >= lastIndex) {

                    clearInterval(replayInterval.current);

                    replayInterval.current = null;

                    setIsReplayRunning(false);

                    setReplayProgress(100);

                    addNotification(

                        "success",

                        "Emergency vehicle reached destination."

                    );

                    return lastIndex;

                }

                const next = previous + 1;

                setReplayProgress(

                    Math.round(

                        (next / lastIndex) * 100

                    )

                );

                return next;

            });

        }, 1200);

    };

    const pauseReplay = () => {

        clearInterval(replayInterval.current);

        replayInterval.current = null;

        setIsReplayRunning(false);

        addNotification(

            "warning",

            "Replay paused."

        );

    };

    const resetReplay = () => {

        clearInterval(replayInterval.current);

        replayInterval.current = null;

        setIsReplayRunning(false);

        setCurrentReplayNode(0);

        setReplayProgress(0);

        addNotification(

            "route",

            "Replay reset."

        );

    };

    useEffect(() => {

        resetReplay();

    }, [routeResult]);

    useEffect(() => {

        return () => {

            clearInterval(replayInterval.current);

        };

    }, []);

    return (

        <NavigationContext.Provider

            value={{

                source,
                setSource,

                destination,
                setDestination,

                emergencyType,
                setEmergencyType,

                algorithm,
                setAlgorithm,

                optimization,
                setOptimization,

                routeResult,
                setRouteResult,

                comparison,
                setComparison,

                incidentId,
                setIncidentId,

                latestRoute,
                setLatestRoute,

                algorithmWinner,
                setAlgorithmWinner,

                lastUpdated,
                setLastUpdated,

                systemHealth,
                setSystemHealth,

                routeStatistics,
                setRouteStatistics,

                routeHistory,
                setRouteHistory,

                notifications,
                setNotifications,

                addNotification,

                demoRunning,
                setDemoRunning,

                demoStep,
                setDemoStep,

                /* Replay */

                isReplayRunning,

                currentReplayNode,

                replayProgress,

                startReplay,

                pauseReplay,

                resetReplay

            }}

        >

            {children}

        </NavigationContext.Provider>

    );

}

export default NavigationProvider;