import React, { useRef, useState } from 'react';

import './Login.scss';
import { useAuth } from '../../hooks/auth.hook';

export const Login = () => {
  const { logOut, logInHouseCode, user, isLoading, isError } = useAuth();
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const emailRef = useRef();
  const [password, setPassword] = useState('cityslicka');
  const passwordRef = useRef();

  const buttons = () => {
    if (!user) {
      return <button onClick={() => logInHouseCode({
        email,
        password,
      })}>Log In</button>
    } else {
      return <button onClick={logOut}>Log Out</button>
    }
  }

  return (
    <div data-testid='Login'>
      {isError && <p>{isError}</p>}
      {!user &&
        <>
          <label>
            Email
        <input type="email" ref={emailRef} value={email} onChange={e => setEmail(e.target.value)} />
          </label>
          <label>
            Password
        <input type="password" ref={passwordRef} value={password} onChange={e => setPassword(e.target.value)} />
          </label>
        </>
      }
      {isLoading ? <p>Loading...</p> : buttons()}
    </div>
  );
}
