#include "../include/AStar.hpp"

#include <queue>
#include <unordered_map>
#include <unordered_set>
#include <cmath>
#include <algorithm>

struct State
{
    int node;
    double fScore;

    bool operator<(const State& other) const
    {
        return fScore > other.fScore;
    }
};

static double heuristic(int a, int b)
{
    return std::abs(a - b) * 0.5;
}

RouteResult AStar::shortestPath(
    const Graph& graph,
    int source,
    int destination)
{
    std::priority_queue<State> pq;

    std::unordered_map<int,double> gScore;
    std::unordered_map<int,double> fScore;
    std::unordered_map<int,int> parent;
    std::unordered_set<int> visited;

    for(const auto& node : graph.getGraph())
    {
        gScore[node.first]=1e9;
        fScore[node.first]=1e9;
    }

    gScore[source]=0;
    fScore[source]=heuristic(source,destination);

    pq.push({source,fScore[source]});

    while(!pq.empty())
    {
        int current=pq.top().node;
        pq.pop();

        if(current==destination)
            break;

        if(visited.count(current))
            continue;

        visited.insert(current);

        for (const auto& edge : graph.getGraph().at(current))
{
    double roadCost =
    edge.distance * edge.trafficFactor;

double tentative =
    gScore[current] + roadCost;

    if (tentative < gScore[edge.destination])
    {
        gScore[edge.destination] = tentative;

        fScore[edge.destination] =
            tentative +
            heuristic(edge.destination, destination);

        parent[edge.destination] = current;

        pq.push(
        {
            edge.destination,
            fScore[edge.destination]
        });
    }
}
}

    RouteResult result;

    result.algorithm="A*";

    result.totalDistance=gScore[destination];

    result.estimatedTime=
        result.totalDistance*1.5;

    if(parent.find(destination)==parent.end()
        && source!=destination)
    {
        return result;
    }

    std::vector<int> path;

   int current = destination;

    path.push_back(current);

    while(current!=source)
    {
        current=parent[current];
        path.push_back(current);
    }

    std::reverse(path.begin(),path.end());

    result.path=path;

    return result;
}