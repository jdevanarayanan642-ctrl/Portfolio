import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Cards = () =>{

  const cards = [
    {
      image : "/djfurnitures.png",
      title : "DJ Furnitures",
      description : "A modern furniture website with stylish design and smooth UI.",
      link : "https://jdevanarayanan642-ctrl.github.io/dj-furnitures/",
      git : "https://github.com/jdevanarayanan642-ctrl/dj-furnitures.git"
    },
    {
      image : "/nrithya.png",
      title : "Nrithya",
      description : "A beautiful classical dance academy website featuring an elegant, user-friendly UI.",
      link : "https://jdevanarayanan642-ctrl.github.io/nrithya/",
      git : "https://github.com/jdevanarayanan642-ctrl/nrithya.git"
    },
    {
      image : "/skfarms.png",
      title : "SK Farms",
      description : "A simple website showcasing dairy products and sustainable farming.",
      link : "https://jdevanarayanan642-ctrl.github.io/sk-farms/",
      git : "https://github.com/jdevanarayanan642-ctrl/sk-farms.git"
    }
  ]

  return(
    <>
      <div>
        <h1 className="text-3xl font-bold text-center mt-13">My <span className="text-[#7C3AED]">Projects</span></h1>

        <div className="flex justify-between gap-8 mt-10 px-10">
          

          {cards.map((item)=>(
              <div key={item.title} className=" bg-[#1b0a39] p-5 rounded-2xl flex flex-col gap-4 hover:scale-105 duration-300 ease-in-out transition-transform">
                <img src={item.image} alt="" />
                <h1 className="font-bold text-2xl">{item.title}</h1>
                <p>{item.description}</p>
                <div className="flex items-center justify-between px-4 mt-auto">
                  <a href={item.link} target="_blank" className="flex items-center bg-[#7C3AED] p-2 rounded-3xl px-5 gap-2"><span>Live Demo</span><FaExternalLinkAlt /></a>
                  <a href={item.git} target="_blank" className="flex items-center border-2 border-white p-2 rounded-3xl px-5 gap-2"><span>GitHub</span><FaGithub /></a>
                </div>
              </div>
          ))}
         
          
        </div>
      </div>
    </>
  )

}


export default Cards