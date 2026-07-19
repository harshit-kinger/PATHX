#pragma once

#include "RouteResult.hpp"
#include "Node.hpp"

#include <string>
#include <unordered_map>

class JSONBuilder
{
public:

    static std::string buildRouteJSON(

        const RouteResult& result,

        const std::unordered_map<int, Node>& nodes

    );
};