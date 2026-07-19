import { LoaderCircle } from "lucide-react";

function LoadingSpinner({

    title = "Loading...",

    subtitle = "Please wait"

}) {

    return (

        <div className="flex h-56 flex-col items-center justify-center">

            <LoaderCircle

                size={48}

                className="animate-spin text-blue-500"

            />

            <h2 className="mt-5 text-lg font-semibold text-white">

                {title}

            </h2>

            <p className="mt-1 text-slate-400">

                {subtitle}

            </p>

        </div>

    );

}

export default LoadingSpinner;