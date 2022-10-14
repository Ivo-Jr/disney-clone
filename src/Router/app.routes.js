import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { Login } from '../Pages/Login';
import { Layout } from '../components/Layout';
import { Home } from '../Pages/Home';

export const AppRoutes = () => {
  return(
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
      </Route>
    </Routes>
  )
}