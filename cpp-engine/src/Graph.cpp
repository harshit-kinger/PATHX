#include "../include/Graph.hpp"

void Graph::addRoad(
    int source,
    int destination,
    double distance,
    double trafficFactor)
{
    adjacencyList[source].push_back(
    {
        destination,
        distance,
        trafficFactor
    });

    adjacencyList[destination].push_back(
    {
        source,
        distance,
        trafficFactor
    });
}

const std::unordered_map<
    int,
    std::vector<Edge>>&
Graph::getGraph() const
{
    return adjacencyList;
}