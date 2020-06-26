import React from 'react'

const ShowIncrement = React.memo(({ increment }) => {
    console.log('componente ShowIncrement montado');
    return (
        <button
            className='btn btn-primary'
            onClick={() => {
                increment();
            }}
        >
            Incrementar
        </button>
    )
})

export default ShowIncrement
