import React from "react";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
function Navbarreal() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* <Container maxWidth='xl'> */}
      <nav className=' top-0 lg:fixed lg:top-0 md:absolute md:top-0 z-50  w-full flex flex-wrap items-center  px-2 py-3 navbar-expand-md bg-white shadow'>
        <div className='container  px-4 mx-auto flex flex-wrap items-center'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <ul>
              <li className='flex items-center'>
                <i
                  class='fa fa-search text-lg leading-lg mr-3'
                  aria-hidden='true'
                ></i>
                <input
                  type='text'
                  placeholder='search in conservation '
                  className='border-2 rounded-lg p-3 '
                />
              </li>
            </ul>
            <button
              className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className='fas fa-bars'></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id='example-navbar-warning'
          >
            {/* <ul className='flex flex-col lg:flex-row list-none mr-auto'>
              <li className='flex items-center'>
                <a
                  className='hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index-navbar'
                >
                  <i className='text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2' />{' '}
                  Docs
                </a>
              </li>
            </ul> */}
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
              {/* <li className='flex items-center'>
                <IndexDropdown />
              </li> */}
              {/* {/* <li className='flex items-center'> */}
              <li className='hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'>
                {/* <i className='text-blueGray-400 fab fa-facebook text-lg leading-lg ' /> */}
                <span className=' inline-block mr-10 border-2 rounded-lg p-2 hover:bg-blue-300'>
                  Conservation
                </span>
              </li>
              {/* </li> */}

              {/* <li className='flex items-center'> */}
              <li className='hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'>
                {/* <i className='text-blueGray-400 fab fa-twitter text-lg leading-lg ' /> */}
                <span className=' inline-block mr-16  border-2 rounded-lg p-2 hover:bg-blue-300'>
                  Phone Number
                </span>
              </li>
              {/* </li> */}

              {/* <li className='flex items-center'> */}
              <li
                className='hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                href='#'
                // target='_blank'
              >
                {/* <i className='text-blueGray-400 fab fa-github text-lg leading-lg ' /> */}
                <div className='text-black mr-48'>
                  <button
                    onClick={handleClick}
                    className=' border-2 rounded-lg p-2 hover:bg-blue-300'
                  >
                    Client Backus
                  </button>
                  <Menu
                    id='fade-menu'
                    MenuListProps={{
                      "aria-labelledby": "fade-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                  >
                    <MenuItem onClick={handleClose}>
                      <i class='fa fa-tasks mr-2' aria-hidden='true'></i>
                      Billings and Logs
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <i class='fa fa-cog mr-2' aria-hidden='true'></i>
                      My account
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <i class='fa fa-music mr-2' aria-hidden='true'></i>
                      Media Manager
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <i class='fa fa-sign-out mr-2' aria-hidden='true'></i>
                      Log Out
                    </MenuItem>
                  </Menu>
                </div>
              </li>
              {/* </li> */}
            </ul>
          </div>
        </div>
      </nav>
      {/* </Container> */}
    </>
  );
}

export default Navbarreal;
