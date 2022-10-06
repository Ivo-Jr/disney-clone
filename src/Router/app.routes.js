import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { Login } from '../components/Login';

export const AppRoutes = () => {
  return(
    <Routes>
      <Route path='/' element={<Login />}/>
    </Routes>
  )

}