import React from 'react';
import Banner from '../../Components/Pages/Home/Banner';
import UpcomingEvent from '../../Components/Pages/Home/UpcommingEvents/UpcomingEvent';
import LimitedLearningBanner from '../../Components/Pages/Home/LimitedLearningBanner';
import HomeTopBestInstructor from '../../Components/Pages/Home/HomeTopBestInstructor';

const Home = () => {
    return (
        <div className='w-full overflow-x-hidden'>
             <Banner/>
             <HomeTopBestInstructor/>
             <UpcomingEvent/>
             <LimitedLearningBanner/>
        </div>
    );
};

export default Home;