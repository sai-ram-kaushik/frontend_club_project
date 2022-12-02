import React from "react";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div className="w-full h-screen flex bg-[#D7E3EF] justify-center items-center">
        <Link to="/main"> <button className="border-2 border-[#4FB7DD] rounded-xl p-4 bg-[#4FB7DD] text-[#0B131F] hover:border-[#4FB7DD] hover:bg-white hover:text-[#0B131F] text-2xl">
              LET'S GO
            </button>
        </Link>
    </div>
  );
};
