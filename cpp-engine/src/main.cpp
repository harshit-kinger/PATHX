#include "../include/Graph.hpp"
#include "../include/CSVLoader.hpp"
#include "../include/Dijkstra.hpp"
#include "../include/NodeLoader.hpp"
#include "../include/JSONBuilder.hpp"
#include "../include/AStar.hpp"

#include <iostream>
#include <fstream>

int main(int argc, char* argv[])
{
    Graph graph;

    auto nodes =
        NodeLoader::loadNodes("data/nodes.csv");

    if (!CSVLoader::loadRoads(
            "data/roads.csv",
            graph))
    {
        return 1;
    }

    std::cout << "=====================================\n";
    std::cout << "PATHX Graph Loaded Successfully\n";
    std::cout << "=====================================\n\n";

    for (const auto& node : graph.getGraph())
    {
        std::cout << "Node " << node.first << " -> ";

        for (const auto& edge : node.second)
        {
            std::cout
                << edge.destination
                << "("
                << edge.distance
                << " km) ";
        }

        std::cout << std::endl;
    }

    // ------------------------------------
    // Default Route
    // ------------------------------------

    int sourceId = 1;
    int destinationId = 4;

    // ------------------------------------
    // Read Source & Destination
    // ------------------------------------

    if (argc >= 3)
    {
        std::string sourceName = argv[1];
        std::string destinationName = argv[2];

        int s =
            NodeLoader::findNodeIdByName(
                nodes,
                sourceName
            );

        int d =
            NodeLoader::findNodeIdByName(
                nodes,
                destinationName
            );

        if (s != -1 && d != -1)
        {
            sourceId = s;
            destinationId = d;
        }
    }

    std::cout << "\n\n";
    std::cout << "========== DIJKSTRA TEST ==========\n";

    RouteResult result;

std::string algorithm = "Dijkstra";

if (argc >= 4)
{
    algorithm = argv[3];
}

if (algorithm == "astar")
{
    result =
        AStar::shortestPath(
            graph,
            sourceId,
            destinationId
        );
}
else
{
    result =
        Dijkstra::shortestPath(
            graph,
            sourceId,
            destinationId
        );
}

    std::cout << "Shortest Path:\n";

    for (int nodeId : result.path)
    {
        auto it = nodes.find(nodeId);

        if (it != nodes.end())
        {
            std::cout
                << it->second.name
                << std::endl;
        }
    }

    std::cout << "\nCoordinates:\n";

    for (int nodeId : result.path)
    {
        auto it = nodes.find(nodeId);

        if (it != nodes.end())
        {
            std::cout
                << it->second.latitude
                << ", "
                << it->second.longitude
                << std::endl;
        }
    }

    std::cout << "\n";

    std::cout
        << "Distance : "
        << result.totalDistance
        << " km\n";

    std::cout
        << "Estimated Time : "
        << result.estimatedTime
        << " min\n";

    // ------------------------------------
    // JSON
    // ------------------------------------

    std::string json =
        JSONBuilder::buildRouteJSON(
            result,
            nodes
        );

    std::ofstream jsonFile(
        "output/route.json"
    );

    if (jsonFile.is_open())
    {
        jsonFile << json;
        jsonFile.close();
    }

    std::cout
        << "\n========== JSON OUTPUT ==========\n";

    std::cout
        << json
        << std::endl;

    std::cout << "\n\n";
    std::cout << "========== NODE TEST ==========\n";

    for (const auto& node : nodes)
    {
        std::cout
            << node.second.id
            << " : "
            << node.second.name
            << std::endl;
    }

    return 0;
}