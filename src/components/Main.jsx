import React from "react";
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <div className="w-full h-[100vh] flex bg-[#D7E3EF] flex-col items-center justify-center">
      {/* Header */}
      <div className="flex flex-col w-[75vw] h-[80vh] bg-[#0B131F] p-6 rounded-3xl">
        <div className="flex justify-center">
          <h1 className="md:text-4xl text-2xl flex text-center font-popins font-bold text-[#D7E3EF] mt-8">
            Welcome to Lucky Draw Context
          </h1>
        </div>

        {/* Lottery Cards */}
        <div className="flex items-center justify-center mt-20 gap-10 flex-wrap">
          <Link to="/result_page">
            <button className="border-2 border-[#4FB7DD] rounded-xl p-4 min-w-[15rem] bg-[#4FB7DD] text-[#0B131F] hover:border-[#4FB7DD] hover:bg-white hover:text-[#0B131F] text-2xl">
              TICKET-1
            </button>
          </Link>

          <Link to="/result_page">
            <button className="border-2 border-[#4FB7DD] rounded-xl p-4 min-w-[15rem] bg-[#4FB7DD] text-[#0B131F] hover:border-[#4FB7DD] hover:bg-white hover:text-[#0B131F] text-2xl">
              TICKET-2
            </button>
          </Link>

          <Link to="/result_page">
            <button className="border-2 border-[#4FB7DD] rounded-xl p-4 min-w-[15rem] bg-[#4FB7DD] text-[#0B131F] hover:border-[#4FB7DD] hover:bg-white hover:text-[#0B131F] text-2xl">
              TICKET-3
            </button>
          </Link>

          <Link to="/result">
            <button className="border-2 border-[#4FB7DD] rounded-xl p-4 min-w-[15rem] bg-[#4FB7DD] text-[#0B131F] hover:border-[#4FB7DD] hover:bg-white hover:text-[#0B131F] text-2xl">
              TICKET-4
            </button>
          </Link>

          <Link to="/result_page">
            <button className="border-2 border-[#4FB7DD] rounded-xl p-4 min-w-[15rem] bg-[#4FB7DD] text-[#0B131F] hover:border-[#4FB7DD] hover:bg-white hover:text-[#0B131F] text-2xl">
              TICKET-5
            </button>
          </Link>

          <Link to="/result_page">
            <button className="border-2 border-[#4FB7DD] rounded-xl p-4 min-w-[15rem] bg-[#4FB7DD] text-[#0B131F] hover:border-[#4FB7DD] hover:bg-white hover:text-[#0B131F] text-2xl">
              TICKET-6
            </button>
          </Link>

          <Link to="/result_page">
            <button className="border-2 border-[#4FB7DD] rounded-xl p-4 min-w-[15rem] bg-[#4FB7DD] text-[#0B131F] hover:border-[#4FB7DD] hover:bg-white hover:text-[#0B131F] text-2xl">
              TICKET-7
            </button>
          </Link>

          <Link to="/result_page">
            <button className="border-2 border-[#4FB7DD] rounded-xl p-4 min-w-[15rem] bg-[#4FB7DD] text-[#0B131F] hover:border-[#4FB7DD] hover:bg-white hover:text-[#0B131F] text-2xl">
              TICKET-8
            </button>
          </Link>

          <Link to="/result_page">
            <button className="border-2 border-[#4FB7DD] rounded-xl p-4 min-w-[15rem] bg-[#4FB7DD] text-[#0B131F] hover:border-[#4FB7DD] hover:bg-white hover:text-[#0B131F] text-2xl">
              TICKET-9
            </button>
          </Link>

          <Link to="/result_page">
            <button className="border-2 border-[#4FB7DD] rounded-xl p-4 min-w-[15rem] bg-[#4FB7DD] text-[#0B131F] hover:border-[#4FB7DD] hover:bg-white hover:text-[#0B131F] text-2xl">
              TICKET-10
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
