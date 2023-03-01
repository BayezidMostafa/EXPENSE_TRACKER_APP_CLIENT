import { useState } from "react";
import SideNav from "../Components/Login/SideNavigation/SideNav";
import CurrentBalanceCard from "../Assets/Logo/current Balance.svg";
import Profile from "../Assets/Logo/user.svg";
import ArrowDown from "../Assets/Logo/Arrow - Down Circle.svg";
import Game from "../Assets/Logo/dark-g.svg";
import RedHome from "../Assets/Logo/home.svg";
import BlueCar from "../Assets/Logo/blue-car.svg";
import Category from "../Components/Category/Category";
import Activities from "../Components/Activities/Activities";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex overflow-hidden">
      <SideNav open={open} setOpen={setOpen} />
      <aside
        className={`${
          open ? "ml-0" : "ml-[-475px]"
        } flex max-h-[100%] flex-col justify-between lg:w-[480px] xl:w-[480px] 2xl:w-[480px] border-r px-6 pb-3 transition-all ease-in-out duration-1000 bg-[#FFFBF3]`}
      >
        <div>
          <div className="mt-7">
            <p className="text-gray-900 font-bold text-[28px]">Kösten</p>
            <p className="text-[#452F02] font-semibold">Expense manager</p>
          </div>
          <div className="relative w-[424px] h-[188px] mt-[50px]">
            <img className="" src={CurrentBalanceCard} alt="" />
            <div className="absolute top-24 right-32">
              <p className="text-[36px] font-semibold text-[#130F26]">
                $55,569
              </p>
              <p>Total Expense</p>
            </div>
          </div>
        </div>
      </aside>
      {/* Content */}
      <div className="w-full bg-[#f5f5f5e6]">
        <div className="w-full flex justify-end">
          <div className="flex items-center gap-5 mr-5 mt-5">
            <div>
              <button className="bg-[#FFC248] rounded-xl px-[37px] py-[15px] text-white active:bg-[#e6b34e] hover:bg-[#fcc65a]">
                + Add Expense
              </button>
            </div>
            <img className="w-[86px] h-[86px]" src={Profile} alt="" />
            <img src={ArrowDown} alt="" />
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            <div className="ml-14 flex min-w-[416px] max-w-[416px] justify-between border-b-2 pb-5">
              <div>
                <p className="text-[#130F26] text-[23px] font-semibold">
                  This week spend
                </p>
                <div className="flex gap-2 mt-5">
                  <img className="w-[32px] h-[32px]" src={Game} alt="" />
                  <img className="w-[32px] h-[32px]" src={RedHome} alt="" />
                  <img className="w-[32px] h-[32px]" src={BlueCar} alt="" />
                </div>
              </div>
              <div className="bg-white max-h-[96px] flex justify-center items-center flex-col p-5 rounded-xl">
                <p className="text-[36px] font-semibold">$540</p>
                <p>Total Spend</p>
              </div>
            </div>
          </div>
          <div className="p-5 max-h-[618px] max-w-[534px] min-w-[534px] bg-[#FFFFFF] rounded-xl mr-5 mt-10 overflow-y-scroll">
            <p className="text-[23px]">Categories</p>
            <div className="border w-full h-[1px] my-2 bg-[#D7D7D7]"></div>
            <Category />
          </div>
        </div>
        <div className="mt-5">
          <Activities />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
