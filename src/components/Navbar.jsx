import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";


const Navbar = () =>{

    return(
        <>
            <div className="nav-container flex justify-between mx-9 items-center py-3">
                <div className="logo">
                    {/* <img src="" alt="" /> */}
                    <h1 className="text-2xl font-bold"><span className="text-[#7C3AED] ">{"</>"}</span>Devanarayanan</h1>
                </div>

                <div className="nav-links flex gap-8">
                    <a href="" className="hover:bg-[#7C3AED] rounded-full p-2 w-18.75text-center">Home</a>
                    <a href="" className="hover:bg-[#7C3AED] rounded-full p-2 w-18.75text-center">About</a>
                    <a href="" className="hover:bg-[#7C3AED] rounded-full p-2 w-18.75 text-center">Skills</a>
                    <a href="" className="hover:bg-[#7C3AED] rounded-full p-2 w-18.75 text-center">Projects</a>
                    <a href="" className="hover:bg-[#7C3AED] rounded-full p-2 w-18.75 text-center">Contacts</a>
                </div>

                <a href="/Devanarayanan_resume (4).pdf" target="_blank" className="text-white flex items-center rounded-full border-2 border-white px-2 hover:text-[#7C3AED] hover:border-[#7C3AED]"><MdOutlineFileDownload /><p>Resume</p></a>
            </div>
        </>
    )

}

export default Navbar