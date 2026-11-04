import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";





const Contact = () =>{

    const media = [
        {
            icon : <MdEmail className="size-12 text-[#7C3AED]"/> ,
            platform : "Email" ,
            id : "jdevanarayanan531@gmail.com"
        },
        {
            icon : <FaLinkedin className="size-12 text-[#6522d9]"/>,
            platform : "LinkedIn" ,
            id :"/devanarayanan-j",
        },
        {
            icon : <FaGithub className="size-12"/>,
            platform :"GitHub",
            id : "jdevanarayanan642-ctrl"
        }
    ]

    return(
        <>
            <h1 className="text-3xl font-bold text-center mt-13" >Get <span className="text-[#7C3AED]">In Touch</span></h1>
            <div className="mt-20 flex justify-between px-30">
                <div className=" flex flex-col gap-6">
                    <h1 className="text-3xl font-bold">Let's Connect!</h1>
                    <p>Feel free to reach out for collaborations,oppurtunities or just a friendly hello.</p>
                    <a href="" className="w-fit flex items-center bg-[#7C3AED] p-2 rounded-3xl px-3 gap-2"><MdEmail /><span>Drop me an Email</span></a>
                </div>

                <div className="border-l-2 border-[#7C3AED]"></div>

                <div className="flex gap-10">
                    {media.map((item)=>(
                                <div key={item.platform} className="flex flex-col items-center">
                                    <div>{item.icon}</div>
                                    <p>{item.platform}</p>
                                    <p>{item.id}</p>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </>
    )

}

export default Contact