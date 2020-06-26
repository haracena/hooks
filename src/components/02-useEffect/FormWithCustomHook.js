import React, { useEffect } from 'react';
import './effects.css';
import { Message } from './Message';
import { useForm } from '../../hooks/useForm';

const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    }


    return (
        <form onSubmit={ handleSubmit }>
            <h1>useEffect</h1>
            <hr />
            <div>
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
                <input 
                    type='password'
                    name='password'
                    className='form-control'
                    placeholder='********'
                    autoComplete='off'
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>

            <button type='submit'>Guardar</button>

        </form>
    )
}

export default FormWithCustomHook;
