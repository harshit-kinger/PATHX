import Card from "../../../components/common/Card";

function EmergencyOverview() {
  return (
    <Card
      title="Emergency Overview"
      subtitle="Live emergency response status"
    >
      <div className="grid gap-4 md:grid-cols-2">

  <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-4">
    <p className="text-sm text-gray-400">
      Active Emergencies
    </p>

    <h2 className="mt-2 text-3xl font-bold text-red-400">
      12
    </h2>
  </div>

  <div className="rounded-xl bg-green-500/10 border border-green-500/20 p-4">
    <p className="text-sm text-gray-400">
      Response Teams
    </p>

    <h2 className="mt-2 text-3xl font-bold text-green-400">
      28
    </h2>
  </div>

  <div className="rounded-xl bg-yellow-500/10 border border-yellow-500/20 p-4">
    <p className="text-sm text-gray-400">
      Average Response Time
    </p>

    <h2 className="mt-2 text-2xl font-bold text-yellow-400">
      5.8 min
    </h2>
  </div>

  <div className="rounded-xl bg-blue-500/10 border border-blue-500/20 p-4">
    <p className="text-sm text-gray-400">
      Available Ambulances
    </p>

    <h2 className="mt-2 text-3xl font-bold text-blue-400">
      42
    </h2>
  </div>

</div>
    </Card>
  );
}

export default EmergencyOverview;