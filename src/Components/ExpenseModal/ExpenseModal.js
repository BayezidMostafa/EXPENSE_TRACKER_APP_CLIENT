import axios from "axios";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../../Context/AuthContext";
import { GlobalState } from "../../Context/GlobalStateContext";

const ExpenseModal = ({
  isVisible,
  onClose,
  refetch,
  userInfo,
  totalExpense,
  setTotalExpense,
}) => {
  const { user } = useContext(AuthenticationContext);
  const { amount, setAmount, catInfo } = useContext(GlobalState);
  const Navigate = useNavigate();
  if (!isVisible) return null;
  const handleOnClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const today = new Date();
  const year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();

  console.log(year, month, day);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const spendinfo = {
      spend: amount,
      categoryInfo: catInfo,
      email: user?.email,
      date: {
        day,
        month,
        year,
      },
    };
    axios
      .put("https://server-side-smoky.vercel.app/expenseInfo", spendinfo)
      .then((res) => {
        const prevBalance = userInfo.balance;
        const updatedbalance = Number(prevBalance - amount);
        const uBalance = {
          updatedbalance,
        };
        axios
          .put(
            `https://server-side-smoky.vercel.app/upblnc/${user?.email}`,
            uBalance
          )
          .then((res) => {
            setTotalExpense({ ...totalExpense, amount });
            toast.success("Successfully added");
            refetch();
            onClose();
            console.log(res.data);
          })
          .catch((err) => console.error(err.message));
      })
      .catch((err) => {
        console.error(err.message);
      });
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
          placeholder="$ Please add your expense"
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
