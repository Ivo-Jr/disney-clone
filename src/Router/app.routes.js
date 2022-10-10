import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { Header } from '../components/Header';
import { LoginLayout } from '../components/LoginLayout';
import { Login } from '../components/Login';

export const AppRoutes = () => {
  return(
    <Routes>
      <Route path='/' element={
          <LoginLayout>
            <Header />
            <Login />
          </LoginLayout>
        }/>
    </Routes>
  )
}