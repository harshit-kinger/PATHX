import MetricCard from "../../../components/common/MetricCard";

function StatusCards({ emergency }) {

    return (

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <MetricCard
                title="Active Emergencies"
                value={
    emergency.ambulance.active +
    emergency.fire.active +
    emergency.police.active
}
            />

            <MetricCard
                title="Ambulances"
                value={emergency.ambulance.available}
            />

            <MetricCard
                title="Fire Units"
                value={emergency.fire.available}
            />

            <MetricCard
                title="Police Units"
                value={emergency.police.available}
            />

        </div>

    );

}

export default StatusCards;