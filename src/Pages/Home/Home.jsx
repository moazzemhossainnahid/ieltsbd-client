import React from 'react';
import Banner from '../../Components/Pages/Home/Banner';
import UpcomingEvent from '../../Components/Pages/Home/UpcommingEvents/UpcomingEvent';
import LimitedLearningBanner from '../../Components/Pages/Home/LimitedLearningBanner';

const Home = () => {
    return (
        <div className='w-full'>
             <Banner/>
             <UpcomingEvent/>
             <LimitedLearningBanner/>
        </div>
    );
};

export default Home;