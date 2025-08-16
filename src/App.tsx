import React from 'react';

import { AuthProvider } from './context/AuthContext';
import Toolbar from './components/Toolbar/Toolbar';

export const App: React.FC = () => (
  <AuthProvider >
      <Toolbar/>
  </AuthProvider>
);
