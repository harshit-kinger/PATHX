import { useContext } from "react";
import Card from "../../../components/common/Card";
import { NavigationContext } from "../../../context/NavigationContext";

const emergencyTypes = [
  {
    id: "ambulance",
    emoji: "🚑",
    label: "Ambulance",
    active: "border-red-500 bg-red-500/20 text-red-400",
    inactive: "border-white/10 bg-slate-800 text-gray-300",
  },
  {
    id: "fire",
    emoji: "🚒",
    label: "Fire",
    active: "border-orange-500 bg-orange-500/20 text-orange-400",
    inactive: "border-white/10 bg-slate-800 text-gray-300",
  },
  {
    id: "police",
    emoji: "👮",
    label: "Police",
    active: "border-blue-500 bg-blue-500/20 text-blue-400",
    inactive: "border-white/10 bg-slate-800 text-gray-300",
  },
];

function EmergencySelector() {
  const { emergencyType, setEmergencyType } =
    useContext(NavigationContext);

  return (
    <Card
      title="Emergency Type"
      subtitle="Select the emergency service"
    >
      <div className="grid grid-cols-3 gap-3">
        {emergencyTypes.map((item) => (
          <button
            key={item.id}
            onClick={() => setEmergencyType(item.id)}
            className={`rounded-xl border py-3 transition ${
              emergencyType === item.id
                ? item.active
                : item.inactive
            }`}
          >
            <div className="text-2xl">{item.emoji}</div>

            <p className="mt-2 text-sm font-medium">
              {item.label}
            </p>
          </button>
        ))}
      </div>
    </Card>
  );
}

export default EmergencySelector;