import Card from "../../../components/common/Card";

function UnitStatus({ emergency }) {

    const units = [

        {
            name: "Ambulance",
            status: emergency.ambulance.available
        },

        {
            name: "Fire",
            status: emergency.fire.available
        },

        {
            name: "Police",
            status: emergency.police.available
        }

    ];

    return (

        <Card
            title="Unit Status"
            subtitle="Available emergency units"
        >

            <div className="space-y-4">

                {units.map((unit) => (

                    <div
                        key={unit.name}
                        className="flex items-center justify-between"
                    >

                        <span className="text-white">
                            {unit.name}
                        </span>

                        <span className="rounded-full bg-green-500/20 px-3 py-1 text-green-300">

                            {unit.status}

                        </span>

                    </div>

                ))}

            </div>

        </Card>

    );

}

export default UnitStatus;