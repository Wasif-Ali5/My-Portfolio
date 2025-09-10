import React from 'react'
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";


const Experience = () => {
  return (
    <div id="Exp" className="p-10 md:p-24">
        
        <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
     
      <div className="flex flex-wrap items-center justify-around">
       
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
         
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMysql color="#47A248" size={50} />
          </span>
          
           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCode color="#47A248" size={50} />
          </span>
        </div>
        
        <div>
          
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            
            <FaCode color="#4285F4" size={50} />
           
            <span className="text-white">
              
              <h2 className="leading-tight">DSA in C++</h2>
              
              
              <ul className="text-sm md:mt-3 mt-2 p-2">
                <li>- Work as a Team Leader</li>
                <li>- Solve real time problems</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <FaJs color="#E50914" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Javascript ES6+</h2>
              
              <ul className="text-sm md:mt-3 mt-2 p-2">
                <li>- Solve real time problems</li>
                <li>- Build resposive Projects</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <FaFigma color="#FF9900" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Figma Designer </h2>
             
              <ul className="text-sm md:mt-3 mt-2 p-2">
                <li>- Build responsive projects</li>
                <li>- Design good UI/UX</li>
              </ul>
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Experience
