import React, { Suspense, lazy } from 'react';

import { Routes, Route } from 'react-router-dom';
import { Login } from '../Pages/Login';
import { LoginLayout } from '../components/LoginLayout';
import { LoadingSpiner } from '../components/LoadingSpiner';

const Home = lazy(() => import('../Pages/Home'));
const Layout = lazy(() => import('../components/Layout'));
const Details = lazy(() => import('../components/Details'));

export const AppRoutes = () => {
  return(
    <Suspense fallback={<LoadingSpiner />}>
      <Routes>
        <Route path="/" element={
            <LoginLayout>
              <Login />
            </LoginLayout>
          }>
        </Route>

        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={
            <Suspense fallback={<LoadingSpiner />}>
              <Details />
            </Suspense>
          }/>
        </Route>
      </Routes>
    </Suspense>
  )
}
