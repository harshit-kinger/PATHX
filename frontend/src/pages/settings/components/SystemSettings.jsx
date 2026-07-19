import Card from "../../../components/common/Card";

function SystemSettings() {
  return (
    <Card
      title="System Settings"
      subtitle="Application preferences"
    >
      <div className="space-y-5">

        <div className="flex items-center justify-between">
          <span className="text-white">
            Dark Theme
          </span>

          <input
            type="checkbox"
            defaultChecked
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-white">
            Live Traffic Updates
          </span>

          <input
            type="checkbox"
            defaultChecked
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-white">
            Emergency Notifications
          </span>

          <input
            type="checkbox"
            defaultChecked
          />
        </div>

      </div>
    </Card>
  );
}

export default SystemSettings;