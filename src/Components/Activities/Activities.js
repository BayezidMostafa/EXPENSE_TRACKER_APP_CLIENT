import React from "react";
import Table from "../Table/Table";

const Activities = () => {
  return (
    <div>
      <div className="flex px-10 justify-between">
        <div>
          <p className="text-[23px] font-semibold text-[#130F26]">
            Last Month Activities
          </p>
          <p className="text-[12px] text-[#9B9B9B]">Monthly Activities</p>
        </div>
        <p className="font-semibold">View All</p>
      </div>
      <div className="h-[2px] bg-[#D7D7D7] mx-7 mt-3"></div>
      <div className="ml-5">
        <Table />
      </div>
    </div>
  );
};

export default Activities;
