import React, { useContext } from 'react';

import { AuthContext } from '../context/AuthContext';
import { Button } from './Button/Button';

export const AuthButton: React.FC = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  return isLoggedIn ? (
    <Button onClick = {logout} text='Logout' />
  ) : (
    <Button onClick = {login} text='Login' />
  );
};
