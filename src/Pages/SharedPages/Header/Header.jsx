import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import Authentication from './Authentication';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import UseAdmin from '../../../Hooks/useAdmin';
import useInstructors from '../../../Hooks/useInstructors';


const Header = () => {
    const instructors = useInstructors();
    const [user] = useAuthState(auth);
    const [admin] = UseAdmin();
    const navigate = useNavigate();

    let Links = [
        { name: 'Home', to: '/' },
        { name: 'Instructors', to: '/instructors' },
        { name: 'About', to: '/aboutus' },
        { name: 'Contact', to: '/contactus' }
    ];

    // console.log(user);

    let [open, setOpen] = useState(false);

    const [search, setSearch] = useState([]);
    /* ----------------------------------------------------------------*/
    /*                     Filter By Name Search                       */
    /* ----------------------------------------------------------------*/
    const handleSearchResult = (e) => {
        const searchText = e.target.value;
        if (e.target.value.length > 0) {
            const result = instructors?.filter((ins) =>
                ins?.name?.toLowerCase().includes(searchText.toLowerCase()) ||
                ins?.specialist?.toLowerCase().includes(searchText.toLowerCase())
            );
            setSearch(result);
        } else {
            setSearch("");
        }
    };


    console.log(instructors);

    return (
        <nav className='shadow-md w-full fixed top-0 left-0 text-left z-[99]'>
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                <div onClick={() => { navigate('/') }} className="font-bold text-3xl cursor-pointer flex items-center text-[#0f52ba]">
                    <span className="px-2 md:px-1"><img src="https://i.ibb.co/2KDPmw7/ielts-1024x341.png" alt="" className="w-32" /></span>
                    -BD
                </div>

                <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 text-black top-6 cursor-pointer md:hidden">
                    {
                        open ? <AiOutlineClose /> : <AiOutlineBars />
                    }
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] opacity-0 md:opacity-100'}`}>
                    <div class="form-control flex flex-col">
                        <div class="input-group">
                            <input onChange={handleSearchResult} type="text" placeholder="Search…" class="input input-bordered" />
                            <button className="btn" class="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                        <div className="flex flex-col space-y-2">

                            <div>
                                {/* suggest part of div */}
                                {search ? search?.length !== 0 && (
                                    <div
                                        id="suggested_item"
                                        className="bg-white rounded-lg w-5/6 lg:w-1/4 z-10 p-4 absolute"
                                    >
                                        {search
                                            ?.slice(0, 10)
                                            ?.map(({ name, _id, img, index }) => (
                                                <Link reloadDocument to={`/instructor/${_id}`}>
                                                    <div className="border-b-2 " key={index}>
                                                        <div className="pt-3 divide-y hover:text-green-400 py-2 hover:cursor-pointer divide-dashed"
                                                        >

                                                            <div className="flex items-center gap-3">
                                                                <img src={img} alt="" className="w-7 h-7 rounded-full" />
                                                                {name}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                    </div>
                                )
                                    : ""}
                            </div>
                        </div>
                    </div>

                    {
                        Links.map(link => (
                            <li key={link.name} className='md:ml-8 text-md capitalize md:my-0 my-5'><NavLink className={({ isActive }) => (isActive ? 'text-[#0f52ba] duration-300 border-b-2 border-[#0f52ba]' : 'text-gray-800 duration-100')} to={link.to}>{link.name}</NavLink></li>
                        ))
                    }
                    {/* {
                        (user && admin) && <li className='md:ml-8 text-md capitalize md:my-0 my-5'><NavLink reloadDocument className={({ isActive }) => (isActive ? 'text-[#0f52ba] duration-300 border-b-2 border-[#0f52ba]' : 'text-gray-800 duration-100')} to="/cpanel">Control Panel</NavLink></li>
                    } */}
                    {
                        user ? <div className="pl-5"><Authentication /></div> : <div className="md:pl-5" onClick={() => navigate('/signin')}><button className='btn px-5 py-2 rounded bg-primary text-white'>SignIn</button></div>
                    }

                </ul>
            </div>
        </nav >
    );
};

export default Header;