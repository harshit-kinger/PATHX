exports.getTrafficHeatmap = (req, res) => {

    res.json({

        success: true,

        traffic: [

            {

                id: 1,

                location: "Sector 17",

                latitude: 30.7415,

                longitude: 76.7822,

                severity: "Low"

            },

            {

                id: 2,

                location: "Elante Mall",

                latitude: 30.7059,

                longitude: 76.8015,

                severity: "Moderate"

            },

            {

                id: 3,

                location: "Tribune Chowk",

                latitude: 30.7016,

                longitude: 76.7798,

                severity: "Heavy"

            },

            {

                id: 4,

                location: "Airport Road",

                latitude: 30.6735,

                longitude: 76.7885,

                severity: "Blocked"

            }

        ]

    });

};