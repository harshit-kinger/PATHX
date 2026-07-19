import { useContext, useMemo } from "react";
import Card from "../../../components/common/Card";
import EmptyState from "../../../components/common/EmptyState";
import { NavigationContext } from "../../../context/NavigationContext";

import {
  Activity,
  Route,
  MapPinned,
} from "lucide-react";

import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

function GraphPlaceholder() {

  const {

    routeResult,

    currentReplayNode,

  } = useContext(NavigationContext);

  const { nodes, edges } = useMemo(() => {

    if (!routeResult?.path) {

      return {

        nodes: [],

        edges: [],

      };

    }

    const graphNodes = routeResult.path.map((node, index) => {

      const isCurrent = index === currentReplayNode;

      const isStart = index === 0;

      const isEnd = index === routeResult.path.length - 1;

      let background = "#2563eb";

      if (isStart) background = "#16a34a";

      if (isEnd) background = "#dc2626";

      if (isCurrent) background = "#f59e0b";

      return {

        id: String(node.id),

        position: {

          x: index * 180,

          y: 120,

        },

        data: {

          label: node.name,

        },

        style: {

          background,

          color: "#ffffff",

          border: isCurrent

            ? "4px solid #fde68a"

            : "2px solid #93c5fd",

          borderRadius: "10px",

          padding: 10,

          width: 150,

          textAlign: "center",

          fontWeight: "bold",

          boxShadow: isCurrent

            ? "0 0 25px rgba(245,158,11,0.9)"

            : "none",

        },

      };

    });

    const graphEdges = [];

    for (

      let i = 0;

      i < routeResult.path.length - 1;

      i++

    ) {

      graphEdges.push({

        id: `edge-${i}`,

        source: String(routeResult.path[i].id),

        target: String(routeResult.path[i + 1].id),

        animated: i < currentReplayNode,

        label: "Road",

        style: {

          stroke:

            i < currentReplayNode

              ? "#22c55e"

              : "#3b82f6",

          strokeWidth: 4,

        },

      });

    }

    return {

      nodes: graphNodes,

      edges: graphEdges,

    };

  }, [routeResult, currentReplayNode]);

  return (

    <Card

      title="Interactive Graph"

      subtitle="Live route traversal"

    >

      {

        !routeResult

        ?

        (

          <EmptyState

            title="No Graph Available"

            subtitle="Calculate a route to visualize the road graph."

          />

        )

        :

        <>

          {/* Summary */}

          <div className="mb-5 grid gap-4 md:grid-cols-4">

            <div className="rounded-xl bg-slate-900 p-4">

              <p className="text-slate-400">

                Distance

              </p>

              <h2 className="mt-2 flex items-center gap-2 text-xl font-bold text-white">

                <Route size={20} />

                {routeResult.distance} km

              </h2>

            </div>

            <div className="rounded-xl bg-slate-900 p-4">

              <p className="text-slate-400">

                ETA

              </p>

              <h2 className="mt-2 text-xl font-bold text-white">

                {routeResult.estimatedTime} min

              </h2>

            </div>

            <div className="rounded-xl bg-slate-900 p-4">

              <p className="text-slate-400">

                Nodes

              </p>

              <h2 className="mt-2 flex items-center gap-2 text-xl font-bold text-blue-400">

                <Activity size={20} />

                {routeResult.path.length}

              </h2>

            </div>

            <div className="rounded-xl bg-slate-900 p-4">

              <p className="text-slate-400">

                Current

              </p>

              <h2 className="mt-2 flex items-center gap-2 text-xl font-bold text-amber-400">

                <MapPinned size={20} />

                {routeResult.path[currentReplayNode]?.name}

              </h2>

            </div>

          </div>

          {/* Graph */}

          <div className="h-[500px] overflow-hidden rounded-xl">

            <ReactFlow

              nodes={nodes}

              edges={edges}

              fitView

              fitViewOptions={{

                padding: 0.25,

              }}

            >

              <MiniMap

                zoomable

                pannable

              />

              <Controls

                showInteractive={false}

              />

              <Background

                gap={22}

                size={2}

                color="#334155"

              />

            </ReactFlow>

          </div>

        </>

      }

    </Card>

  );

}

export default GraphPlaceholder;