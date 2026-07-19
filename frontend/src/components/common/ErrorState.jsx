import { AlertTriangle, RotateCcw } from "lucide-react";

function ErrorState({

    title = "Something went wrong",

    subtitle = "Unable to load the requested data.",

    onRetry

}) {

    return (

        <div className="flex h-56 flex-col items-center justify-center rounded-xl border border-red-500/20 bg-red-500/5 p-6">

            <AlertTriangle

                size={52}

                className="text-red-400"

            />

            <h2 className="mt-4 text-xl font-bold text-white">

                {title}

            </h2>

            <p className="mt-2 text-center text-slate-400">

                {subtitle}

            </p>

            {

                onRetry &&

                <button

                    onClick={onRetry}

                    className="mt-6 flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-500"

                >

                    <RotateCcw size={18} />

                    Retry

                </button>

            }

        </div>

    );

}

export default ErrorState;