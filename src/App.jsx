import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
        {/* <span className="border border-t-4 border-gray-100"></span> */}
        <div className="min-h-[calc(100vh-232px)]"> 
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
