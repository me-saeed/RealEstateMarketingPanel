import Sidebar from "@/pages/Sidebardash/Sidebar";
import React from "react";
import Navbarreal from "./Navbarreal";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Chat from "./Chat";

function Dashboard() {
  return (
    <>
      {/* <div className='flex'> */}
      {/* <div className='side-bar'> */}
      {/* </div> */}
      {/* <div className='nav-styl'> */}

      <Sidebar />
      <div className='relative  md:ml-64 md:-mt-24'>
        <Navbarreal />
      </div>
      <div className='relative  md:ml-64 md:mt-24  lg:mt-24'>
        <Chat />
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
}

export default Dashboard;
