import React from 'react';

import './Login.scss';
import { useAuth } from '../../hooks/auth.hook';

export const Login = () => {
  const { logOut, loginHouseCode, user, isLoading, isError } = useAuth();

  const logIn = () => {
    loginHouseCode({
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    });
  }

  return (
    <div data-testid='Login'>
      [{JSON.stringify(user)}]
      ({isError && JSON.stringify(isError)})
      {!isLoading &&
        <button onClick={!user ? logIn : logOut}>{!user ? 'Login' : 'Logout'}</button>
      }
      {isLoading && <span>Loading...</span>}
    </div>
  );
}  
