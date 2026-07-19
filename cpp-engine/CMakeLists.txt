cmake_minimum_required(VERSION 3.15)

project(PATHX_CPP)

set(CMAKE_CXX_STANDARD 17)

include_directories(include)

add_executable(PATHX

    src/main.cpp
    src/Graph.cpp
    src/CSVLoader.cpp
    src/Dijkstra.cpp
    src/AStar.cpp
    src/NodeLoader.cpp
    src/JSONBuilder.cpp

)