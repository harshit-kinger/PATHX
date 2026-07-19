import Card from "../../../components/common/Card";
import AnimatedNumber from "../../../components/common/AnimatedNumber";

function MetricCard({
  title,
  value,
  icon: Icon,
  color = "text-blue-400",
}) {
  return (
    <Card
      className="
        group
        flex
        items-center
        justify-between
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
        hover:shadow-blue-500/10
        hover:border-blue-500/30
      "
    >
      <div>
        <p className="text-sm tracking-wide text-gray-400">
          {title}
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white">
          {typeof value === "number" ? (
            <AnimatedNumber value={value} />
          ) : (
            value
          )}
        </h2>
      </div>

      {Icon && (
        <div
          className={`
            rounded-2xl
            bg-white/5
            p-4
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:rotate-6
            ${color}
          `}
        >
          <Icon size={30} />
        </div>
      )}
    </Card>
  );
}

export default MetricCard;