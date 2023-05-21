import React from "react";
 
const AboutMission = () => {
  return (
    <div className="  pt-14">
      <div className=" lg:container my-20 md:my-20 mx-auto  ">
        <div className="grid grid-cols-1 md:grid-cols-12 grid-flow-row md:gap-5 ">
          <div className="col-span-7  flex  md:flex-row flex-col ">
            <div className="flex flex-col   px-0 ">
              <img
                src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/09/students-finding-information-for-study-on-PBHFD2Q-768x512.jpg"
                alt=""
                className="w-full  mb-4 rounded"
              />
              {/* lg:h-[240px] md:h-[160px] h-[240px] md:w-96  md:px-0 lg:px-1*/}
              <img
                src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/08/stefan-stefancik-257624-unsplash-768x513.jpg"
                alt=""
                className="w-full  mb-4 rounded "
              />
            </div>
            <div className="flex flex-col md:px-3  px-0 relative  md:mt-[-100px] ">
              <img
                src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/04/businesswomen-architecture-blueprint-brick-studio-PPY9UUF-768x513.jpg"
                alt=""
                className="w-full  mb-4 rounded"
              />

              <img
                src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/09/group-of-students-sitting-on-staircase-using-PRJVY2N-768x513.jpg"
                alt=""
                className="w-full  md:w-96 mb-4 rounded"
              />
            </div>
          </div>
          <div className=" col-span-5  bg-base-100  flex justify-center items-center p-5 ">
            <div className=" card shadow-lg lg:px-8">
              <div className="card-body">
                <h1 className="my-4 text-3xl font-semibold md:text-left sm:text-center	leading-6 ">
                  Our Mission
                </h1>
                <p className="text-slate-900  md:text-left sm:text-center text-lg">
                  Our mission is to democratize education through the offering
                  of world-className higher education opportunities that are
                  accessible, flexible, and economical. Virtually anyone on the
                  planet with an internet connection and a commitment to
                  self-empowerment through learning can come to Udacity, master
                  a suite of job-ready skills, and pursue rewarding employment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
