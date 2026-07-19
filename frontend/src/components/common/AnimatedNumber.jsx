import { useEffect, useState } from "react";

function AnimatedNumber({

    value,

    duration = 1500,

    suffix = ""

}) {

    const [count, setCount] = useState(0);

    useEffect(() => {

        let start = 0;

        const end = Number(value);

        if (isNaN(end)) return;

        const increment = end / (duration / 20);

        const timer = setInterval(() => {

            start += increment;

            if (start >= end) {

                start = end;

                clearInterval(timer);

            }

            setCount(Math.floor(start));

        }, 20);

        return () => clearInterval(timer);

    }, [value, duration]);

    return (

        <span>

            {count}

            {suffix}

        </span>

    );

}

export default AnimatedNumber;