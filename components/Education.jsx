"use client";

import "react-vertical-timeline-component/style.min.css"; // Add this line for default styling

function Education() {
  return (
    <div className="w-full bg-[rgb(24,17,86)] flex flex-col justify-center items-center py-4 border-none">
      <h1 className="text-white text-[2.5rem] md:text-[2rem] lg:text-[3rem] mb-5">
        🎓 Education
      </h1>
      <div className="w-[80vmin] sm:w-[95vmin] lg:w-[110vmin] xl:w-[140vmin] flex-col items-center relative z-10">
        {/* one line */}
        <div className="border-2 h-full border-red-500 absolute top-0 left-0 sm:left-1/2 rounded-full -translate-x-1/2"></div>
        <div className="w-full h-12 relative"></div>

        {/* test one line */}
        <div className="w-full h-72 relative mb-4">
          <div className="w-[100%] sm:w-[50%] h-full absolute right-0 sm:left-0 top-0 flex flex-row-reverse sm:flex-row">
            <div className="h-full border-2 border-red-500 w-full rounded-lg p-2 flex-col">
              <div className="w-full border">
                <div></div>
              </div>
            </div>
            <div className="flex w-12 flex-row-reverse sm:flex-row">
              <div className="w-0 h-0 border-[0.45rem] border-transparent border-r-red-500 sm:border-l-red-500 sm:border-r-transparent translate-y-12"></div>
              <div className=" w-14 h-14  border-[3px] border-red-500 rounded-full  absolute left-0 right-auto sm:right-0 sm:left-auto -translate-x-1/2 sm:translate-x-1/2 translate-y-1/2"></div>
              <div className="h-10 sm:h-14 absolute left-full translate-y-1/2 translate-x-9 text-white sm:flex justify-center items-center hidden ">
                08/07/2000
              </div>
            </div>
          </div>
        </div>

        {/* test one line */}
        <div className="w-full h-72 relative mb-4">
          <div className="w-[100%] sm:w-[50%] h-full absolute right-0 top-0 flex flex-row-reverse ">
            <div className="h-full border-2 border-red-500 w-full rounded-lg p-2"></div>
            <div className="flex w-12 flex-row-reverse">
              <div className="w-0 h-0 border-[0.45rem] border-transparent border-r-red-500 translate-y-12"></div>
              <div className="w-14 h-14  border-[3px] border-red-500  rounded-full absolute left-0 -translate-x-1/2 translate-y-1/2"></div>
              <div className="h-10 sm:h-14 absolute right-full translate-y-1/2 -translate-x-9 text-white hidden sm:flex justify-center items-center">
                08/07/2000
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
