import React from "react";
import {Link} from "react-router-dom"
const Login = ()=>{
    return(
        <>
      <form action="" className="h-3/6 w-1/3 m-auto bg-[#E0E0E0] rounded-xl">
        
       {/* header section */}
        <div className="form-header text-5xl text-center text-[#2F4F4F] font-bold ">
        Login
        </div>
      {/* input section */}
        <div className="input-section flex justify-center flex-col">
        <input className="px-2 w-3/5 py-2 text-center rounded-xl mt-9 my-6 m-auto" type="text" placeholder="username"/>
        <input className="px-2 w-3/5 py-2 text-center rounded-xl my-1 m-auto" type="text" placeholder="password"/>
        </div>
        {/* submition section */}
        <div className="submition-section">
        <button className="border bg-white flex justify-center px-2 w-2/6 py-2 text-center rounded-xl mt-10 m-auto hover:bg-black hover:text-white transition duration-150">
          Login
        </button>
        </div>
        <div className="extra text-right mb-4">
          <span className="hover:text-blue-700">
            <Link to="/signup">
            Dont have an Account?sing in
            </Link>
            </span>
        </div>
      </form>
        </>
    )
}

export default Login