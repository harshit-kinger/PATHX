import { useEffect, useState } from "react";

import StatusCards from "./components/StatusCards";
import EmergencyTable from "./components/EmergencyTable";
import DispatchPanel from "./components/DispatchPanel";
import UnitStatus from "./components/UnitStatus";
import EmergencyTimeline from "./components/EmergencyTimeline";

import { getEmergencyStatus } from "../../services/emergencyService";

function Emergency() {

    const [emergency, setEmergency] = useState(null);

    useEffect(() => {

        async function load() {

            try {

                const data = await getEmergencyStatus();

                setEmergency(data.emergency);

            } catch (err) {

                console.log(err);

            }

        }

        load();

    }, []);

    if (!emergency) {

        return (

            <div className="flex h-[70vh] items-center justify-center">

                <div className="text-center">

                    <h2 className="text-2xl font-semibold text-white">

                        Loading Emergency Data...

                    </h2>

                </div>

            </div>

        );

    }

    return (

        <div className="space-y-6">

            <div>

                <h1 className="text-3xl font-bold text-white">

                    Emergency Command Center

                </h1>

                <p className="mt-2 text-slate-400">

                    Monitor active emergency requests and dispatch response units.

                </p>

            </div>

            <StatusCards emergency={emergency} />

            <EmergencyTable emergency={emergency} />

            <div className="grid gap-6 lg:grid-cols-2">

                <DispatchPanel />

                <UnitStatus emergency={emergency} />

            </div>

            <EmergencyTimeline />

        </div>

    );

}

export default Emergency;