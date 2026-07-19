#pragma once

#include <unordered_map>
#include <string>

struct TrafficInfo
{
    std::string level;
    double multiplier;
};

class TrafficManager
{
public:

    static std::unordered_map<int, TrafficInfo>
    loadTraffic(const std::string& filename);
};