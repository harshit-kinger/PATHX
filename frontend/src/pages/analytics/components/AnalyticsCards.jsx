import MetricCard from "../../../components/common/MetricCard";
import AnimatedNumber from "../../../components/common/AnimatedNumber";

function AnalyticsCards({ analytics }) {

    return (

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <MetricCard
                title="Routes Optimized"
                value={<AnimatedNumber value={analytics.optimizedRoutes} />}
            />

            <MetricCard
                title="Average Time"
                value={<AnimatedNumber value={analytics.averageTime} suffix=" min" />}
            />

            <MetricCard
                title="Average Distance"
                value={<AnimatedNumber value={analytics.averageDistance} suffix=" km" />}
            />

            <MetricCard
                title="Execution"
               value={<AnimatedNumber value={analytics.averageExecution} suffix=" ms" />}
            />

        </div>

    );

}

export default AnalyticsCards;