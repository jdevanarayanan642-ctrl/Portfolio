import React from "react";
import { IoRocketSharp } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPython } from "react-icons/fa";


const Aboutme = () =>{


    const data = [
        {
            logo : <FaHtml5 className="size-14  text-orange-600" />,
            skill : "HTML"
        },
        {
            logo : <FaCss3Alt className="size-14 text-blue-600" />,
            skill : "CSS"
        },
        {
            logo : <IoLogoJavascript className="size-14 text-amber-300" />,
            skill : "JavaScript"
        },
        {
            logo : <FaReact className="size-14 text-cyan-300" />,
            skill : "React"
        },
        {
            logo : <RiTailwindCssFill className="size-14 text-cyan-300" />,
            skill : "Tailwind CSS"
        },
        {
            logo : <FaBootstrap className="size-14 text-violet-600" />,
            skill : "Bootstrap"
        },
        {
            logo : <FaGithub className="size-14" />,
            skill : "GitHub"
        },
        {
            logo : <FaPython className="size-14 text-amber-300" />,
            skill : "Python"
        }
    ]

    return(
        <>
            <div className="mt-15 flex justify-center gap-20 md:flex-row flex-col items-center">
                <img src="/aboutmesection.jpg" className="w-70 md:h-55 rounded-2xl" alt="" />

                <div className="md:w-100 px-10 md:px-0">
                    <h1 className="text-3xl font-bold">About <span className="text-[#7C3AED]">Me</span></h1>
                    <p className="md:w-100 mt-5 text-1xl  text-[#cfc6df]">I'm a passionate Full Stack Developer with a strong interest in building innovative web applications.I enjoy turning ideas into real-world solutions and constantly learning new technologies to improve my skills.</p>
                    <div className="text-[#7C3AED] flex items-center gap-3 mt-5"><IoRocketSharp /><p>Let's build something amazing together!</p></div>
                </div>
            </div>

            <div className="my-skills">
                <h1 className="text-3xl font-bold text-center mt-13">My <span className="text-[#7C3AED] ">Skills</span></h1>

                <div className="cardz flex flex-wrap md:flex-nowrap justify-center gap-15 mt-14">

                    {data.map((item)=>(
                        
                            <div key={item.skill} className="flex flex-col gap-5 items-center bg-[#1b0a39] px-7 py-3 rounded-sm w-30 md:w-30">
                                <p>{item.logo}</p>
                                <p>{item.skill}</p>
                            </div>
                        
                    ))}


                </div>
            </div>
        </>
    )

}

export default Aboutme