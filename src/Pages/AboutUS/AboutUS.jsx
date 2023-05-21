import React from 'react';
import AboutHero from '../../Components/Pages/AboutUS/AboutHero';
import AboutLearning from '../../Components/Pages/AboutUS/AboutLearning';
import AboutCounter from '../../Components/Pages/AboutUS/AboutCounter';
import AboutMission from '../../Components/Pages/AboutUS/AboutMission';

const AboutUS = () => {
    return (
        <div className='w-full'>
            <AboutHero />
            <AboutLearning />
            <AboutCounter />
            <AboutMission />
            {/* <AboutSlide /> */}
        </div>
    );
};

export default AboutUS;