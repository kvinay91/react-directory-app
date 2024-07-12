import React, { useEffect, useRef, useState } from 'react'

export default function Stopwatchcount({ INITIAL_COUNT }) {
    const [count, setCount] = useState(INITIAL_COUNT);
    const [isPaused, setIsPaused] = useState(false);
    const timmer = useRef(null);

    useEffect(() => {
        if (count > 0 && !isPaused) {
            timmer.current = setInterval(() => {
                setCount(prev => prev - 1);
            }, 1000)
        }

        return () => clearInterval(timmer.current);

    }, [count, isPaused])

    const isPausedHandler = () => {
        setIsPaused(true);
        clearInterval(timmer.current);
    }

    const playHandler = () => {
        setIsPaused(false);
    }

    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={isPausedHandler}>Paused </button>
            <button onClick={playHandler}>Play</button>
        </div>
    )
}
