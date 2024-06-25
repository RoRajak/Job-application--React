import location from "../assets/location.png";
import data from "../assets/data.png";

function JobTitleDesc() {
  return (
    <div className="w-[623px] h-[98px] gap-6 ml-[100px] mt-9 flex flex-col justify-between">
      <div className="w-[623px] h-[47px] gap-3 flex items-center">
        <h3 className=" text-3xl font-semibold text-left items-center font-general-sans">
          Senior Product Designer
        </h3>
        <div className="flex items-center self-center">
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <p className="ml-2 font-general-sans text-[10px]">Posted 2 days ago</p>
        </div>
        <div className=" w-[80px] h-[30px] border border-solid border-green-400 rounded-xl flex items-center justify-around">
          <div className=" w-[6px] h-[6px] bg-green-500 rounded-2xl ml-1"></div>
          <p className="mr-2 text-green-700 font-medium font-general-sans">Open</p>
        </div>
      </div>
      <div className="w-[363px] h-[27px] flex items-center gap-4">
        <div className="flex items-center">
          <img src={location} alt=""  className="w-[16px] h-[20px]"/>
          <p className="ml-1 font-general-sans">Delaware, USA</p>
        </div>
        <div className="w-[4px] h-[4px] rounded-full bg-[#D1D1D1]"></div>
        <div className="flex items-center">
          <img src={data} alt=""  className="w-[20px] h-[18px]"/>
          <p className="ml-1 font-general-sans">$300k-$400k</p>
        </div>
      </div>
    </div>
  );
}

export default JobTitleDesc;
