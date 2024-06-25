// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import NavBar from "./componets/NavBar";
import MenuBar from "./componets/MenuBar";
import JobTitleDesc from "./componets/JobTitleDesc";
import Requirements from "./componets/Requirements";
import About from "./componets/About";
import CompanyAbout from "./componets/CompanyAbout";
import Helper from "./componets/Helper";
import deleteIcn from "./assets/delete.png"
import editIcn from "./assets/edit.png"
import applicant from "./assets/applicant.png"
import eye from "./assets/eye.png"
import matched from "./assets/user-check-01.png"
import message from "./assets/message-square-01.png"
function App() {
  return (
    <div>
      <NavBar />
      <MenuBar />
      <div className=" w-full h-[1152px] grid grid-cols-[73%_27%]">
        <div>
          <div className="border-b border-solid border-gray-400 h-[145px]">
            <JobTitleDesc />
          </div>

          <div className="border-b border-solid border-gray-400 h-[175px]">
            <Requirements />
          </div>
          <div className="border-b border-solid border-gray-400 h-[440px]">
            <About/>
          </div>
          <div>
            <CompanyAbout/>
          </div>
        </div>
        <div className="h-full border ">
          <div className="w-[360px] h-[361px] mt-12 mx-8">
            <div className="w-[360px] h-[46px] flex items-center justify-between">
              <div className="w-[172px] h-[46px] gap-2.5 px-6 py-3 rounded-lg border-[0.8px] border-solid border-[#DC4A2D] flex justify-center">
                <Helper path={deleteIcn} title="Delete Job" className="text-base font-medium leading-[21.6px] text-[#DC4A2D]" />
              </div>
              <div className="w-[172px] h-[46px] gap-2.5 px-6 py-3 rounded-lg border-2 border-solid border-[#FED3CA] bg-[#DC4A2D] flex justify-center shadow">
                <Helper path={editIcn} title="Edit Job" className="text-base font-medium leading-[21.6px] text-white" />
              </div>
              

            </div>
            <div className="w-[360px] h-[291px] gap-4 pt-3 pb-0 px-0 rounded-[5px_0px_0px_0px] flex flex-col items-center">
              <div className="w-[336px] h-[42px] mt-4 flex justify-between items-start">
                <Helper path={applicant} title="Applicant" className=" font-general-sans text-[#4F4F4F]"/>
                <p className="text-xl font-semibold leading-[27px] font-general-sans">400</p>
              </div>
              <div className="w-[336px] h-[42px] mt-4 flex justify-between items-start">
                <Helper path={matched} title="Matches" className=" font-general-sans text-[#4F4F4F]"/>
                <p className="text-xl font-semibold leading-[27px] font-general-sans">100</p>
              </div>
              <div className="w-[336px] h-[42px] mt-4 flex justify-between items-start">
                <Helper path={message} title="Messages" className=" font-general-sans text-[#4F4F4F]"/>
                <p className="text-xl font-semibold leading-[27px] font-general-sans">147</p>
              </div>
              <div className="w-[336px] h-[42px] mt-4 flex justify-between items-start">
                <Helper path={eye} title="Views" className=" font-general-sans text-[#4F4F4F]"/>
                <p className="text-xl font-semibold leading-[27px] font-general-sans ">80</p>
              </div>
              

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
