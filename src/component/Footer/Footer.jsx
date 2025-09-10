import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div id='contact' className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center">

        <div>
            <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
            <h3 className="text-sm md:text-2xl font-normal">Feel Free to reach!</h3>

        </div>

       <ul className='text-sm md:text-xl'>
        <a href="mailto:wasif.raazaa@example.com">
        <li className="flex gap-1 items-center">
            <MdOutlineEmail size={20} />
            wasif.raazaa@gmail.com
        </li>
        </a>

        <a href="https://www.linkedin.com/in/wasif-raza-3a1174371">
        <li className="flex gap-1 items-center">
            <CiLinkedin />
            linkedin.com/in/wasif-raza-3a1174371
        </li>
        </a>

         <a href="https://github.com/wasif-ali5">
        <li className="flex gap-1 items-center">
            <FaGithub />
            github.com/wasif-ali5
        </li>
        </a>

       </ul>
      
    </div>
  )
}

export default Footer
