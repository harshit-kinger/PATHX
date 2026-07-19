#pragma once

#include <vector>
#include <string>

struct RouteResult
{
    std::vector<int> path;

    double totalDistance = 0.0;

    double estimatedTime = 0.0;

    std::string algorithm = "Dijkstra";

    int visitedNodes = 0;

    double executionTime = 0.0;
};