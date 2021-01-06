import React from 'react';

import { Login } from '../../Login';

const Header = () => {
  const { loggedIn, setLoggedIn } = Login();

  return (
    <div data-testid="Header">
      ({loggedIn})
    </div>
  )
};
export default Header;
