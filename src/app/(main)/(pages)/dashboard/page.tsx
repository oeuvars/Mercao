import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl sticky top-0 z-[10] px-6 py-5 bg-[#010101]/60 backdrop-blur-lg flex items-center border-b-2 border-neutral-800 justify-between">
        <span className="gradient-text font-satoshi-bold p-1">Dashboard</span>
      </h1>
    </div>
  );
};

export default Dashboard;
