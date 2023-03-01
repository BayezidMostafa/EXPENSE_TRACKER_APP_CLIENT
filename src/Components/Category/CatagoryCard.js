import React, { useContext } from "react";
import { GlobalState } from "../../Context/GlobalStateContext";
import "./style.css";

const CatagoryCard = ({ category }) => {
  const { setCatInfo } = useContext(GlobalState);
  const handleButton = (e) => {
    setCatInfo("");
    const allbutton = document.querySelectorAll(".category-btn");
    allbutton.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
    });
    e.target.classList.add("active");
    if (e.target.classList.contains("active")) {
      const textValue = e.target.lastChild;
      setCatInfo(textValue.innerText);
    }
  };

  return (
    <div
      onClick={handleButton}
      className={`category-btn flex flex-col justify-center items-center bg-[#F4F4F4] p-[24px] rounded-xl cursor-pointer`}
    >
      <img
        className="h-[56px] w-[56px] rounded-full"
        src={category?.logo}
        alt=""
      />
      <p className="category-value">{category?.text}</p>
    </div>
  );
};

export default CatagoryCard;
