import Card from "../../../components/common/Card";
import AnimatedNumber from "../../../components/common/AnimatedNumber";

function PerformanceSummary({ analytics }) {

  return (

    <Card
      title="Performance Summary"
      subtitle="Routing engine statistics"
    >

      <div className="space-y-4">

        <div className="flex justify-between border-b border-white/10 pb-3">

          <span className="text-slate-400">
            Average Route Distance
          </span>

          <span className="font-semibold text-white">
            <AnimatedNumber
    value={analytics.averageDistance}
    suffix=" km"
/> km
          </span>

        </div>

        <div className="flex justify-between border-b border-white/10 pb-3">

          <span className="text-slate-400">
            Average Route Time
          </span>

          <span className="font-semibold text-white">
           <AnimatedNumber
    value={analytics.averageTime}
    suffix=" min"
/> min
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-slate-400">
            Average Execution
          </span>

          <span className="font-semibold text-green-400">
            <AnimatedNumber
    value={analytics.averageExecution}
    suffix=" ms"
/> ms
          </span>

        </div>

      </div>

    </Card>

  );

}

export default PerformanceSummary;