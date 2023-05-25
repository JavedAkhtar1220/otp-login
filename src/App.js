import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthLayout from './Layout/AuthLayout';
import {  LoginPage, VerifyPage } from './screens';



const App = () => {
  return <Routes>
    <Route element={<AuthLayout />}>
        <Route path='/' element={<LoginPage />} />
        <Route path='/verify' element={<VerifyPage />} />
    </Route>
  </Routes>;
};

export default App;
