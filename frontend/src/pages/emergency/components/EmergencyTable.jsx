import Card from "../../../components/common/Card";

function EmergencyTable({ emergency }) {

    return (

        <Card
            title="Recent Emergencies"
            subtitle="Latest emergency incidents"
        >

            <div className="space-y-4">

                {emergency.dispatches.map((item) => (

                    <div
                        key={item.id}
                        className="flex items-center justify-between border-b border-white/10 pb-3"
                    >

                        <div>

                            <p className="font-semibold text-white">
                                {item.id}
                            </p>

                            <p className="text-sm text-slate-400">
                                {item.type} • {item.location}
                            </p>

                        </div>

                        <span className="rounded-full bg-red-500/20 px-3 py-1 text-red-300">

                            {item.status}

                        </span>

                    </div>

                ))}

            </div>

        </Card>

    );

}

export default EmergencyTable;