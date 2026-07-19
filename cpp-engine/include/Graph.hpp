#pragma once

#include <unordered_map>
#include <vector>

#include "Edge.hpp"

class Graph
{
private:

    std::unordered_map<int, std::vector<Edge>> adjacencyList;

public:

    void addRoad(
        int source,
        int destination,
        double distance,
        double trafficFactor
    );

    const std::unordered_map<
        int,
        std::vector<Edge>>&
    getGraph() const;
};