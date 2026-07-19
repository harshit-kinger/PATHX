import { Bell, Search, UserCircle2 } from "lucide-react";

function Topbar() {
  return (
    <header className="h-[72px] border-b border-white/10 bg-slate-900 px-6 flex items-center justify-between">
      <div>
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <p className="text-sm text-gray-400">
          PATHX Smart Emergency Route Optimization Platform
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-lg p-2 hover:bg-white/5 transition">
          <Search size={20} />
        </button>

        <button className="rounded-lg p-2 hover:bg-white/5 transition">
          <Bell size={20} />
        </button>

        <button className="rounded-lg p-2 hover:bg-white/5 transition">
          <UserCircle2 size={30} />
        </button>
      </div>
    </header>
  );
}

export default Topbar;