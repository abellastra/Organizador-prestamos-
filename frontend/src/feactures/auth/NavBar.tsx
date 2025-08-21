import React from "react";
import { useNavigate } from "react-router-dom";
export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col justify-center text-center items-center">
      <div className="flex flex-col justify-center text-center items-center">
        <h1 className="text-5xl	 font-semibold text-white mb-20	">
          {" "}
          Loan Manager{" "}
        </h1>
        <h3 className="text-2xl	font-medium	text-white mb-8	">
          Organize and control your loans with ease
        </h3>
      </div>

      <div className="  flex items-center justify-center gap-4">
        <button
          className="bg-[rgb(125,125,125)] text-white px-10 py-4 rounded hover:bg-blue-900 "
          onClick={() => {
            navigate("/register");
          }}
        >
          {" "}
          Sign Up{" "}
        </button>
        <button
          className="bg-[rgb(125,125,125)] text-white px-10 py-4 rounded hover:bg-blue-900 "
          onClick={() => {
            navigate("/login");
          }}
        >
          Sign In{" "}
        </button>
      </div>
    </div>
  );
};
