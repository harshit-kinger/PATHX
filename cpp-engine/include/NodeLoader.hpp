#pragma once

#include "Node.hpp"

#include <unordered_map>
#include <string>

class NodeLoader
{
public:

    // Load all nodes from CSV
    static std::unordered_map<int, Node>
    loadNodes(const std::string& filename);

    // Find node ID using its name
    static int
    findNodeIdByName(
        const std::unordered_map<int, Node>& nodes,
        const std::string& nodeName
    );
};