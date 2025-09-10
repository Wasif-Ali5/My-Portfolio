import React from "react"
import { useState } from "react"
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";


const Naavbar = () => {

    const [menu,setMenu] = useState(false);
    const [showMenu,setShowMenu]=useState(true);

  return (
    <nav  className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
        <span className='text-xl md:text-2xl font-bold Tracking-wide'>Portfolio</span>
         
          <ul
        className={`${
          menu ? "block" : "hidden"
        }     mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
         >
           <a href="#About">
            <li className="text-md transition-all p-1 md:p-0 hover:opacity-85  duration-300">About</li>
           </a>

           <a href="#Exp">
            <li className="text-md transition-all p-1 md:p-0 hover:opacity-85 duration-300 ">Experience</li>
            </a>

            <a href="#proj">
            <li className="text-md transition-all p-1 md:p-0 hover:opacity-85 duration-300 ">Projects</li>
            </a>

            < a href="#contact">
            <li className="text-md transition-all p-1 md:p-0 hover:opacity-85 duration-300 ">Contact</li>
            </a>

         </ul>

         {showMenu? 
            <RiMenu2Line 
            size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
               onClick={()=>{
                   setMenu(!menu);
                   setShowMenu(!showMenu);
               }}
            /> 
         :
         <RiCloseLine 
            size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
         />
         }

    </nav>
  )
}

export default Naavbar
