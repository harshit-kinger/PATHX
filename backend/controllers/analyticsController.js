exports.getAnalytics = (req, res) => {

    res.json({

        success: true,

        analytics: {

            totalRoutes: 248,

            optimizedRoutes: 231,

            averageDistance: 5.8,

            averageTime: 8.6,

            averageExecution: 2.1,

            dijkstraRuns: 132,

            aStarRuns: 116,

            trafficAlerts: 8,

            emergencyRequests: 13

        }

    });

};