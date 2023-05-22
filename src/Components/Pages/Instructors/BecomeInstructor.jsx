import React from "react";
import { useForm } from "react-hook-form";
import svg1 from "../../../assets/svg1.png";
import svg2 from "../../../assets/svg2.png";
import svg3 from "../../../assets/svg3.png";
import Swal from "sweetalert2";

const BecomeInstructor = () => {
  const { register, handleSubmit } = useForm();


  const onSubmit = async (data) => {
    const applicationData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      description: data.description,
    };

    // console.log(data);
    // console.log("from data", applicationData);

    await fetch(`https://ieltsbd-server-production.up.railway.app/api/v1/beinstructor`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(applicationData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === "Successful") {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Data Addeded Successfully.',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })

  };


  return (
    <div className=" w-full mx-auto py-20 text-slate-800 mb-20 p-5 ">
      <div className="text-center mb-20">
        <div>
          <h1 className=" mb-5 text-4xl md:text-5xl font-bold">
            Become an Instructor
          </h1>
          <p className="mb-5 text-xl lg:w-[820px] mx-auto text-center">
            Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum neque,
            facilisis vel mollis vitae, mollis nec ante. Quisque aliquam dictum
            condim.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
        <div class="card w-96 bg-base-100 shadow-xl mx-auto">
          <figure class="px-10 pt-10">
            <img src={svg1} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Inspire Learners</h2>
            <p>
              Fusce tempor, tortor et vehicula ermpts posuere, mi est iaculis
              quamec luctus enim erat iaculis quamec
            </p>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl mx-auto">
          <figure class="px-10 pt-10">
            <img src={svg2} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Teach Your Way</h2>
            <p>
              Fusce tempor, tortor et vehicula ermpts posuere, mi est iaculis
              quamec luctus enim erat iaculis quamec
            </p>
          </div>
        </div>

        <div class="card w-96 bg-base-100 shadow-xl mx-auto">
          <figure class="px-10 pt-10">
            <img src={svg3} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Learn From Anywhere</h2>
            <p>
              Fusce tempor, tortor et vehicula ermpts posuere, mi est iaculis
              quamec luctus enim erat iaculis quamec
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-28  my-24">
        <div className="w-full lg:w-6/6">
          <img
            src="https://edubee.radiantthemes.com/wp-content/uploads/2021/05/laptop.png"
            alt=""
          />
        </div>
        <div className="w-full lg:w-6/6 sm:px-6">
          <h2 className="text-primary font-bold my-4">World-Class Learning</h2>
          <h2 className="text-2xl font-bold my-4">
            Teach Your Students The Skills Of The Future
          </h2>
          <h2>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua quis ipsum suspendis
          </h2>
          <h4 className="texl-2xl font-bold">
            <input
              type="checkbox"
              class="checkbox mr-3 mt-5"
              disabled
              checked
            />
            Plan Your Curriculum
          </h4>
          <p>
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua quis ipsum suspenultrices.
          </p>
          <h4 className="texl-2xl font-bold">
            <input
              type="checkbox"
              class="checkbox mr-3 mt-5"
              disabled
              checked
            />
            Provide Your Video Online
          </h4>
          <p>
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua quis ipsum suspenultrices.
          </p>
          <h4 className="texl-2xl font-bold">
            <input
              type="checkbox"
              class="checkbox mr-3 mt-5"
              disabled
              checked
            />
            Get Printed Certification
          </h4>
          <p>
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua quis ipsum suspenultrices.
          </p>
        </div>
      </div>

      <div
        className="hero relative border-2 border-black p-2"
        style={{
          backgroundImage:
            "url(https://academist.qodeinteractive.com/wp-content/uploads/2018/07/become-a-teacher-slider.jpg)",
          height: "550px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div class="card-body  absolute left-10 sm:left-1 top-[-25px]">
          <div className=" px-12 pb-10  shadow-lg text-[#222222] lg:mt-[50px] bg-white">
            <h2 className=" text-4xl font-semibold mb-4 mt-5 text-red-400">
              Join Us
            </h2>
            <p>
              Start creating an online video course and earn money by teaching
              people.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className=" block w-full h-10 pl-2 border-2 border-[#d8dada] my-5"
                type="text"
                {...register("name")}
                name="name"
                id=""
                placeholder="Your Name"
              />

              <input
                className=" block w-full h-10 pl-2 border-2 border-[#d8dada] mb-5"
                type="email"
                {...register("email")}
                name="email"
                id=""
                placeholder="Email address"
              />

              <input
                className=" block w-full h-10 pl-2 border-2 border-[#d8dada] mb-5"
                type="text"
                {...register("phone")}
                name="phone"
                id=""
                placeholder="Phone Number"
              />

              <textarea
                className=" block w-full h-32 pl-2 border-2 border-[#d8dada] mb-5"
                type="text"
                {...register("description")}
                name="description"
                id=""
                placeholder="Professional Experiences"
              />

              <input
                className=" block h-10 px-7 cursor-pointer bg-[#015abd] text-white uppercase my-4"
                type="submit"
                value="Send now"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeInstructor;
