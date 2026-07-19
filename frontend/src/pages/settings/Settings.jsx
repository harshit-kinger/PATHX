import SystemSettings from "./components/SystemSettings";
import SystemInformation from "./components/SystemInformation";

function Settings() {
  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold text-white">
          Settings
        </h1>

        <p className="mt-2 text-slate-400">
          Configure PATHX preferences.
        </p>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <SystemSettings />

        <SystemInformation />

      </div>

    </div>
  );
}

export default Settings;