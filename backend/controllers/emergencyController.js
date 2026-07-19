exports.getEmergencyStatus = (req, res) => {

    res.json({

        success: true,

        emergency: {

            ambulance: {
                available: 12,
                active: 4
            },

            fire: {
                available: 6,
                active: 2
            },

            police: {
                available: 15,
                active: 7
            },

            priorityLevel: "HIGH",

            dispatches: [

                {
                    id: "EMG-201",
                    type: "Ambulance",
                    location: "PGIMER",
                    status: "En Route"
                },

                {
                    id: "EMG-202",
                    type: "Police",
                    location: "Sector 22",
                    status: "Dispatched"
                },

                {
                    id: "EMG-203",
                    type: "Fire",
                    location: "Industrial Area",
                    status: "Standby"
                }

            ]

        }

    });

};