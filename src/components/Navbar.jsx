import React, { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";


const Navbar = () =>{

    const [menuOpen,SetMenuOpen] = useState(false)

    return(
        <>
            <div className="nav-container flex justify-between mx-5 pe-2 md:mx-9 items-center py-3">
                <div className="logo">
                    {/* <img src="" alt="" /> */}
                    <h1 className="md:text-2xl font-bold "><span className="text-[#7C3AED] ">{"</>"}</span>Devanarayanan</h1>
                </div>

                <button onClick={()=>SetMenuOpen(!menuOpen)} className="md:hidden text-3xl">{menuOpen? "✕" : "☰"}</button>

                <div className="nav-links md:flex gap-8 hidden ">
                    <a href="" className="hover:bg-[#7C3AED] rounded-full p-2 w-18.75text-center">Home</a>
                    <a href="" className="hover:bg-[#7C3AED] rounded-full p-2 w-18.75text-center">About</a>
                    <a href="" className="hover:bg-[#7C3AED] rounded-full p-2 w-18.75 text-center">Skills</a>
                    <a href="" className="hover:bg-[#7C3AED] rounded-full p-2 w-18.75 text-center">Projects</a>
                    <a href="" className="hover:bg-[#7C3AED] rounded-full p-2 w-18.75 text-center">Contacts</a>
                </div>

                <a href="/Devanarayanan_resume (4).pdf" target="_blank" className="text-white md:flex hidden items-center rounded-full border-2 border-white px-2 hover:text-[#7C3AED] hover:border-[#7C3AED]"><MdOutlineFileDownload /><p>Resume</p></a>
            </div>

            {menuOpen &&
            (
                <div className="md:hidden gap-8 flex flex-col items-center">
                    <a href="" className="hover:bg-[#7C3AED] rounded-full p-2 w-18.75 text-center" onClick={() => SetMenuOpen(false)}>Home</a>
                    <a href="" className="hover:bg-[#7C3AED] rounded-full p-2 w-18.75 text-center" onClick={() => SetMenuOpen(false)}>About</a>
                    <a href="" className="hover:bg-[#7C3AED] rounded-full p-2 w-18.75 text-center" onClick={() => SetMenuOpen(false)}>Skills</a>
                    <a href="" className="hover:bg-[#7C3AED] rounded-full p-2 w-18.75 text-center" onClick={() => SetMenuOpen(false)}>Projects</a>
                    <a href="" className="hover:bg-[#7C3AED] rounded-full p-2 w-18.75 text-center" onClick={() => SetMenuOpen(false)}>Contacts</a>

                    <a href="/Devanarayanan_resume (4).pdf" target="_blank" className="text-white md:hidden flex w-fit items-center rounded-full border-2 border-white px-2 hover:text-[#7C3AED] hover:border-[#7C3AED]"><MdOutlineFileDownload /><p>Resume</p></a>
                </div>
            )
            }
        </>
    )

}

export default Navbar