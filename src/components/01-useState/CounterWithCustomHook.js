import React, { Fragment } from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

const CounterWithCustomHook = () => {

    const { state: counter, increment, decrement, reset } = useCounter(100);

    return (
        <Fragment>
            <h1>Counter with hook: { counter }</h1>
            <hr />

            <button onClick={ increment } className='btn'>+1</button>
            <button onClick={ decrement } className='btn'>-1</button>
            <button onClick={ reset } className='btn'>Reset</button>
        </Fragment>
    )
}

export default CounterWithCustomHook;
