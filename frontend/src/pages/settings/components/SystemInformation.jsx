import Card from "../../../components/common/Card";

function SystemInformation() {
  return (
    <Card
      title="System Information"
      subtitle="Current application"
    >
      <div className="space-y-4">

        <div className="flex justify-between">

          <span className="text-slate-400">
            Version
          </span>

          <span className="text-white">
            v1.0
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-slate-400">
            Backend
          </span>

          <span className="text-green-400">
            Connected
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-slate-400">
            Routing Engine
          </span>

          <span className="text-blue-400">
            C++
          </span>

        </div>

      </div>
    </Card>
  );
}

export default SystemInformation;