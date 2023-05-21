import React from "react";
import Slider from "react-slick";
import SliderWrapper from "../Instructors/_SlickSliderStyle";
 
const AboutSlide = () => {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
  };
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(https://esmarts.qodeinteractive.com/wp-content/uploads/2017/09/testimonials-background-1.jpg)",
          height: "380px",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <SliderWrapper>
          <Slider {...settings}>
            <div class=" w-full flex flex-col justify-center  mt-14 ">
              <div className=" dark:text-slate-200 text-white">
                <div className="h-44 w-40 m-auto pb-5 ">
                  <img
                    src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/04/creative-team-meet-at-a-table-in-an-office-one-PWP9HT6.jpg"
                    alt="t"
                    className="rounded-full h-full w-full  "
                  />
                </div>

                <div className="mb-10">
                  <h1 className="text-center text-xl font-bold">
                    Jessica Smith -Graphic design
                  </h1>
                  <p className="text-sm  my-4 text-center">
                    People who build their own home tend to be very courageous.
                    These people are curious about life. They're thinking about
                    what it means to live in a house, rather than just buying a
                    commodity.
                  </p>
                </div>
              </div>
            </div>
            <div class=" w-full flex flex-col justify-center mt-14  ">
              <div className=" dark:text-slate-200 text-white">
                <div className="h-44 w-40 m-auto pb-5  ">
                  <img
                    src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/04/exercising-outdoors-7VSUZMN.jpg"
                    alt="t"
                    className="rounded-full h-full w-full "
                  />
                </div>

                <div className="mb-10">
                  <h1 className="text-center text-xl font-bold">
                    Brie Larsson - Software Engineer
                  </h1>
                  <p className="text-sm  my-4 text-center">
                    Statement buttons cover-up tweaks patch pockets perennial
                    lapel collar flap chest pockets topline stitching cropped
                    jacket. Effortless comfortable full leather lining.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </SliderWrapper>
      </div>
    </div>
  );
};

export default AboutSlide;
