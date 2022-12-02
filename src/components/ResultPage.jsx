import React from "react";
import { Link } from "react-router-dom";
import winning from "../assets/images/winning.gif"
export const ResultPage = () => {
  return (
    <div className="w-full h-screen bg-[#D7E3EF] overflow-hidden flex flex-col items-center justify-center">
      <h2 className="text-green-500 text-3xl font-bold">
        Congratulations!! You Won the Lottery
      </h2>
     <img src={winning} className="rounded-3xl mt-8"/>
      <Link to="/">
        <button className="border-2 border-[#4FB7DD] rounded-xl p-4 mt-8  bg-[#4FB7DD] text-[#0B131F] hover:border-[#4FB7DD] hover:bg-white hover:text-[#0B131F] text-2xl">
          Return Back
        </button>
      </Link>
    </div>
  );
};
