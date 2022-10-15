import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { Header } from '../Header';

export const Layout = () => {
  const { logged } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(!logged) {
      navigate('/', {replace: true})
    } else {
      navigate('/home', { replace: true})
    }
  },[logged, navigate]);

  return(
    <>
      <Header />
      <Outlet />
    </>
  )
}