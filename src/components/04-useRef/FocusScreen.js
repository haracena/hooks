import React, { useRef } from 'react'

const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        // document.querySelector('input').select();
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus</h1>
            <hr />
            <input 
                ref={ inputRef }
                className='form-control'
                placeholder='nombre'
            />

            <button 
                className='btn btn-primary'
                onClick={ handleClick }
            >
                Focus
            </button>
        </div>
    )
}

export default FocusScreen;
