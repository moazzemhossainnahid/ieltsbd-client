import React from "react";

const AboutHero = () => {
  return (
    <div>
      <div
        className={` bg-[url('https://themes.themegoods.com/coursector/wp-content/uploads/2019/04/student-friends-studying-together-UNCHR5E.jpg')] bg-cover h-[520px] bg-no-repeat flex items-center  `}
      >
        <div className="text-white max-w-2xl pl-10 font-bold ">
          <h2 className="text-xl uppercase mb-2   font-mono">About Us</h2>
          <h3 className=" text-5xl font-mono">
            Improving Lives <br /> Through Learning
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
