import { useContext } from "react";

import Card from "./Card";

import { NavigationContext } from "../../context/NavigationContext";

function DemoMode() {

    const {

        demoRunning,

        demoStep,

        setDemoRunning,

        setDemoStep,

        setNotifications

    } = useContext(NavigationContext);

    const wait = (ms) =>
        new Promise(resolve => setTimeout(resolve, ms));

    const startDemo = async () => {

        if (demoRunning) return;

        setDemoRunning(true);

        const steps = [

            "📞 Emergency Received",

            "🚦 Analysing Traffic",

            "🧠 Running Dijkstra",

            "🧠 Running A* Search",

            "🏆 Selecting Best Algorithm",

            "📍 Route Generated",

            "🚑 Dispatching Ambulance",

            "📄 Generating Report",

            "📊 Updating Analytics",

            "✅ Demo Completed"

        ];

        for (const step of steps) {

            setDemoStep(step);

            setNotifications(previous => [

                {

                    id: Date.now() + Math.random(),

                    title: "Demo",

                    message: step,

                    time: new Date().toLocaleTimeString()

                },

                ...previous

            ].slice(0,10));

            await wait(1000);

        }

        setDemoRunning(false);

    };

    return (

        <Card

            title="Demo Mode"

            subtitle="Automatic system walkthrough"

        >

            <button

                onClick={startDemo}

                disabled={demoRunning}

                className="w-full rounded-xl bg-purple-600 py-4 font-semibold text-white hover:bg-purple-500 disabled:bg-slate-700"

            >

                {

                    demoRunning

                        ? "Running Demo..."

                        : "▶ Start Demo"

                }

            </button>

            <div className="mt-6 rounded-xl bg-slate-900 p-4 text-center">

                <p className="text-slate-400">

                    Current Status

                </p>

                <h3 className="mt-2 text-xl font-semibold text-white">

                    {

                        demoStep || "Waiting..."

                    }

                </h3>

            </div>

        </Card>

    );

}

export default DemoMode;