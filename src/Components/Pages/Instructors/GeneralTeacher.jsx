import React from "react";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const GeneralTeacher = ({ instructor }) => {
  const { name, img, profession, social_link,_id } = instructor;
  const navigate = useNavigate();
  console.log(instructor);
  return (
    <div className="p-10 rounden dark:text-slate-200 flex justify-evenly items-center shadow-sm ">
      <div className="h-40 w-40">
        <img src={img} alt="t" />
      </div>
      <div className="">
        <h1 className="text-xl text-gray-700 font-bold">{name}</h1>
        <p className="text-sm text-gray-500 my-4">{profession} </p>
        <div className="flex items-center gap-4 text-gray-700 mt-5 p-1 text-xl shadow-md">
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
            <FaInstagram/>
          </a>
        </div>
        <div className="pt-3">
          <button onClick={() => navigate(`/instructor/${_id}`)} className="btn btn-sm btn-outline">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default GeneralTeacher;