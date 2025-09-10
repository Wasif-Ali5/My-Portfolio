import React from 'react'
import pic1 from '../../assets/pic3.jpg'
import pic2 from '../../assets/pic-2.jpg'




const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className='w-2/4 md:pt-20'>
         <h1 className='text-xl md:text-6xl font-bold flex leading-normal tracking-tighter'>Hi, I'm Wasif</h1>

        
     <p className='text-sm md:text-xl tracking-tighter'>Web developer in the making — curious mind, clean code.</p>
       <button  className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
        Contact me
      </button>
      </div>

      <div className='w-[600px] h-[350px] md:w-2/4 md:h-[500px] overflow-hidden justify-between'>
        <img className='w-full h-full object-contain bg-[#171d32]' src={pic1} alt="" />
      </div>
     

    </div>
  )
}

export default Home
