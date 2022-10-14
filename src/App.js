import { Routes } from './Router';

import './App.css';
import { AuthProvider } from './hooks/auth';

export const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
