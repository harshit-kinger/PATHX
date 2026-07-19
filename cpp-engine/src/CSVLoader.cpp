#include "../include/CSVLoader.hpp"
#include "../include/Graph.hpp"

#include <fstream>
#include <sstream>
#include <iostream>

bool CSVLoader::loadRoads(
    const std::string& filename,
    Graph& graph)
{
    std::ifstream file(filename);

    if (!file.is_open())
    {
        std::cout
            << "Unable to open "
            << filename
            << std::endl;

        return false;
    }

    std::string line;

    // Skip header
    getline(file, line);

    while (getline(file, line))
    {
        std::stringstream ss(line);

        std::string roadId;
        std::string sourceId;
        std::string destinationId;
        std::string distance;
        std::string speedLimit;

        getline(ss, roadId, ',');
        getline(ss, sourceId, ',');
        getline(ss, destinationId, ',');
        getline(ss, distance, ',');
        getline(ss, speedLimit, ',');

        double trafficFactor = 1.0;

        int speed = stoi(speedLimit);

        if (speed <= 30)
            trafficFactor = 2.5;
        else if (speed <= 40)
            trafficFactor = 1.8;
        else if (speed <= 50)
            trafficFactor = 1.3;
        else
            trafficFactor = 1.0;

        graph.addRoad(
            stoi(sourceId),
            stoi(destinationId),
            stod(distance),
            trafficFactor
        );
    }

    file.close();

    return true;
}