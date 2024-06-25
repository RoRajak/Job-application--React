import Helper from "./Helper";
import figma from "../assets/figma.png";
import XD from "../assets/XD.png";
import AI from "../assets/AI.png";

function Requirements() {
  return (
    <div className="w-[872px] h-[115px] gap-16 ml-[100px] mt-[55px] grid grid-cols-4 ">
      <div>
        <h6 className="text-sm font-medium leading-[18.9px] text-left text-[#6E6D6D] font-general-sans ">
          Skills Required
        </h6>
        <div className="mt-2 w-[77px] h-7 gap-[3px] border px-1.5 py-1 border-solid border-gray-600 rounded-md">
          <Helper
            path={figma}
            title="Figma"
            className="text-sm font-medium leading-[16.2px] text-center  font-general-sans"
          />
        </div>
        <div className="mt-3 w-[177px] h-7 gap-[3px] border px-1.5 py-1 border-solid border-gray-600 rounded-md">
          <Helper
            path={AI}
            title="Adobe Illustrator"
            className="text-sm font-medium leading-[16.2px] text-center font-general-sans"
          />
        </div>
        <div className="mt-3 w-[120px] h-7 gap-[3px] border px-1.5 py-1 border-solid border-gray-600 rounded-md">
          <Helper
            path={XD}
            title="Adobe XD "
            className="text-sm font-medium leading-[16.2px] text-center font-general-sans"
          />
        </div>
      </div>
      <div>
        <h6 className="text-sm font-medium leading-[18.9px] text-left text-[#6E6D6D] font-general-sans ">
          Preffered Language
        </h6>

        <Helper
          title="English"
          className="text-base font-semibold leading-[21.6px] text-left mt-2 ml-[-9px] font-general-sans"
        />
      </div>
      <div>
        <h6 className="text-sm font-medium leading-[18.9px] text-left text-[#6E6D6D] font-general-sans ">
          Type
        </h6>

        <Helper
          title="Full Time"
          className="text-base font-semibold leading-[21.6px] text-left mt-2 ml-[-9px] font-general-sans"
        />
      </div>
      <div>
        <h6 className="text-sm font-medium leading-[18.9px] text-left text-[#6E6D6D] font-general-sans">
          Years of Experience
        </h6>

        <Helper
          title="3+ Years of Experience"
          className="text-base font-semibold leading-[21.6px] text-left mt-2 ml-[-9px] font-general-sans w-max"
        />
      </div>
    </div>
  );
}

export default Requirements;
