import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { Login } from '../Pages/Login';
import { Layout } from '../components/Layout';
import { Home } from '../Pages/Home';
import { Details } from '../components/Details';
import { LoginLayout } from '../components/LoginLayout';

export const AppRoutes = () => {
  return(
    <Routes>
      <Route path="/" element={
          <LoginLayout>
            <Login />
          </LoginLayout>
        }>
      </Route>

      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="detail/:id" element={<Details />} />
      </Route>
    </Routes> 
  )
}
