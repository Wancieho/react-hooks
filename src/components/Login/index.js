import React, { useState } from 'react';
import axios from 'axios';

import './Login.scss';

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState('false');
  const [isError, setIsError] = useState(false);

  const houseCodeLogin = async () => {
    setIsLoading(true);

    try {
      const response = await axios(`http://jsonplaceholder.typicode.com/users`);

      setLoggedIn('true');
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  const logOut = async () => {
    setLoggedIn('false');
  }

  return (
    <div data-testid="Login">
      {isLoading && <strong>loading...</strong>}
      {loggedIn === 'false'
        ?
        <button onClick={houseCodeLogin}>Login</button>
        :
        <button onClick={logOut}>Logout</button>
      }
    </div>
  )
};
