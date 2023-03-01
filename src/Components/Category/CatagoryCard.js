import React from "react";

const CatagoryCard = ({ category }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#F4F4F4] p-[24px] rounded-xl">
      <img className="h-[56px] w-[56px]" src={category?.logo} alt="" />
      <p>{category?.text}</p>
    </div>
  );
};

export default CatagoryCard;
