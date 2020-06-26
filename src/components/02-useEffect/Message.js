import React, { useEffect } from 'react'

export const Message = () => {

    const mouseMove = (event) => {
        // const coords = { x: event.x, y: event.y };
        console.log('wea');
        // console.log(coords);
    }

    window.addEventListener('mousemove', mouseMove);

    useEffect(() => {
        console.log('componente montado');
        return () => {
            console.log('componente desmontado');
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    return (
        <div>
            <h3>message component</h3>
        </div>
    )
}
