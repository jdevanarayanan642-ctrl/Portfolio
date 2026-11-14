import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";



const Footer = () =>{

    return(
        <>
            <div className="flex mt-20 justify-between px-4 md:px-10 py-5">
                <p className="md:text-[15px] text-[13px]">© 2026 Devanarayanan J. All rights reserved.</p>

                <div className="flex items-center gap-2 md:gap-5">
                    <a href=""><FaLinkedin className="size-5"/></a>
                    <a href=""><FaGithub className="size-5"/></a>
                    <a href=""><IoMail className="size-5"/></a>
                </div>
            </div>
        </>
    )

}

export default Footer