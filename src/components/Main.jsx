import React from "react";

export const Main = () => {
  return (
    <div className="w-full h-screen overflow-hidden mt-36">
      {/* Header */}

      <div className="flex justify-center">
        <h1 className="md:text-3xl text-2xl flex text-center font-popins font-bold text-orange-500 mt-8">
          Welcome to Lucky Draw Context
        </h1>
      </div>

      {/* Lottery Cards */}
      <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
        <button className="border-2 rounded-xl p-4 min-w-[15rem] bg-orange-500 text-white hover:border-orange-500 hover:bg-white hover:text-orange-500 text-2xl">Ticket-1</button>

        <button className="border-2 rounded-xl p-4 min-w-[15rem] bg-orange-500 text-white hover:border-orange-500 hover:bg-white hover:text-orange-500 text-2xl">Ticket-2</button>

        <button className="border-2 rounded-xl p-4 min-w-[15rem] bg-orange-500 text-white hover:border-orange-500 hover:bg-white hover:text-orange-500 text-2xl">Ticket-3</button>

        <button className="border-2 rounded-xl p-4 min-w-[15rem] bg-orange-500 text-white hover:border-orange-500 hover:bg-white hover:text-orange-500 text-2xl">Ticket-4</button>

        <button className="border-2 rounded-xl p-4 min-w-[15rem] bg-orange-500 text-white hover:border-orange-500 hover:bg-white hover:text-orange-500 text-2xl">Ticket-5</button>

        <button className="border-2 rounded-xl p-4 min-w-[15rem] bg-orange-500 text-white hover:border-orange-500 hover:bg-white hover:text-orange-500 text-2xl">Ticket-6</button>

        <button className="border-2 rounded-xl p-4 min-w-[15rem] bg-orange-500 text-white hover:border-orange-500 hover:bg-white hover:text-orange-500 text-2xl">Ticket-7</button>

        <button className="border-2 rounded-xl p-4 min-w-[15rem] bg-orange-500 text-white hover:border-orange-500 hover:bg-white hover:text-orange-500 text-2xl">Ticket-8</button>

        <button className="border-2 rounded-xl p-4 min-w-[15rem] bg-orange-500 text-white hover:border-orange-500 hover:bg-white hover:text-orange-500 text-2xl">Ticket-9</button>
        
        <button className="border-2 rounded-xl p-4 min-w-[15rem] bg-orange-500 text-white hover:border-orange-500 hover:bg-white hover:text-orange-500 text-2xl">Ticket-10</button>

      </div>
    </div>
  );
};
