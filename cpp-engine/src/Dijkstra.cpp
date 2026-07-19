#include "../include/Dijkstra.hpp"

#include <queue>
#include <unordered_map>
#include <limits>
#include <algorithm>
#include <chrono>

struct Node
{
    int vertex;
    double distance;

    bool operator>(const Node& other) const
    {
        return distance > other.distance;
    }
};

RouteResult Dijkstra::shortestPath(
    const Graph& graph,
    int source,
    int destination)
{
    auto start =
        std::chrono::high_resolution_clock::now();

    std::unordered_map<int, double> distance;
    std::unordered_map<int, int> parent;

    int visitedNodes = 0;

    std::priority_queue<
        Node,
        std::vector<Node>,
        std::greater<Node>
    > pq;

    for (const auto& node : graph.getGraph())
    {
        distance[node.first] =
            std::numeric_limits<double>::max();
    }

    distance[source] = 0;

    pq.push({source, 0});

    while (!pq.empty())
    {
        Node current = pq.top();
        pq.pop();

        visitedNodes++;

        if (current.vertex == destination)
        {
            break;
        }

        auto graphData = graph.getGraph();

        auto it = graphData.find(current.vertex);

        if (it == graphData.end())
        {
            continue;
        }

        for (const Edge& edge : it->second)
        {
            double roadCost =
    edge.distance * edge.trafficFactor;

double newDistance =
    distance[current.vertex] + roadCost;
            if (newDistance < distance[edge.destination])
            {
                distance[edge.destination] = newDistance;

                parent[edge.destination] = current.vertex;

                pq.push(
                {
                    edge.destination,
                    newDistance
                });
            }
        }
    }

    RouteResult result;

    result.algorithm = "Dijkstra";

    result.visitedNodes = visitedNodes;

    if (distance[destination] ==
        std::numeric_limits<double>::max())
    {
        result.path = {};
        result.totalDistance = 0;
        result.estimatedTime = 0;

        auto end =
            std::chrono::high_resolution_clock::now();

        result.executionTime =
            std::chrono::duration<double, std::milli>(
                end - start
            ).count();

        return result;
    }

    std::vector<int> path;

    int current = destination;

    while (current != source)
    {
        path.push_back(current);
        current = parent[current];
    }

    path.push_back(source);

    std::reverse(path.begin(), path.end());

    result.path = path;

    result.totalDistance = distance[destination];

    result.estimatedTime =
        (distance[destination] / 40.0) * 60.0;

    auto end =
        std::chrono::high_resolution_clock::now();

    result.executionTime =
        std::chrono::duration<double, std::milli>(
            end - start
        ).count();

    return result;
}