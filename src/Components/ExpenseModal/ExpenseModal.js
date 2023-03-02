import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalState } from "../../Context/GlobalStateContext";

const ExpenseModal = ({ isVisible, onClose }) => {
  const { amount, setAmount, catInfo } = useContext(GlobalState);
  console.log(amount);
  const Navigate = useNavigate();
  if (!isVisible) return null;
  const handleOnClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updateinfo = {
      spend: amount,
      categoryInfo: catInfo,
    };
    console.log(updateinfo);
  };

  return (
    <div
      id="wrapper"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-70 md:pt-6 md:px-5 pt-3 px-3 flex justify-center items-center z-50"
    >
      <form
        onSubmit={handleFormSubmit}
        data-aos="zoom-in"
        className="flex gap-2 flex-col justify-center items-center lg:min-w-[30vw] lg:min-h-[20vh] md:min-h-[20vh] md:min-w-[40vw] min-h-[20vh] min-w-[50vw] bg-white rounded-md"
      >
        <input
          className="focus:outline-yellow-500 border-yellow-400 border-2 rounded-md py-2 px-2 w-[90%]"
          onChange={(e) => setAmount(e.target.value)}
          type="number"
        />
        <button className="bg-yellow-500 py-2 px-20 rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default ExpenseModal;
