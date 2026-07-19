#pragma once

#include "Graph.hpp"
#include "RouteResult.hpp"

class Dijkstra
{
public:

    static RouteResult shortestPath(

        const Graph& graph,

        int source,

        int destination

    );
};