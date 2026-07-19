import { Inbox } from "lucide-react";

function EmptyState({

    title = "No Data Available",

    subtitle = "Nothing to display right now."

}) {

    return (

        <div className="flex h-56 flex-col items-center justify-center rounded-xl border border-slate-700 bg-slate-900/40">

            <Inbox

                size={48}

                className="text-slate-500"

            />

            <h2 className="mt-4 text-lg font-semibold text-white">

                {title}

            </h2>

            <p className="mt-2 text-slate-400">

                {subtitle}

            </p>

        </div>

    );

}

export default EmptyState;