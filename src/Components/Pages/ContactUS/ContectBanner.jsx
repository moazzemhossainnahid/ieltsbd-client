import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import Animation from '../../Others/Animation/Animation';
import Swal from 'sweetalert2';


const ContectBanner = () => {

    const [pending, setPending] = useState(false);


    const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     setPending(true);


    //     const data = {
    //         name : e.target.name.value,
    //         email : e.target.email.value,
    //         message : e.target.message.value,
    //         subject : e.target.subject.value
    //     }

    //     emailjs.send('service_isw7suz', 'template_mcak73j', data, '3Ia_oLKOBiLv_2B3T')
    //         .then((result) => {
    //             // console.log(result);
    //             if (result?.text) {
    //                 toast.success("Successfull", "You Send an Email!", "success");
    //                 e.target.reset();
    //                 setPending(false);
    //             }
    //         }, (error) => {
    //             swal("OPPSS...", "Email not Send!", "error");
    //             setPending(false);
    //         });


    // };

    const handleContact = async (e) => {
        e.preventDefault();
        const contactData = {
            name: e.target.name.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };

        // console.log(contactData);
        // console.log("from data", contactData);

        await fetch(`https://ieltsbd-server-production.up.railway.app/api/v1/contacts`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(contactData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === "Successful") {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Data Addeded Successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    };


    return (
        <div className='text-left'>
            <div style={{
                backgroundImage: "url(https://edusphere.radiantthemes.com/wp-content/uploads/2020/08/contact-banner.jpg)"
            }} className="bg-cover  bg-no-repeat lg:h-[500px] h-40 lg:z-0">
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 lg:mx-44 lg:my-24 my-5 p-5'>
                <div>
                    <h4 className=' text-lg uppercase font-bold text-[#015ABD] mb-3'>contact us</h4>
                    <Animation />
                    <h2 className=' text-4xl font-semibold my-6'>Are You Interested In Online Learning? Contact Us.</h2>
                    <p className='mb-4 w-3/4'>Contact our top-notch educationalist in the UK that has huge expertise in providing futuristic solutions to all aspiring students coming for higher education.</p>

                    <img src="https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Signeture-1.png" alt="" />
                    <h5 className=' font-semibold'>Brayden Backham</h5>
                    <p>Director</p>
                </div>
                <div className=' px-12 pt-10 pb-5 shadow-lg text-[#222222] lg:mt-[-220px] lg:z-40 bg-white'>
                    <h2 className=' text-4xl font-semibold mb-4'>Fill Out For Contact</h2>
                    <p>Fill-in the contact form and get immediate assistance from our educational consultant.</p>
                    <form ref={form} onSubmit={handleContact} >
                        <input name="name" className=' block w-full h-10 pl-2 border-2 border-[#d8dada] my-5' type="text" id="" placeholder="Your Name" />

                        <input name="email" className=' block w-full h-10 pl-2 border-2 border-[#d8dada] mb-5' type="email" id="" placeholder="Email address" />

                        <input name="subject" className=' block w-full h-10 pl-2 border-2 border-[#d8dada] mb-5' type="text" id="" placeholder="Subject" />

                        <textarea name="message" className=' block w-full h-32 resize-none pl-2 border-2 border-[#d8dada] mb-5' type="text" id="" placeholder="Your message" />

                        <input disabled={pending ? true : false} className=' block h-10 px-7 bg-[#015abd] text-white cursor-pointer uppercase my-4' type="submit" value="Send now" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContectBanner;