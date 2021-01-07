import React from 'react';

import { useAuth } from '../../../hooks/auth.hook';

export const Header = () => {
  const { user } = useAuth();

  return (
    <div data-testid="Header">
      [{JSON.stringify(user)}]
    </div>
  )
}
