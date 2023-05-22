import React from 'react';
import { useParams } from 'react-router-dom';
import useInstructors from '../../../Hooks/useInstructors';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';
import Swal from 'sweetalert2';

const InstructorDetails = () => {

    const { id } = useParams();
    const instructors = useInstructors();

    const instructor = instructors && instructors?.find(ins => ins?._id === id);

    // console.log(instructor);

    const handleHire = () => {
        Swal.fire({
            title: 'Are you sure ?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Confirm to Hire!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Hired!',
                    'Hire request sent Successfully.',
                    'success'
                )
            }
        })
    }

    return (
        <div>
            <div className="bg-primary opacity-80 py-8 md:py-12 mb-8 md:mb-12">
                <h1 className="text-4xl md:text-5xl px-5 font-medium text-white">
                    Instructor Profile
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 bg-white gap-y-6 md:gap-x-8 px-3 md:px-0 container mx-auto mb-10">
                <div className="rounded shadow-md h-full border-gray-400 p-5 md:p-8 mx-auto md:col-span-1">
                    <div className='w-full mx-auto flex justify-center'>
                        {instructor?.img === "" ? <img className="h-60 md:h-80" src={`${instructor?.gender === "male" && "https://cdn.vectorstock.com/i/preview-1x/53/16/white-phone-monitor-with-teacher-or-tutor-vector-38115316.jpg" || instructor?.gender === "female" && "https://cdn.vectorstock.com/i/preview-1x/53/14/white-phone-monitor-with-cute-smiling-teacher-vector-38115314.jpg"}`} alt="Shoes" /> : <img className="h-60 md:h-80" src={instructor?.img} alt="Shoes" />}
                    </div>
                    <div className="my-6 md:my-8">
                        <h1 className="text-2xl md:text-4xl text-center md:text-left font-medium text-primary opacity-80">
                            {instructor?.name}
                        </h1>
                        <h4 className="text-sm md:text-md font-medium text-center md:text-left mt-2">
                            {instructor?.title}
                        </h4>
                        <h5 className="text-base text-center md:text-left mt-2">
                            {instructor?.organization}
                        </h5>
                    </div>
                    <div className="my-6 md:my-8">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                            <img
                                className="w-6 h-6"
                                src="https://img.icons8.com/ios/452/phone.png"
                                alt=""
                            />
                            <p className="text-lg font-medium">{instructor?.phone}</p>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                            <img
                                className="w-6 h-6"
                                src="https://img.icons8.com/ios/452/new-post.png"
                                alt=""
                            />
                            <p className="text-lg font-medium">{instructor?.email}</p>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                            <img
                                className="w-6 h-6"
                                src="https://img.icons8.com/ios/452/marker--v1.png"
                                alt=""
                            />
                            <p className="text-lg font-medium">{instructor?.address}</p>
                        </div>

                    </div>
                    <div class="divider"></div>
                    <div className="py-10">
                        <div className="w-full flex justify-center ">
                            <button onClick={handleHire} className="btn btn-outline btn-primary hover:text-white px-7 capitalize py-2 rounded">Click to Hire</button>
                        </div>
                    </div>
                </div>

                <div className="rounded shadow-md h-full md:col-span-2 p-5 md:p-8">
                    <div className="mb-5">
                        <h3 className="font-medium text-3xl text-center md:text-left mb-5 text-primary opacity-80">
                            Biography
                        </h3>
                        <p className="text-justify text-base my-3">
                            {instructor?.description}
                        </p>
                    </div>
                    <div class="divider"></div>
                    <div className="mb-3">
                        <h3 className="font-medium text-3xl text-center md:text-left mb-5 text-primary opacity-80">
                            Qualifications
                        </h3>
                        <div>
                            {instructor?.education && instructor?.education?.map((e, idx) => (
                                <div key={idx} className="">
                                    <h3 className="text-2xl font-bold tracking-widest text-gray-600">{e?.title}</h3>
                                    <p className="text-justify font-medium italic text-gray-400 text-base mb-3">{e?.shortTitle}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div className="mb-3">
                        <h3 className="font-medium text-3xl text-center md:text-left mb-5 text-primary opacity-80">
                            Others Informations
                        </h3>
                        <div className="w-full flex flex-col gap-3">
                            <div className="space-y-3">
                                <h3 className="text-2xl font-semibold text-gray-700">Sex: <span className="pl-2 font-normal text-xl">{instructor?.gender}</span></h3>
                                <h3 className="text-2xl font-semibold text-gray-700">Profession Level: <span className="pl-2 font-normal text-xl">{instructor?.professionLevel}</span></h3>
                                <h3 className="text-2xl font-semibold text-gray-700">Teching Experience: <span className="pl-2 font-normal text-xl">{instructor?.totalTechingExp} yrs.</span></h3>
                                <h3 className="text-2xl font-semibold text-gray-700">Teching Type: <span className="pl-2 font-normal text-xl">{instructor?.techingType}</span></h3>
                                <h3 className="text-2xl font-semibold text-gray-700">Speciality: <span className="pl-2 font-normal text-xl">{instructor?.specialist}</span></h3>
                                <h3 className="text-2xl font-semibold text-gray-700">Fee Detsils: <span className="pl-2 font-bold text-3xl">{instructor?.feeDetails} <sub>/Month</sub> </span></h3>
                            </div>

                        </div>
                    </div>
                    <div class="divider"></div>
                    <div className="mb-5">
                        <h3 className="font-medium text-3xl md:text-left mb-5 text-primary opacity-80">
                            Social Connectivity
                        </h3>
                        <div className="flex item-center justify-left md:justify-start">

                            <div className="flex flex-col md:flex-row item-center justify-left gap-3 w-full mr-10 space-y-4">
                                <div className="w-full md:w-3/6">
                                    <a href={instructor?.social_link?.facebook} target='_blank' className="flex gap-2 items-center text-justify font-medium text-base mb-3"><FaFacebook className='text-blue-600' /> Facebook</a>
                                    <a href={instructor?.social_link?.twitter} target='_blank' className="flex gap-2 items-center text-justify font-medium text-base mb-3"><FaTwitter className='text-sky-600' /> Twitter</a>
                                </div>
                                <div className="w-full md:w-3/6">
                                    <a href={instructor?.social_link?.pinterest} target='_blank' className="flex gap-2 items-center text-justify font-medium text-base mb-3"><FaPinterest className='text-red-600' /> Pinterest</a>
                                    <a href={instructor?.social_link?.instagram} target='_blank' className="flex gap-2 items-center text-justify font-medium text-base mb-3"><FaInstagram className='text-red-800' /> Instagram</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorDetails;