import React from 'react';
import history from '../history';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Main from '@/routes/Main.js';
import Auth from '@/routes/Auth';
import LandingPage from '@/pages/customer/Landingpage';
import Admin from './Admin';

function Root() {
  return (
    <Router history={history}>
      <Routes>
        <Route path='/*' element={<LandingPage />} />
        <Route path='auth/*' element={<Auth />} />
        <Route path='admin/*' element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default Root;
