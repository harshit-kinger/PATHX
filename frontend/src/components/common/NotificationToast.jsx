import { useContext } from "react";

import { AnimatePresence, motion } from "framer-motion";

import {

    CheckCircle2,
    AlertTriangle,
    XCircle,
    Info

} from "lucide-react";

import { NavigationContext } from "../../context/NavigationContext";

function NotificationToast() {

    const { notifications } = useContext(NavigationContext);

    const getIcon = (type) => {

        switch (type) {

            case "success":
                return <CheckCircle2 className="text-green-400" size={22} />;

            case "error":
                return <XCircle className="text-red-400" size={22} />;

            case "warning":
                return <AlertTriangle className="text-yellow-400" size={22} />;

            default:
                return <Info className="text-blue-400" size={22} />;

        }

    };

    const getBorder = (type) => {

        switch (type) {

            case "success":
                return "border-green-500";

            case "error":
                return "border-red-500";

            case "warning":
                return "border-yellow-500";

            default:
                return "border-blue-500";

        }

    };

    return (

        <div className="pointer-events-none fixed right-6 top-6 z-[9999] flex w-[360px] flex-col gap-3">

            <AnimatePresence>

                {

                    notifications.map((notification) => (

                        <motion.div

                            key={notification.id}

                            initial={{
                                opacity: 0,
                                x: 80,
                                scale: 0.9
                            }}

                            animate={{
                                opacity: 1,
                                x: 0,
                                scale: 1
                            }}

                            exit={{
                                opacity: 0,
                                x: 100,
                                scale: 0.9
                            }}

                            transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
}}

                            className={`rounded-xl border-l-4 ${getBorder(notification.type)} bg-slate-900/95 shadow-2xl backdrop-blur-lg`}

                        >

                            <div className="flex items-start gap-4 p-4">

                                {getIcon(notification.type)}

                                <div className="flex-1">

                                    <h3 className="font-semibold text-white">

                                        {

                                            notification.type === "success"

                                                ? "Success"

                                                : notification.type === "error"

                                                    ? "Error"

                                                    : notification.type === "warning"

                                                        ? "Warning"

                                                        : "Information"

                                        }

                                    </h3>

                                    <p className="mt-1 text-sm text-slate-300">

                                        {notification.message}

                                    </p>

                                </div>

                            </div>

                        </motion.div>

                    ))

                }

            </AnimatePresence>

        </div>

    );

}

export default NotificationToast;