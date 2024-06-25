import Helper from "./Helper";
import company from "../assets/company.png";

function CompanyAbout() {
  return (
    <div className="w-[736px] h-[271px] gap-4 ml-[100px] mt-[50px]">
      <div>
        <Helper
          path={company}
          title="Atlassian"
          className="font-general-sans"
        />
      </div>
      <div className="w-[736px] h-[195px] gap-12 grid grid-cols-2 mt-8">
        <div>
          <div>
            <h6 className="text-sm font-medium leading-[18.9px] text-left text-[#6E6D6D] font-general-sans">
              Company size
            </h6>

            <Helper
              title="1k - 2k Employees"
              className="text-base font-medium leading-[21.8px] text-left mt-2 ml-[-9px] font-general-sans"
            />
          </div>
          <div className="mt-4">
            <h6 className="text-sm font-medium leading-[18.9px] text-left text-[#6E6D6D] font-general-sans">
              Sector
            </h6>

            <Helper
              title="Information Technology, Infrastructure"
              className="text-base font-medium leading-[21.8px] text-left mt-2 ml-[-9px] font-general-sans"
            />
          </div>
          <div className="mt-4">
            <h6 className="text-sm font-medium leading-[18.9px] text-left text-[#6E6D6D] font-general-sans ">
              Founded In
            </h6>

            <Helper
              title="2019"
              className="text-base font-medium leading-[21.8px] text-left mt-2 ml-[-9px] font-general-sans"
            />
          </div>
        </div>
        <div>
          <div>
            <h6 className="text-sm font-medium leading-[18.9px] text-left text-[#6E6D6D] font-general-sans">
              Type
            </h6>

            <Helper
              title="Private"
              className="text-base font-medium leading-[21.8px] text-left mt-2 ml-[-9px] font-general-sans"
            />
          </div>
          <div className="mt-4">
            <h6 className="text-sm font-medium leading-[18.9px] text-left text-[#6E6D6D] font-general-sans">
              Funding
            </h6>

            <Helper
              title="Bootstrapped"
              className="text-base font-medium leading-[21.8px] text-left mt-2 ml-[-9px] font-general-sans"
            />
          </div>
          <div className="mt-4">
            <h6 className="text-sm font-medium leading-[18.9px] text-left text-[#6E6D6D] font-general-sans ">
              Founded By
            </h6>

            <Helper
              title="Scott Farquhar, Mike Cannon-Brookes"
              className="text-base font-medium leading-[21.8px] text-left mt-2 ml-[-9px] font-general-sans"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyAbout;
