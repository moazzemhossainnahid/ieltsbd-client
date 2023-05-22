import React from 'react';
import BestInstructor from '../Instructors/BestInstructor';
import useInstructors from '../../../Hooks/useInstructors';
import { useNavigate } from 'react-router-dom';

const HomeTopBestInstructor = () => {
    const instructors = useInstructors();
    const navigate = useNavigate();
    return (
        <div className='container w-full mx-auto'>
            <div className="text-center py-10">
                <div>
                    <h1 className="te mb-5 text-4xl md:text-5xl font-bold">
                        Our Best Instructors
                    </h1>
                    <p className="mb-5 text-xl lg:w-[780px] px-5 mx-auto text-center">
                        Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum neque,
                        facilisis vel mollis vitae, mollis nec ante. Quisque aliquam dictum
                        condim.
                    </p>
                </div>
            </div>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 w-full mb-20">
                {instructors?.map((instructor) => {
                    if (instructor.teacherCategory === "best") {
                        return <BestInstructor instructor={instructor}></BestInstructor>;
                    }
                })}
            </div>

            <div className="w-full flex justify-center ">
                <button onClick={() => navigate("/instructors")} className="btn btn-outline px-7 capitalize py-2 rounded">See all Instructors</button>
            </div>
        </div>
    );
};

export default HomeTopBestInstructor;