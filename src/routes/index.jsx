import React from "react";
import history from "../history";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Main from '@/routes/Main.js';
import Auth from "@/routes/Auth";
import LandingPage from "@/pages/customer/Landingpage";
import Admin from "./Admin";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Compaign from "@/pages/Dashboard/Compaign";
import Navbarreal from "@/pages/Dashboard/Navbarreal";
import Sidebar from "@/pages/Sidebardash/Sidebar";
import Chat from "@/pages/Dashboard/Chat";
import Phonenumbers from "@/pages/Dashboard/Phonenumbers";
import Chatscreen from "@/components/Chatscreen";
import Display from "@/components/Display";

function Root() {
  return (
    <Router history={history}>
      <Routes>
        <Route path='/*' element={<LandingPage />} />
        <Route path='auth/*' element={<Auth />} />
        <Route path='admin/*' element={<Admin />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Compaign' element={<Compaign />} />
        <Route path='/Navbar' element={<Navbarreal />} />
        <Route path='/Sidebar' element={<Sidebar />} />
        <Route path='/Chat' element={<Chat />} />
        <Route path='/Phonenumbers' element={<Phonenumbers />} />
        <Route path='/' element={<LandingPage />} />

        <Route path='/Chatscreen' element={<Chatscreen />} />

        <Route path='/Display' element={<Display />} />

        <Route path='auth/*' element={<Auth />} />
        <Route path='admin/*' element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default Root;
