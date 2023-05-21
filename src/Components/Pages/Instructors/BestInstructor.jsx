import React from "react";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";

const BestInstructor = ({ instructor }) => {
  const { name, img, profession, social_link, dec } = instructor;
  return (
    <div data-aos="fade-up" class="card w-96 m-auto shadow-lg">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div class="card-body flex items-center">
        <h2 class="font-bold text-2xl text-center"> {name}</h2>
        <h3 className="text-center  mb-5">{profession}</h3>
        <p className="text-center">{dec}</p>
        <div className="flex items-center gap-4 text-gray-700   text-xl">
          <a href={social_link.facebook} target="_blank">
            <FaFacebook />
          </a>
          <a href={social_link.twitter} target="_blank">
            <FaTwitter />
          </a>
          <a href={social_link.pinterest} target="_blank">
            <FaPinterest />
          </a>
          <a href={social_link.instagram} target="_blank">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BestInstructor;
