import React from "react";
import CountUp from "react-countup";

const AboutCounter = () => { 
  return (
    <div className="w-full mx-auto h-auto items-center py-10 ">
      <div className="grid md:grid-cols-5 grid-cols-1 gap-5 mx-4 ">
        <div className="flex justify-center">
          <h1 className="text-7xl font-semibold text-slate-900">
            <CountUp end={40} duration={5} />M
            <h2 className="text-xl mt-3 font-normal flex justify-center text-slate-500">
              Students
            </h2>
          </h1>
        </div>
        <div className="flex justify-center">
          <h1 className="text-7xl font-semibold text-slate-900">
            <CountUp end={130} duration={5} />K
            <h2 className="text-xl mt-3 font-normal flex justify-center text-slate-500">
              Course
            </h2>
          </h1>
        </div>
        <div className="flex justify-center">
          <h1 className="text-7xl font-semibold text-slate-900">
            <CountUp end={50} duration={5} />k
            <h2 className="text-xl mt-3 font-normal flex justify-center text-slate-500">
              Instructors
            </h2>
          </h1>
        </div>
        <div className="flex justify-center">
          <h1 className="text-7xl font-semibold text-slate-900">
            <CountUp end={65} duration={5} />M
            <h2 className="text-xl mt-3 font-normal flex justify-center text-slate-500">
              Course enrolments
            </h2>
          </h1>
        </div>
        <div className="flex justify-center">
          <h1 className="text-7xl font-semibold text-slate-900">
            <CountUp end={30} duration={5} />+
            <h2 className="text-xl mt-3 font-normal flex justify-center text-slate-500">
              Languages
            </h2>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutCounter;
