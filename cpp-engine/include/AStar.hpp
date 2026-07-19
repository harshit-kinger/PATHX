#pragma once

#include "Graph.hpp"
#include "RouteResult.hpp"

class AStar
{
public:

    static RouteResult shortestPath(
        const Graph& graph,
        int source,
        int destination
    );
};