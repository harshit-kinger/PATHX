import { useContext } from "react";

import Card from "../../../components/common/Card";

import { NavigationContext } from "../../../context/NavigationContext";

import { generateEmergencyReport } from "../../../utils/reportGenerator";

function DownloadReportButton() {

    const {

    incidentId,

    routeResult,

    source,

    destination,

    addNotification

} = useContext(NavigationContext);

    if (!routeResult) return null;

    const handleDownload = () => {

        generateEmergencyReport({

            incidentId,

            source,

            destination,

            algorithm: routeResult.algorithm,

            distance: routeResult.distance,

            estimatedTime: routeResult.estimatedTime,

            visitedNodes: routeResult.visitedNodes

        });

        addNotification(

    "success",

    "Emergency report generated successfully."

);

    };

    return (

        <Card>

            <button

                onClick={handleDownload}

                className="w-full rounded-xl bg-emerald-600 py-4 font-semibold text-white transition hover:bg-emerald-500"

            >

                📄 Generate Emergency Report

            </button>

        </Card>

    );

}

export default DownloadReportButton;