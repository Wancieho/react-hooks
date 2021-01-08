import React from 'react';

import './Login.scss';
import { useAuth } from '../../hooks/auth.hook';

export const Login = () => {
  const { logOut, logInHouseCode, user, isLoading, isError } = useAuth();

  const buttons = () => {
    if (isLoading) {
      return;
    }

    if (!user) {
      return <button onClick={() => logInHouseCode({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      })}>Log In</button>
    } else {
      return <button onClick={logOut}>Log Out</button>
    }
  }

  return (
    <div data-testid='Login'>
      [{JSON.stringify(user)}]
      {isError && <p>{isError}</p>}
      {buttons()}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}  
