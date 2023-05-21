import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { AiOutlinePhone } from 'react-icons/ai';
import { BsClock } from 'react-icons/bs';
import Animation from '../../Others/Animation/Animation';

const ContactApply = () => {   

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-28 lg:mx-44 my-24 mx-6'>
            <div className='text-left'>
                <h2 className=' text-4xl font-bold my-4'>Get in touch</h2>
                <Animation/>
                <p className='text-lg my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore</p>

                <p className=' flex gap-1 items-center mb-2'><IoLocationOutline className='text-[#ff1949] text-xl' /> 457 BIgBlue Street, NY 10013</p>
                <p className=' flex gap-1 items-center mb-2'><IoLocationOutline className='text-[#ff1949] text-xl' /> 998 Some Street, LA 10013</p>
                <p className=' flex gap-1 items-center mb-2'><IoLocationOutline className='text-[#ff1949] text-xl' /> 457 BIgBlue Street, NY 10013</p>
                <p className=' flex gap-1 items-center mb-2'><AiOutlinePhone className='text-[#ff1949] text-xl' /> +44 300 303 0266</p>
                <p className=' flex gap-2 items-center mb-2'><BsClock className='text-[#ff1949]' /> Mon - Sat 8.00 - 18.00</p>

            </div>
            <div style={{
                backgroundImage: "url(https://academist.qodeinteractive.com/wp-content/uploads/2018/07/Form-background-img.jpg)"
            }} className=' bg-cover bg-no-repeat'>

                <h2 className=' text-4xl font-bold '>Apply now</h2>

                <form className='pt-20'>
                    <input className=' block w-full h-10 pl-2 border-b-2 border-[#d8dada] my-5' type="text" name="" id="" placeholder="Your Name" />

                    <input className=' block w-full h-10 pl-2 border-b-2 border-[#d8dada] mb-5' type="email" name="" id="" placeholder="Email address" />

                    <input className=' block w-full h-10 pl-2 border-b-2 border-[#d8dada] mb-5' type="number" name="" id="" placeholder="Phone number" />

                    <input className=' block h-10 px-7 bg-[#015abd] text-white uppercase mb-4 mt-8' type="submit" value="Send now" />
                </form>
            </div>
        </div>
    );
};

export default ContactApply;