import React from "react";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
        <Link to="/main"> <button className="text-3xl border-2 border-orange-500 p-4 hover:bg-orange-500 hover:text-white rounded-xl font-popins font-bold text-gray-600">Let's Go</button>
        </Link>
    </div>
  );
};
