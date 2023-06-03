import React from 'react';
import Grid from '@mui/material/Grid';
import { Route, Routes } from 'react-router-dom';

import Sidebar from '@/components/Sidebar/Sidebar';
// import IsLogin from './IsLogin';

// import AuthNavbar from '@/components/Navbars/AdminNavbar.js';
import Dashboard from '@/admin/Dashboard';

function Admin() {
  return (
    <>
      <Sidebar />
      <div className='relative  md:ml-64'>
        {/* <AuthNavbar /> */}
        <main>
          <section className=' w-full h-full  py-10 '>
            <Routes>
              {/* <Route element={<IsLogin />}> */}
              <Route path='/' element={<Dashboard />} />

              {/* </Route> */}
            </Routes>
          </section>
        </main>
      </div>
    </>
  );
}

export default Admin;
