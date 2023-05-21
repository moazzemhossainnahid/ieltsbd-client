import React from "react";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const GeneralTeacher = ({ instructor }) => {
  const { name, img, title, gender, social_link, _id } = instructor;
  const navigate = useNavigate();
  // console.log(instructor);
  return (
    <div className="w-full flex flex-col md:flex-row text-center md:text-left gap-3 mx-auto rounded dark:text-slate-200 justify-center items-center shadow p-5">
      <div className="w-full md:w-2/5 mx-auto">
        {img === "" ? <img className="h-28 md:h-32 w-28 md:w-32 mx-auto rounded" src={`${gender === "male" && "https://cdn.vectorstock.com/i/preview-1x/53/16/white-phone-monitor-with-teacher-or-tutor-vector-38115316.jpg" || gender === "female" && "https://cdn.vectorstock.com/i/preview-1x/53/14/white-phone-monitor-with-cute-smiling-teacher-vector-38115314.jpg"}`} alt={name} /> : <img className="h-28 md:h-32 w-28 md:w-32 mx-auto rounded" src={img} alt={name} />}
      </div>
      <div className="w-full md:w-3/5 mx-auto">
        <h1 className="text-xl text-gray-700 font-bold">{name}</h1>
        <p className="text-sm text-gray-500 my-4">{title} </p>
        <div className="flex mx-auto items-center justify-center gap-4 text-gray-700 mt-5 p-1 text-xl shadow-md">
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
        <div className="pt-3">
          <button onClick={() => navigate(`/instructor/${_id}`)} className="btn btn-sm btn-outline">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default GeneralTeacher;