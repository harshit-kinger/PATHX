import { useContext } from "react";

import Card from "../../../components/common/Card";

import { NavigationContext } from "../../../context/NavigationContext";

import {

  Play,

  Pause,

  RotateCcw,

  Truck,

  CheckCircle2,

} from "lucide-react";

function ReplayControls() {

  const {

    routeResult,

    isReplayRunning,

    replayProgress,

    currentReplayNode,

    startReplay,

    pauseReplay,

    resetReplay,

  } = useContext(NavigationContext);

  if (!routeResult) {

    return (

      <Card

        title="Route Replay"

        subtitle="Replay emergency vehicle movement"

      >

        <div className="flex h-48 items-center justify-center text-slate-400">

          Calculate a route first.

        </div>

      </Card>

    );

  }

  const currentNode =

    routeResult.path[currentReplayNode];

  const reachedDestination =

    replayProgress === 100;

  return (

    <Card

      title="Route Replay"

      subtitle="Replay optimized emergency navigation"

    >

      <div className="space-y-6">

        {/* Progress */}

        <div>

          <div className="mb-2 flex justify-between text-sm">

            <span className="text-slate-400">

              Replay Progress

            </span>

            <span className="font-semibold text-blue-400">

              {replayProgress}%

            </span>

          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-700">

            <div

              className="h-full rounded-full bg-blue-500 transition-all duration-700"

              style={{

                width: `${replayProgress}%`

              }}

            />

          </div>

        </div>

        {/* Vehicle */}

        <div className="rounded-xl bg-slate-900 p-4">

          <div className="flex items-center gap-4">

            {

              reachedDestination

              ?

              <CheckCircle2

                className="text-green-400"

                size={32}

              />

              :

              <Truck

                className={`

                  text-green-400

                  ${

                    isReplayRunning

                    ?

                    "animate-pulse"

                    :

                    ""

                  }

                `}

                size={32}

              />

            }

            <div>

              <p className="text-sm text-slate-400">

                Emergency Vehicle

              </p>

              <p className="font-semibold text-white">

                {

                  reachedDestination

                  ?

                  "Destination Reached"

                  :

                  isReplayRunning

                  ?

                  "Moving..."

                  :

                  "Ready"

                }

              </p>

              <p className="mt-1 text-xs text-slate-500">

                Current Node :

                {" "}

                {currentNode?.name}

              </p>

            </div>

          </div>

        </div>

        {/* Buttons */}

        <div className="grid grid-cols-3 gap-3">

          <button

            onClick={startReplay}

            disabled={isReplayRunning}

            className="flex items-center justify-center gap-2 rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-500 disabled:cursor-not-allowed disabled:bg-slate-700"

          >

            <Play size={18} />

            Start

          </button>

          <button

            onClick={pauseReplay}

            disabled={!isReplayRunning}

            className="flex items-center justify-center gap-2 rounded-xl bg-yellow-500 py-3 font-semibold text-white transition hover:bg-yellow-400 disabled:cursor-not-allowed disabled:bg-slate-700"

          >

            <Pause size={18} />

            Pause

          </button>

          <button

            onClick={resetReplay}

            className="flex items-center justify-center gap-2 rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-500"

          >

            <RotateCcw size={18} />

            Reset

          </button>

        </div>

      </div>

    </Card>

  );

}

export default ReplayControls;