import Card from "./Card";

function MetricCard({ title, value }) {
  return (
    <Card>
      <div className="space-y-2">
        <p className="text-sm text-slate-400">
          {title}
        </p>

        <h2 className="text-3xl font-bold text-white">
          {value}
        </h2>
      </div>
    </Card>
  );
}

export default MetricCard;