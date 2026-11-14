import React from "react";
import Navbar from "./Navbar";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNodejsFill } from "react-icons/ri";





const Hero = () =>{

    return(
        <>
            <div className="bg-[url('/mobilehero.png')] md:bg-[url('/hero.png')] bg-center bg-cover relative">
                <Navbar />

                <div className="flex items-center px-4 md:ps-15 h-[75vh]">
                    <div>
                        <h1 className="text-2xl md:text-4xl font-bold text-[#aa82ee]">Hi, I'm</h1>

                        <h1 className="text-3xl md:text-5xl font-bold text-[#cfc6df]">Devanarayanan <span className="text-[#7C3AED]">J</span></h1>

                        <h2 className="text-1xl md:text-2xl text-[#aa82ee] mt-3">Full Stack Developer</h2>

                        <p className="mt-5 text-1xl text-[#cfc6df]">I build modern, responsive and scalable web applications using MERN Stack</p>

                        <div className="flex gap-5 md:gap-8 mt-8">
                            <a href="" className="bg-[#7C3AED] rounded-full p-2 px-6 flex items-center gap-2"><span>View Projects</span><FaArrowRightLong /></a>
                            <a href="" className="border-2 border-white rounded-full px-6 p-2 flex items-center gap-2 text-[#cfc6df]"><span>Contact Me</span><MdEmail /></a>
                        </div>
                    </div>
                </div>

                <div className="bg-[#16092d] w-fit text-center p-5 rounded-2xl absolute bottom-0 md:right-10 md:bottom-8">
                    <h1>MERN Stack</h1>
                    <div className="flex gap-5 mt-4">
                        <DiMongodb className="md:size-11 size-9 text-green-500" />
                        <SiExpress className="md:size-11 size-9" />
                        <FaReact className="md:size-11 size-9 text-cyan-300"/>
                        <RiNodejsFill className="md:size-11 size-9 text-green-600" />
                    </div>
                </div>
            </div>
        </>
    )

}

export default Hero