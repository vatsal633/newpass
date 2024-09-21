import React from "react";
import Login from "./login";
import Signup from "./signup";


import { Link } from "react-router-dom";
const home = () => {
  return (
    <>

      <div className="btns flex justify-center flex-col items-center h-dvh">
        <button className="hover:bg-black hover:text-white text-[#2F4F4F] py-2 bg-white my-4 px-10 text-3xl rounded-full shadow-xl font-bold shadow-xl shadow-zinc-400 transition duration-150">
          <Link to="/login">login</Link>
        </button>
        <button className="hover:bg-transparent hover:text-black shadow-none hover:border-2 hover:border-black  text-[#2F4F4F] py-2 bg-white px-6 text-3xl rounded-full shadow-xl font-bold shadow-xl shadow-zink-400 transition duration-150 bg-[#000000] text-white">
          <Link to="/signup">Sign up</Link>
        </button>
      </div>
    </>
  );
};

export default home;
