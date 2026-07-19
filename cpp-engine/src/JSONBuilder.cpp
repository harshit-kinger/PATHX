#include "../include/JSONBuilder.hpp"

#include <sstream>

std::string JSONBuilder::buildRouteJSON(

    const RouteResult& result,

    const std::unordered_map<int, Node>& nodes)

{
    std::stringstream json;

    json << "{";

    json << "\"distance\":"
         << result.totalDistance
         << ",";

    json << "\"estimatedTime\":"
         << result.estimatedTime
         << ",";

    json << "\"algorithm\":\""
         << result.algorithm
         << "\",";

    json << "\"visitedNodes\":"
         << result.visitedNodes
         << ",";

    json << "\"executionTime\":"
         << result.executionTime
         << ",";

    json << "\"path\":[";

    for (size_t i = 0; i < result.path.size(); i++)
    {
        int nodeId = result.path[i];

        auto it = nodes.find(nodeId);

        if (it == nodes.end())
            continue;

        json << "{";

        json << "\"id\":"
             << it->second.id
             << ",";

        json << "\"name\":\""
             << it->second.name
             << "\",";

        json << "\"latitude\":"
             << it->second.latitude
             << ",";

        json << "\"longitude\":"
             << it->second.longitude
             << ",";

        json << "\"type\":\""
             << it->second.type
             << "\"";

        json << "}";

        if (i != result.path.size() - 1)
            json << ",";
    }

    json << "]";

    json << "}";

    return json.str();
}