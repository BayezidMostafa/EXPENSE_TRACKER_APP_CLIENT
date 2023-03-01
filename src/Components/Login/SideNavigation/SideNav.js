import Logo from "../../../Assets/Logo/main_logo.svg";
import FourDots from "../../../Assets/Logo/dots.svg";
import Star from "../../../Assets/Logo/5.svg";
import Read from "../../../Assets/Logo/4.svg";
import State from "../../../Assets/Logo/3.svg";
import Catagory from "../../../Assets/Logo/2.svg";
import Setting from "../../../Assets/Logo/1.svg";
import LogOut from "../../../Assets/Logo/Sign out.svg";
import LogOut_Deep from "../../../Assets/Logo/log-out-deep.svg";

const SideNav = ({ open, setOpen }) => {
  return (
    <div className="flex">
      <div className="w-[121px] border-r-2 min-h-screen max-h-[100%] flex items-center bg-[#FFFBF3] gap-2 flex-col z-20">
        <img src={Logo} className="w-[92px] h-[92px] mt-5" alt="" />
        <img
          onClick={() => setOpen(!open)}
          src={FourDots}
          className="w-[92px] h-[92px] mt-[100px] cursor-pointer"
          alt=""
        />
        <img src={Star} className="w-[92px] h-[92px] lg:hidden block" alt="" />
        <img src={Read} className="w-[92px] h-[92px] lg:hidden block" alt="" />
        <img src={State} className="w-[92px] h-[92px] lg:hidden block" alt="" />
        <img
          src={Catagory}
          className="w-[92px] h-[92px] lg:hidden block"
          alt=""
        />
        <img
          src={Setting}
          className="w-[92px] h-[92px] lg:hidden block"
          alt=""
        />
        <img
          src={LogOut}
          className="w-[92px] h-[92px] block lg:hidden"
          alt=""
        />
        <img
          src={LogOut_Deep}
          className="w-[92px] h-[92px] mt-[300px] hidden lg:block"
          alt=""
        />
      </div>
    </div>
  );
};

export default SideNav;
