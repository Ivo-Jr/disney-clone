import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { Header } from '../Header';

export const LoginLayout = ({ children }) => {
  const navigate = useNavigate();
  const { logged } = useAuth();

  useEffect(() => {
    if(logged) {
      navigate('/home', { replace: true})
    }
  },[logged, navigate])

  return(
    <>
      <Header />
      {children}
    </>
  )
}