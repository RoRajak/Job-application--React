import Helper from "./Helper";

function MenuBar() {
  return (
    <div className="w-full h-[100px] border top-44 flex items-center pt-36 pb-[2.8rem]">
      <div className="w-[623px] h-[27px] gap-[72px]  ml-[100px]  flex items-center">
        <div className="relative">
          <div className="w-[65px] h-0.5 left-[31px] top-[57px] absolute bg-[#DC4A2D]"></div>
          <Helper
            title="Job Preview"
            className=" text-[#dc4a2d] font-general-sans text-xl font-semibold leading-[27px]"
          />
        </div>

        <Helper
          title="Applicants"
          className=" font-general-sans text-xl font-medium leading-[27px] text-[#B0B0B0]"
        />
        <Helper
          title="Match"
          className=" font-general-sans text-xl font-medium leading-[27px] text-[#B0B0B0]"
        />
        <Helper
          title="Messages"
          className=" font-general-sans text-xl font-medium leading-[27px] text-[#B0B0B0]"
        />
      </div>
    </div>
  );
}

export default MenuBar;
