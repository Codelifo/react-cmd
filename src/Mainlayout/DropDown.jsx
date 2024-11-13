import React from "react";
import { Link } from "react-router-dom";

const DropDown = () => {
  return (
    <div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="w-72 p-2 border border-gray-500 text-center rounded-xl m-1 shadow-xl shadow-sky-900">
          Menu
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-72 p-2 shadow-xl border border-gray-500 shadow-sky-700"
        >
          <li>
            <a>React Setup</a>
          </li>
          <li>
            <Link to={'/react-router'}>React Router</Link>
          </li>
          <li>
            <Link to={'/tailwind'}>Tailwind</Link>
          </li>
          <li>
            <Link to={'/react-icon'}>React Icon</Link>
          </li>
          <li>
            <a>Daisy UI</a>
          </li>
          <li>
            <a>Firebase</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
