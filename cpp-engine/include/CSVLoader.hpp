#pragma once

#include <string>

class Graph;

class CSVLoader
{
public:
    static bool loadRoads(
        const std::string& filename,
        Graph& graph
    );
};