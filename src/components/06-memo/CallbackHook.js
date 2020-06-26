import React, { useState, useCallback } from 'react';
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    const increment = useCallback((num) => {
        setCounter(prevCounter => prevCounter + 1);
    }, [setCounter]);

    return (
        <div>
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={ increment } />
        </div>
    )
}

export default CallbackHook;
