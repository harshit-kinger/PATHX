#include "../traffic/TrafficManager.hpp"

#include <fstream>
#include <sstream>

std::unordered_map<int, TrafficInfo>
TrafficManager::loadTraffic(const std::string& filename)
{
    std::unordered_map<int, TrafficInfo> traffic;

    std::ifstream file(filename);

    if(!file.is_open())
        return traffic;

    std::string line;

    getline(file,line);

    while(getline(file,line))
    {
        std::stringstream ss(line);

        std::string id;
        std::string level;
        std::string multiplier;

        getline(ss,id,',');
        getline(ss,level,',');
        getline(ss,multiplier,',');

        TrafficInfo info;

        info.level=level;
        info.multiplier=std::stod(multiplier);

        traffic[std::stoi(id)]=info;
    }

    return traffic;
}