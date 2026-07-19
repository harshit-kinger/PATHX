import Card from "../../../components/common/Card";

function DispatchPanel() {
  return (
    <Card
      title="Dispatch Center"
      subtitle="Quick response controls"
    >
      <div className="space-y-3">

        <button className="w-full rounded-lg bg-red-600 py-3 font-semibold text-white hover:bg-red-700">
          Dispatch Ambulance
        </button>

        <button className="w-full rounded-lg bg-orange-600 py-3 font-semibold text-white hover:bg-orange-700">
          Dispatch Fire Unit
        </button>

        <button className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">
          Dispatch Police
        </button>

      </div>
    </Card>
  );
}

export default DispatchPanel;