import React from 'react';
import ContectBanner from '../../Components/Pages/ContactUS/ContectBanner';
import ContactMap from '../../Components/Pages/ContactUS/ContactMap';
import ContactApply from '../../Components/Pages/ContactUS/ContactApply';

const ContactUS = () => {
    return (
        <div className='w-full'>
            <ContectBanner />
            <ContactMap />
            <ContactApply />
        </div>
    );
};

export default ContactUS;