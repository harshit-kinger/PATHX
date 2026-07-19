import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Navigation,
  ShieldAlert,
  TrafficCone,
  BarChart3,
  BrainCircuit,
  Network,
  Cpu,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    title: "Navigation Engine",
    icon: Navigation,
    path: "/navigation",
  },
  {
    title: "Emergency Command",
    icon: ShieldAlert,
    path: "/emergency",
  },
  {
    title: "Traffic Intelligence",
    icon: TrafficCone,
    path: "/traffic",
  },
  {
    title: "Performance Analytics",
    icon: BarChart3,
    path: "/analytics",
  },
  {
    title: "Algorithm Lab",
    icon: BrainCircuit,
    path: "/algorithm-lab",
  },
  {
    title: "Graph Explorer",
    icon: Network,
    path: "/graph-explorer",
  },
  {
    title: "Architecture",
    icon: Cpu,
    path: "/architecture",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

function Sidebar() {
  return (
    <aside className="h-full w-[280px] border-r border-white/10 bg-slate-900 overflow-y-auto">

      <div className="p-6">

        <h1 className="text-2xl font-bold tracking-wide">
          PATHX
        </h1>

        <p className="mt-1 text-sm text-gray-400">
          Smart Route Platform
        </p>

      </div>

      <nav className="px-3 pb-6">

        {menuItems.map(({ title, icon: Icon, path }) => (

          <NavLink
            key={title}
            to={path}
            end={path === "/"}

            className={({ isActive }) =>
              `mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 transition ${
                isActive
                  ? "bg-white/10 text-white"
                  : "text-gray-300 hover:bg-white/5 hover:text-white"
              }`
            }
          >

            <Icon size={20} />

            <span>{title}</span>

          </NavLink>

        ))}

      </nav>

    </aside>
  );
}

export default Sidebar;