exports.getTraffic = (req, res) => {

    res.json({

        success: true,

        traffic: {

            low: 14,

            moderate: 9,

            heavy: 7,

            closed: 1,

            averageSpeed: "42 km/h",

            alerts: [

                {
                    road: "PGIMER Road",
                    status: "Heavy Traffic"
                },

                {
                    road: "Sector 22 Market",
                    status: "Moderate Traffic"
                },

                {
                    road: "Airport Road",
                    status: "Clear"
                },

                {
                    road: "Elante Mall",
                    status: "Slow Moving"
                }

            ]

        }

    });

};