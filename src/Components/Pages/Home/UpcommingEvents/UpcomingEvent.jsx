import React from 'react';
import UPEventDetails from './UPEventDetails';
import { UPEventData } from '../../../../assets/Data/UpcomingEventData';

const UpcomingEvent = () => {
    return (
        <div className='lg:mx-40 my-20 mx-5'>
            <div className='text-center'>
                <h2 className=' text-4xl mb-4 font-bold'>Upcoming Events</h2>
                <p className=' mb-10 text-center'>EduSphere organizes educational fairs, fests and exhibitions annually for all aspiring students that want to enroll in a premier university or college.</p>
            </div>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-10 '>
                {
                    UPEventData?.map(course => <UPEventDetails key={course.id} course={course}></UPEventDetails>)
                }
            </div>
        </div>  
    );
};
 
export default UpcomingEvent;