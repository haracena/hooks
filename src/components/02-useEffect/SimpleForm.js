import React, { Fragment, useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () => {
        console.log('componente renderizado');
    }, []);

    useEffect( () => {
        console.log(formState);
    }, [formState]);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }

    return (
        <Fragment>
            <h1>useEffect</h1>
            <hr />
            <div className='form-group'>
                <input 
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={ name }
                    onChange={ handleInputChange }
                />
                <input 
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='email@gmail.com'
                    autoComplete='off'
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            {
                name && <Message />
            }

        </Fragment>
    )
}

export default SimpleForm;
