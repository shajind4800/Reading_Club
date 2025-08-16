import React from 'react';

import { Button } from './Button/Button';
import { useAppContext } from '../context/AppContext';

export const AuthButton: React.FC = () => {
  const { state, dispatch } = useAppContext();
  return state.isAuthenticated ? (
    <Button onClick = {()=>dispatch({type : 'LOGOUT'})} text = "Logout"/>
  ) : (
    <Button onClick = {()=>dispatch({type : 'LOGIN'})} text="Login"/>
  
  );
};
