import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Hero = () =>{

    return(
        <>
            <div className="bg-[url('/hero.png')] bg-center bg-cover h-[75vh] flex items-center ps-15">
                <div>
                    <h1 className="text-4xl font-bold text-[#aa82ee]">Hi, I'm</h1>

                    <h1 className="text-5xl font-bold text-[#cfc6df]">Devanarayanan <span className="text-[#7C3AED]">J</span></h1>

                    <h2 className="text-2xl text-[#aa82ee] mt-3">Full Stack Developer</h2>

                    <p className="mt-5 text-1.7xl text-[#cfc6df]">I build modern, responsive and scalable web applications using MERN Stack</p>

                    <div className="flex gap-8 mt-8">
                        <a href="" className="bg-[#7C3AED] rounded-full p-2 px-6 flex items-center gap-2"><span>View Projects</span><FaArrowRightLong /></a>
                        <a href="" className="border-2 border-white rounded-full px-6 p-2 flex items-center gap-2 text-[#cfc6df]"><span>Contact Me</span><MdEmail /></a>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Hero