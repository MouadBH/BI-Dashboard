import React from 'react';
import { Link,NavLink } from 'react-router-dom';

const GuestNav = () => {
  return (
    <nav className="bg-white fixed w-full z-10 top-0 shadow">
      <div className="w-full container px-6 mx-auto flex flex-wrap mt-0 pt-2 pb-2 items-center justify-between">
        <ul className="list-reset flex pt-4">
          <li className="px-2">
            <Link to="" className="no-underline text-orange-600 uppercase font-thin text-gray-900 font-bold">
              BI | Dashboard</Link>
          </li>
        </ul> 

        <ul className="list-reset flex pt-4">
          <li className="px-4 py-2 activeTab">
            <NavLink
              to='/home'
              className="no-underline font-medium text-grey-darker">
              Home
                </NavLink>
          </li>
          <li className="px-4 py-2">
            <NavLink
              to='/home'
              className="no-underline font-medium text-grey-darker">
              Messages
                </NavLink>
          </li>

          <li
            className="px-4 py-2">
            <NavLink
              to='/home'
              className="no-underline font-medium text-grey-darker">
              Notifications
                </NavLink>
          </li>

          <li className="px-4 py-2" style={{display: "none"}}>
            <Link to="/signin"
              className="no-underline font-medium text-grey-darker"
            >Sign in
            </Link>
          </li>

          <li className="px-4 py-2 border bg-indigo-500 rounded-lg" style={{display: "none"}}>
            <Link to="/register"
              className="no-underline text-white font-semibold"
            >Sing up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default GuestNav;
