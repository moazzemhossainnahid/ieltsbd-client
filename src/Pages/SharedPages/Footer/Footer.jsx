import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='bg-gray-700 mx-auto'>
            <footer class="footer w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-3 p-10 bg-gray-900 text-gray-300 text-center md:text-center">
                <div className="w-full mx-auto text-center">
                    <span class=" capitalize text-white text-xl font-semibold pb-5">Contact</span>
                    <a href="#!" class=" hover:pl-2 duration-300">Branding</a>
                    <a href="#!" class=" hover:pl-2 duration-300">Design</a>
                    <a href="#!" class=" hover:pl-2 duration-300">Marketing</a>
                    <a href="#!" class=" hover:pl-2 duration-300">Advertisement</a>
                </div>
                <div className="w-full mx-auto">
                    <span class="capitalize text-white text-xl font-semibold pb-5">About IELTS</span>
                    <a href="#!" class=" hover:pl-2 duration-300">About us</a>
                    <a href="#!" class=" hover:pl-2 duration-300">Contact</a>
                    <a href="#!" class=" hover:pl-2 duration-300">Jobs</a>
                    <a href="#!" class=" hover:pl-2 duration-300">Press kit</a>
                </div>
                <div className="w-full mx-auto">
                    <span class=" capitalize text-white text-xl font-semibold pb-5">Support</span>
                    <a href="#!" class=" hover:pl-2 duration-300">Terms of use</a>
                    <a href="#!" class=" hover:pl-2 duration-300">Privacy policy</a>
                    <a href="#!" class=" hover:pl-2 duration-300">Cookie policy</a>
                </div>
                <div className="w-full mx-auto">
                    <span class=" capitalize text-white text-xl font-semibold pb-5">Mobile</span>
                    <div className="flex text-white flex-col gap-3">
                        <div className="flex justify-center bg-black cursor-pointer hover:bg-blue-500 px-5 py-2 rounded items-center gap-3">
                            <FaApple className='text-4xl'/>
                            <div className="">
                                <p className="">Available Now on</p>
                                <h3 className="text-xl">App Store</h3>
                            </div>
                        </div>
                        <div className="flex justify-center bg-black cursor-pointer hover:bg-blue-500 px-5 py-2 rounded items-center gap-3">
                            <FaGooglePlay className='text-4xl'/>
                            <div className="">
                                <p className="">Available Now on</p>
                                <h3 className="text-xl">Play Store</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer class="footer px-10 py-4 border-t bg-gray-900 border-base-300">
                <div class="items-center grid-flow-col">
                    <div class="flex w-full items-center gap-3">
                        <div className="flex flex-col md:flex-row gap-3 items-center">
                            <div className="flex gap-3 items-center pr-2 border-r-2">
                                <img className='w-10' src="https://cyberlearn.hes-so.ch/pluginfile.php/4006315/course/section/339702/ielts.png" alt="" />
                                <h3 className="text-2xl text-white font-bold">IELTS-BD</h3>
                            </div>
                            <div className="flex gap-3 text-gray-300">
                                <a href="#!" class=" hover:pl-2 duration-300">Home</a>
                                <a href="#!" class=" hover:pl-2 duration-300">Privacy</a>
                                <a href="#!" class=" hover:pl-2 duration-300">Cookie</a>
                                <a href="#!" class=" hover:pl-2 duration-300">Terms</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="md:place-self-center md:justify-self-end">
                    <div class="grid grid-flow-col text-white gap-4">
                        <a href="!#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a href="!#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a href="!#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </div>
            </footer>
            <footer class="footer px-10 py-4 flex justify-center items-center bg-black">
                <div class="items-center justify-center grid-flow-col">
                    <p className="text-gray-300 text-center">Copyright © 2023 Theme by I Mern Tech. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;