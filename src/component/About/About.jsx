import React from 'react'
import img1 from '../../assets/img1.jpg'
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div id='About' className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 md:mt-10 mt-5 md:my-20 bg-opacity-30 rounded-lg p-12"
     >

        <div>
            <div>
                <h2 className="text-2xl md:text-4xl font-bold">About</h2>

                <div className="md:flex flex-wrap flex-col md:flex-row items-center">
                    <img className='mt-5 md:mt-10 md:h-80' src={img1} alt="" />
                    <ul>
                        <div className="flex gap-3 md:gap-2 md:px-3 px-2  py-4">
                            <IoArrowForward size={30} className='mt-1'/>
                            <span className='w-96'>
                                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                                    React Developer
                                </h1>
                                <p className="text-sm md:text-md leading-tight">
                                    Crafting seamless user experiences one component at a time with React.
                                </p>
                            </span>
                        </div>

                        <div className="flex gap-3 md:gap-2 md:px-3 px-2 py-4">
                            <IoArrowForward size={30} className='mt-1'/>
                            <span className='w-96'>
                                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                                    Web Developer
                                </h1>
                                <p className="text-sm md:text-md leading-tight">
                                    Building the modern web from pixels to performance, one line of code at a time.
                                </p>
                            </span>
                        </div>

                        <div className="flex gap-3 md:gap-2 md:px-3 px-2  py-4">
                            <IoArrowForward size={30} className='mt-1'/>
                            <span className='w-96'>
                                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                                    UI/UX
                                </h1>
                                <p className="text-sm md:text-md leading-tight">
                                   Designing intuitive experiences and pixel-perfect interfaces that users love — all starting in Figma.
                                </p>
                            </span>
                        </div>
                    </ul>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default About
