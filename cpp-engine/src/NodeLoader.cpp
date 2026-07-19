#include "../include/NodeLoader.hpp"

#include <fstream>
#include <sstream>
#include <algorithm>

std::unordered_map<int, Node>
NodeLoader::loadNodes(const std::string& filename)
{
    std::unordered_map<int, Node> nodes;

    std::ifstream file(filename);

    if (!file.is_open())
    {
        return nodes;
    }

    std::string line;

    // Skip header
    getline(file, line);

    while (getline(file, line))
    {
        std::stringstream ss(line);

        std::string id;
        std::string name;
        std::string latitude;
        std::string longitude;
        std::string type;

        getline(ss, id, ',');
        getline(ss, name, ',');
        getline(ss, latitude, ',');
        getline(ss, longitude, ',');
        getline(ss, type, ',');

        Node node;

        node.id = stoi(id);
        node.name = name;
        node.latitude = stod(latitude);
        node.longitude = stod(longitude);
        node.type = type;

        nodes[node.id] = node;
    }

    return nodes;
}

int NodeLoader::findNodeIdByName(
    const std::unordered_map<int, Node>& nodes,
    const std::string& nodeName)
{
    std::string search = nodeName;

    std::transform(
        search.begin(),
        search.end(),
        search.begin(),
        ::tolower
    );

    for (const auto& node : nodes)
    {
        std::string current = node.second.name;

        std::transform(
            current.begin(),
            current.end(),
            current.begin(),
            ::tolower
        );

        if (current == search)
        {
            return node.first;
        }
    }

    return -1;
}