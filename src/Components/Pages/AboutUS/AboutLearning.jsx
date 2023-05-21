import React from "react";
 
const AboutLearning = () => {
  return (
    <div className="w-full h-auto my-16">
      <div className="max-w-[1240px] m-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            The leading global marketplace <br />
            for learning and instruction
          </h2>
          <div className="grid md:grid-cols-2 grid-cols-1 my-14 md:mx-4 sm:mx-4 gap-y-14 ">
            {/* Learning 1st Card Start */}
            <div className="flex md:flex-row items-center justify-around flex-col gap-4 lg:gap-0">
              <div className="md:w-40 lg:w-48 w-3/4 lg:h-40 md:h-40 h-72 lg:flex-shrink-0 md:flex-shrink-0   bg-transparent cursor-pointer group perspective">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 object-contain">
                  <div className="absolute backface-hidden   w-full h-full">
                    <div className="h-full w-full relative">
                      <img
                        src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/04/student-friends-studying-together-UNCHR5E-768x513.jpg"
                        className="w-full h-full rounded-lg "
                      />
                      <div className="w-full h-full absolute top-0 bg-opacity-20 rounded-lg bg-black">
                        <img
                          src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/08/noun_distance-learning_2613206.png"
                          alt="dd"
                          className="  w-1/3 h-1/3 absolute top-[33%] left-[33%] bg-opacity-70 "
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute my-rotate-y-180 backface-hidden rounded-lg w-full h-full bg-gray-100 overflow-hidden">
                    <div className="h-full w-full relative">
                      <img
                        src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/04/creative-business-people-working-on-business-WGCU95A-768x512.jpg"
                        className="w-full h-full"
                      />
                      <div className="w-full h-full absolute top-0 bg-opacity-30 rounded-lg bg-black flex items-center justify-center">
                        <h1 className="text-white text-2xl font-bold font-mono">
                          Personalize Learning
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center  mx-8 ">
                <h2 className=" text-2xl mb-3 font-bold text-start lg:text-left sm:text-center">
                  Personalized learning
                </h2>
                <p className="text-start text-lg  lg:text-left sm:text-center">
                  Students practice at their own pace, first filling in gaps in
                  their understanding and then accelerating their learning.
                </p>
              </div>
            </div>
            {/* Learning 1st Card end */}
            {/* Learning 2nd Card Start */}
            <div className="flex  items-center justify-around flex-col md:flex-row gap-4 lg:gap-0">
              <div className="md:w-40 lg:w-48 w-3/4 lg:h-40 md:h-40 h-72 lg:flex-shrink-0 md:flex-shrink-0   bg-transparent cursor-pointer group perspective">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 object-contain">
                  <div className="absolute backface-hidden   w-full h-full">
                    <div className="h-full w-full relative">
                      <img
                        src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/04/rear-view-of-woman-studying-in-library-PHSY8GG-768x1152.jpg"
                        className="w-full h-full rounded-lg "
                      />
                      <div className="w-full h-full absolute top-0 bg-opacity-20 rounded-lg bg-black">
                        <img
                          src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/08/noun_distance-learning_2613206.png"
                          alt="dd"
                          className="  w-1/3 h-1/3 absolute top-[33%] left-[33%] bg-opacity-70 "
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute my-rotate-y-180 backface-hidden rounded-lg w-full h-full bg-gray-100 overflow-hidden">
                    <div className="h-full w-full relative">
                      <img
                        src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/04/closeup-of-hand-coloring-artwork-PWNKADK-768x1015.jpg"
                        className="w-full h-full"
                      />
                      <div className="w-full h-full absolute top-0 bg-opacity-30 rounded-lg bg-black flex items-center justify-center">
                        <h1 className="text-white text-2xl px-10 font-bold font-mono">
                          Trusted content
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center  mx-8 ">
                <h2 className=" text-2xl mb-3 font-bold text-start lg:text-left sm:text-center">
                  Trusted content
                </h2>
                <p className="text-start text-lg  lg:text-left sm:text-center">
                  Created by experts, Coursector library of trusted practice and
                  lessons covers math, science, and more.
                </p>
              </div>
            </div>
            {/* Learning 2nd Card end */}
            {/* Learning 3rd Card Start */}
            <div className="flex  items-center justify-around flex-col md:flex-row gap-4 lg:gap-0">
              <div className="md:w-40 lg:w-48 w-3/4 lg:h-40 md:h-40 h-72 lg:flex-shrink-0 md:flex-shrink-0   bg-transparent cursor-pointer group perspective">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 object-contain">
                  <div className="absolute backface-hidden   w-full h-full">
                    <div className="h-full w-full relative">
                      <img
                        src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/08/man-working-laptop-connecting-networking-concept-PBQ9FVZ-768x888.jpg"
                        className="w-full h-full rounded-lg "
                      />
                      <div className="w-full h-full absolute top-0 bg-opacity-20 rounded-lg bg-black">
                        <img
                          src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/08/noun_distance-learning_2613206.png"
                          alt="dd"
                          className="  w-1/3 h-1/3 absolute top-[33%] left-[33%] bg-opacity-70 "
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute my-rotate-y-180 backface-hidden rounded-lg w-full h-full bg-gray-100 overflow-hidden">
                    <div className="h-full w-full relative">
                      <img
                        src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/08/creative-pensive-art-school-painter-working-on-C93L7Q6-768x512.jpg"
                        className="w-full h-full"
                      />
                      <div className="w-full h-full absolute top-0 bg-opacity-30 rounded-lg bg-black flex items-center justify-center">
                        <h1 className="text-white text-2xl px-10 font-bold font-mono">
                          Empower teachers
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center  mx-8 ">
                <h2 className=" text-2xl mb-3 font-bold text-start lg:text-left sm:text-center">
                  Empower teachers
                </h2>
                <p className="text-start text-lg  lg:text-left sm:text-center">
                  With Coursector, teachers can identify gaps in their students’
                  understanding, tailor instruction
                </p>
              </div>
            </div>
            {/* Learning 3rd card end */}
            {/* Learning 4th card start */}

            <div className="flex  items-center justify-around flex-col md:flex-row gap-4 lg:gap-0">
              <div className="md:w-40 lg:w-48 w-3/4 lg:h-40 md:h-40 h-72 lg:flex-shrink-0 md:flex-shrink-0   bg-transparent cursor-pointer group perspective">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 object-contain">
                  <div className="absolute backface-hidden   w-full h-full">
                    <div className="h-full w-full relative">
                      <img
                        src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/08/architect-working-on-drawing-table-in-office-P3ZFYDV-768x512.jpg"
                        className="w-full h-full rounded-lg "
                      />
                      <div className="w-full h-full absolute top-0 bg-opacity-20 rounded-lg bg-black">
                        <img
                          src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/08/noun_distance-learning_2613206.png"
                          alt="dd"
                          className="  w-1/3 h-1/3 absolute top-[33%] left-[33%] bg-opacity-70 "
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute my-rotate-y-180 backface-hidden rounded-lg w-full h-full bg-gray-100 overflow-hidden">
                    <div className="h-full w-full relative">
                      <img
                        src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/04/artists-hand-close-up-on-the-background-of-PHSLQQ2-768x512.jpg"
                        className="w-full h-full"
                      />
                      <div className="w-full h-full absolute top-0 bg-opacity-30 rounded-lg bg-black flex items-center justify-center">
                        <h1 className="text-white text-2xl px-10 font-bold font-mono">
                          Trusted content
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center  mx-8 ">
                <h2 className=" text-2xl mb-3 font-bold text-start lg:text-left sm:text-center">
                  Put your learning into practice
                </h2>
                <p className="text-start text-lg  lg:text-left sm:text-center">
                  Students practice at their own pace, first filling in gaps in
                  their understanding and then accelerating their learning.
                </p>
              </div>
            </div>
            {/* Learning 4th card end */}
          </div>
        </div>
      </div>
      <div className="divider w-full  md:w-5/6 m-auto opacity-30"></div>
    </div>
  );
};

export default AboutLearning;
