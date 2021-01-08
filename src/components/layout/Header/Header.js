import React from 'react';

import { useAuth } from '../../../hooks/auth.hook';

export const Header = () => {
  const { user, isLoading, isError } = useAuth();

  console.debug('header');

  return (
    <div data-testid="Header">
      {JSON.stringify(user)}
      {isError && <p>{isError}</p>}
      {isLoading && <p>Loading...</p>}
    </div>
  )
}
