import React from 'react'

const Small = React.memo(({ value }) => {
    console.log('componente Small llamado');
    
    return (
        <small>
            { value }
        </small>
    )
})

export default Small
