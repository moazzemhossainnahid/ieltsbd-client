import React from 'react';

const UPEventDetails = ({ course }) => {
    return (
        <div className='group cursor-pointer hover:transition overflow-hidden'>
            <div>
                <img className=' group-hover:-translate-y-1 group-hover:scale-110  group-hover:duration-1000 group-hover:ease-in-out group-hover:delay-200' src={course.img} alt="" />
            </div>
 
            <div className=' flex justify-center items-center gap-5 p-5 border-b-8 border-[#0067DA]   group-hover:duration-1000 group-hover:ease-in-out group-hover:bg-[#0067DA] mt-2 h-[150px] '>

                <div className=' text-[#0067DA] font-bold group-hover:text-white'>
                    <h4 className=' text-3xl'>{course.date}</h4>
                    <h6>{course.month}</h6>
                </div>
                <div className='text-[#192f59] border-l-2 border-[#0067DA] group-hover:border-white pl-3 group-hover:text-white'>
                    <h2 className=' text-md font-semibold pb-2'>{course.name}</h2>
                    <p className='text-xs'>{course.description}</p>
                </div>  

                <div></div>
            </div>
        </div>
    );
};

export default UPEventDetails;