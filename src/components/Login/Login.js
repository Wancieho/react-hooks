import React from 'react';

import './Login.scss';
import { useAuth } from '../../hooks/auth.hook';

export const Login = () => {
  const { logOut, loginHouseCode, user, isLoading, isError } = useAuth();

  const buttons = () => {
    if (isLoading) {
      return;
    }

    if (!user) {
      return <button onClick={() => loginHouseCode({
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
      ({isError && JSON.stringify(isError)})
      {buttons()}
      {isLoading && <span>Loading...</span>}
    </div>
  );
}  
