import { useContext } from "react";
import Card from "../../../components/common/Card";
import EmptyState from "../../../components/common/EmptyState";
import { NavigationContext } from "../../../context/NavigationContext";

import {
  Route,
  Clock3,
  Cpu,
  MapPinned,
  BadgeCheck,
  CalendarDays,
} from "lucide-react";

function RouteHistory() {

  const { routeHistory } = useContext(NavigationContext);

  return (

    <Card
      title="Route History"
      subtitle="Recently optimized emergency routes"
    >

      {

        routeHistory.length === 0

        ?

        (

          <EmptyState

            title="No Route History"

            subtitle="Generate an emergency route to begin tracking history."

          />

        )

        :

        (

          <div className="space-y-4">

            {

              routeHistory.slice(0,8).map((route)=>(

                <div

                  key={route.id}

                  className="rounded-xl border border-slate-700 bg-slate-900 p-5 transition-all hover:border-blue-500 hover:shadow-lg"

                >

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2">

                      <BadgeCheck

                        size={18}

                        className="text-green-400"

                      />

                      <span className="font-semibold text-green-400">

                        Optimized Successfully

                      </span>

                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-400">

                      <CalendarDays size={14}/>

                      {route.date}

                    </div>

                  </div>

                  <div className="my-4 rounded-xl bg-slate-800 p-4">

                    <p className="text-sm text-slate-400">

                      Route

                    </p>

                    <h3 className="mt-2 text-lg font-semibold text-white">

                      {route.source}

                    </h3>

                    <div className="my-2 text-center text-slate-500">

                      ↓

                    </div>

                    <h3 className="text-lg font-semibold text-white">

                      {route.destination}

                    </h3>

                  </div>

                  <div className="grid grid-cols-3 gap-3">

                    <div className="rounded-lg bg-slate-800 p-3">

                      <div className="flex items-center gap-2 text-blue-400">

                        <Cpu size={16}/>

                        <span className="text-xs">

                          Algorithm

                        </span>

                      </div>

                      <h4 className="mt-2 font-semibold text-white">

                        {route.algorithm}

                      </h4>

                    </div>

                    <div className="rounded-lg bg-slate-800 p-3">

                      <div className="flex items-center gap-2 text-yellow-400">

                        <Route size={16}/>

                        <span className="text-xs">

                          Distance

                        </span>

                      </div>

                      <h4 className="mt-2 font-semibold text-white">

                        {route.distance} km

                      </h4>

                    </div>

                    <div className="rounded-lg bg-slate-800 p-3">

                      <div className="flex items-center gap-2 text-emerald-400">

                        <Clock3 size={16}/>

                        <span className="text-xs">

                          ETA

                        </span>

                      </div>

                      <h4 className="mt-2 font-semibold text-white">

                        {route.eta} min

                      </h4>

                    </div>

                  </div>

                  <div className="mt-4 flex items-center gap-2 rounded-lg bg-slate-800 px-3 py-2 text-sm text-slate-400">

                    <MapPinned size={16}/>

                    {route.id}

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

export default RouteHistory;