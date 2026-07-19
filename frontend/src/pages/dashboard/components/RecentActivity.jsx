import { useContext } from "react";
import Card from "../../../components/common/Card";
import EmptyState from "../../../components/common/EmptyState";
import { NavigationContext } from "../../../context/NavigationContext";

import {
  Activity,
  Clock3,
  Cpu,
  Route,
  BadgeCheck,
} from "lucide-react";

function RecentActivity() {

  const { routeHistory } = useContext(NavigationContext);

  return (

    <Card
      title="Recent Activity"
      subtitle="Live system activity feed"
    >

      {

        routeHistory.length === 0

          ?

          (

            <EmptyState

              title="No Activity Yet"

              subtitle="Generate your first optimized emergency route."

            />

          )

          :

          (

            <div className="space-y-4">

              {

                routeHistory.slice(0, 6).map((route) => (

                  <div

                    key={route.id}

                    className="rounded-xl border border-slate-700 bg-slate-900 p-4 transition hover:border-blue-500 hover:bg-slate-800"

                  >

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-2">

                        <BadgeCheck

                          size={18}

                          className="text-green-400"

                        />

                        <span className="font-semibold text-white">

                          Route Successfully Optimized

                        </span>

                      </div>

                      <span className="text-xs text-slate-400">

                        {route.date}

                      </span>

                    </div>

                    <div className="mt-4 flex items-center gap-2 text-slate-300">

                      <Route

                        size={16}

                        className="text-blue-400"

                      />

                      <span>

                        {route.source}

                      </span>

                      <span className="text-slate-500">

                        →

                      </span>

                      <span>

                        {route.destination}

                      </span>

                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-3">

                      <div className="rounded-lg bg-slate-800 p-3">

                        <div className="flex items-center gap-2 text-blue-400">

                          <Cpu size={15} />

                          <span className="text-xs">

                            Algorithm

                          </span>

                        </div>

                        <p className="mt-2 font-semibold text-white">

                          {route.algorithm}

                        </p>

                      </div>

                      <div className="rounded-lg bg-slate-800 p-3">

                        <div className="flex items-center gap-2 text-yellow-400">

                          <Clock3 size={15} />

                          <span className="text-xs">

                            ETA

                          </span>

                        </div>

                        <p className="mt-2 font-semibold text-white">

                          {route.eta} min

                        </p>

                      </div>

                      <div className="rounded-lg bg-slate-800 p-3">

                        <div className="flex items-center gap-2 text-emerald-400">

                          <Activity size={15} />

                          <span className="text-xs">

                            Distance

                          </span>

                        </div>

                        <p className="mt-2 font-semibold text-white">

                          {route.distance} km

                        </p>

                      </div>

                    </div>

                  </div>

                ))

              }

            </div>

          )

      }

    </Card>

  );

}

export default RecentActivity;