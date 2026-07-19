import Card from "../../../components/common/Card";

function SystemFlow() {
  return (

    <Card
      title="System Flow"
      subtitle="End-to-end request pipeline"
    >

      <div className="space-y-6">

        <div className="rounded-xl bg-slate-900 p-5">

          <div className="text-center space-y-4 text-lg font-semibold text-white">

            <div>🖥 React Dashboard</div>

            <div>⬇</div>

            <div>🌐 Express REST API</div>

            <div>⬇</div>

            <div>⚙ C++ Routing Engine</div>

            <div>⬇</div>

            <div>🧠 Dijkstra / A*</div>

            <div>⬇</div>

            <div>📄 JSON Response</div>

            <div>⬇</div>

            <div>📊 Dashboard Visualization</div>

          </div>

        </div>

      </div>

    </Card>

  );
}

export default SystemFlow;