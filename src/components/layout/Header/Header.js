import React from 'react';

import { useUser } from '../../../contexts/user.context';

export const Header = () => {
  const user = useUser();

  return (
    <div data-testid="Header">
      {JSON.stringify(user)}
    </div>
  )
}
