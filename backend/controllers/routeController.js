const path = require("path");
const fs = require("fs");
const { execFile } = require("child_process");

exports.optimizeRoute = (req, res) => {

    const {
        source,
        destination
    } = req.body;

    const cppExecutable = path.join(
        __dirname,
        "../../cpp-engine/test.exe"
    );

    const jsonPath = path.join(
        __dirname,
        "../../cpp-engine/output/route.json"
    );

    function runAlgorithm(algo) {

        return new Promise((resolve, reject) => {

            const start = process.hrtime.bigint();

            execFile(

                cppExecutable,

                [
                    source,
                    destination,
                    algo
                ],

                {
                    cwd: path.join(
                        __dirname,
                        "../../cpp-engine"
                    )
                },

                (error) => {

                    if (error) {

                        reject(error);

                        return;

                    }

                    try {

                        const end = process.hrtime.bigint();

                        const data = JSON.parse(
                            fs.readFileSync(jsonPath, "utf8")
                        );

                        data.executionTime =
                            Number(end - start) / 1000000;

                        resolve(data);

                    }

                    catch (err) {

                        reject(err);

                    }

                }

            );

        });

    }

    Promise.all([

        runAlgorithm("dijkstra"),

        runAlgorithm("astar")

    ])

    .then(([dijkstra, astar]) => {

        const winner =

            dijkstra.executionTime <= astar.executionTime

                ? "Dijkstra"

                : "A*";

        res.json({

            success: true,

            comparison: {

                dijkstra,

                astar,

                winner

            }

        });

    })

    .catch(err => {

        console.error(err);

        res.status(500).json({

            success: false,

            message: "Algorithm comparison failed"

        });

    });

};