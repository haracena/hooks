import React, { useContext } from 'react'
import { UserContext } from './UserContext';

const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  const setUserButton = () => {
    setUser({
      id: 123,
      name: 'hugone'
    });
  }

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <button 
        className='btn btn-primary'
        onClick={ setUserButton }
      >getUser</button>
    </div>
  )
}

export default LoginScreen;