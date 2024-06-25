import logo from "../assets/logo.png";
import Helper from "./Helper";
import brifcase from "../assets/briefcase-navbar.png";
import message from '../assets/message-square-01.png'
import payment from '../assets/coins-hand.png'
import bell from '../assets/bell-02.png'
import icon2 from '../assets/Rectangle 5.png'
import arrow from '../assets/chevron-down.png'

function NavBar() {
  return (
    <div className="flex justify-between items-center w-full h-24 px-6 border-b border-gray-300 fixed">
      <img src={logo} alt="Logo" className="w-auto h-14 " />

      <div className="flex items-center gap-6 w-[466px] h-[74px] border-[0.5px] border-solid border-[#D1D1D1] rounded-[36px] justify-center ">
        <div className="relative bg-red-600 w-32 h-14 flex items-center justify-center rounded-[49px]">
          <Helper path={brifcase} title="Jobs" className="text-white font-general-sans text-xl font-medium leading-[27px] " />
        </div>

        <div className="relative">
          <div className=" w-1.5 h-1.5 bg-[#DC4A2D] absolute rounded-full left-[17px] bottom-[19px]"></div>
          <Helper path={message} title="Messages" className=" font-general-sans text-xl font-medium leading-[27px] text-[#B0B0B0]"  />
        </div>

        <div className="relative">
          <Helper path={payment} title="Payments" className=" font-general-sans text-xl font-medium leading-[27px] text-[#B0B0B0]"  />
        </div>
      </div>

      <div className="flex items-center gap-6 relative">
      <div className=" w-1.5 h-1.5 bg-[#DC4A2D] absolute rounded-full left-[21px] top-0.5"></div>
        <img src={bell} alt="Bell Icon" className="h-8" />

        <div className="flex items-center gap-2">
          <img src={icon2} alt="Icon 2" className="h-8 w-8 rounded-full" />
          <img src={arrow} alt="Arrow Icon" className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
