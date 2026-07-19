import { useContext } from "react";
import {
  Bell,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Route,
} from "lucide-react";

import Card from "./Card";
import { NavigationContext } from "../../context/NavigationContext";

function NotificationCenter() {
  const { notifications } = useContext(NavigationContext);

  const getIcon = (type) => {
    switch (type) {
      case "success":
        return <CheckCircle2 size={18} className="text-green-400" />;

      case "warning":
        return <AlertTriangle size={18} className="text-yellow-400" />;

      case "report":
        return <FileText size={18} className="text-blue-400" />;

      case "route":
        return <Route size={18} className="text-cyan-400" />;

      default:
        return <Bell size={18} className="text-slate-400" />;
    }
  };

  return (
    <Card
      title="Notifications"
      subtitle="Live command center events"
    >
      {notifications.length === 0 ? (
        <div className="flex h-56 items-center justify-center text-slate-400">
          Waiting for system events...
        </div>
      ) : (
        <div className="space-y-3">
          {notifications
            .slice()
            .reverse()
            .map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-slate-700 bg-slate-900 p-4 transition hover:border-blue-500"
              >
                <div className="flex items-start gap-3">
                  {getIcon(item.type)}

                  <div className="flex-1">
                    <h4 className="font-semibold text-white">
                      {item.title || "PATHX Event"}
                    </h4>

                    <p className="mt-1 text-sm text-slate-400">
                      {item.message}
                    </p>

                    <p className="mt-2 text-xs text-slate-500">
                      {item.time || "Just now"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </Card>
  );
}

export default NotificationCenter;