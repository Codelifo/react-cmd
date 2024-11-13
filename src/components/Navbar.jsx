import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const {user, logOutUser} = useContext(authContext)
  const navigate = useNavigate()
  const Links = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>Profile</Link>
      </li>
      <li>
        <Link to={'/react-router'}>Router</Link>
      </li>
    </>
  );

  const handleLogOut = () =>{
    logOutUser();
    navigate('/login');
  }

  

  return (
    <div className="navbar bg-base-100 border-b-2 border-gray-500">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        {/* <a className="btn btn-ghost text-xl"></a> */}
        <img
          className="size-10"
          src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
          alt=""
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="navbar-end">
          <div className="">
            <h1 className="mr-4 ">{user?.email}</h1>
          </div>
          {
            user ? <button onClick={handleLogOut} className="btn">LogOut</button> : <>
            <NavLink to={'/login'} className={({isActive})=> isActive ? 'btn text-sky-500 mr-4' : 'btn'}>Login</NavLink>
            <NavLink to={'/register'} className={({isActive})=> isActive ? 'btn text-sky-500 ml-4' : 'btn'}>Register</NavLink>
            </>
          }
      </div>
    </div>
  );
};

export default Navbar;
