function About() {
  return (
    <div className=" w-[526px] h-[401px] gap-2 ml-[100px] mt-[50px]">
      <h2 className="text-sm font-medium leading-[18.9px] text-gray-400 font-general-sans">About the Job</h2>
      <ol className="list-decimal pl-5 text-base font-medium leading-7 font-general-sans mt-2">
        <li>Handle the UI/UX research design</li>
        <li>Work on researching the latest web application designs & trends</li>
        <li>Work on conceptualizing and visualizing</li>
        <li>
          Work on creating graphics content and other graphic related works
        </li>
      </ol>

      <h3 className="text-base font-medium leading-7 font-general-sans">Benefits:</h3>
      <ul className=" list-disc pl-5 text-base font-medium leading-7 font-general-sans">
        <li>Health insurance</li>
        <li>Provident Fund</li>
      </ul>

      <h3 className="text-base font-medium leading-7 font-general-sans">Schedule:</h3>
      <ul className=" list-disc pl-5 text-base font-medium leading-7 font-general-sans">
        <li>Day shift</li>
      </ul>

      <h3 className="text-base font-medium leading-7 font-general-sans">Supplemental pay types:</h3>
      <ul className=" list-disc pl-5 text-base font-medium leading-7 font-general-sans" >
        <li>Performance bonus</li>
        <li>Yearly bonus</li>
      </ul>

      <h3 className="flex text-base font-medium leading-7 font-general-sans">Work Location:<p className="ml-1"> In person</p></h3>
      
    </div>
  );
}

export default About;
