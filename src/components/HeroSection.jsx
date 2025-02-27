"use client"
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection=()=>{
    return(
        <>
       <section>
       <div className="grid grid-cols-1 lg:grid-cols-12">
       <div className="col-span-7 place-self-center text-center sm:text-left">
       <h1 className="text-white mt-4 text-4xl font-extrabold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">Hello,I am {""}</span>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Priyanka',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Front Developer',
        1000,
        'Backend Developer',
        1000,
        'Mern Stack Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
       </h1>
        <p className="text-[#ADB7BE]  lg:text-xl mb-6 text-base sm:text-lg mt-4">vgsfcghfh shgfhdgfhdgfh hdgfhdgh</p>
        <div>
            <button  className="px-6 py-3  w-full sm:w-fit rounded-full mr-4
            bg-white hover:bg-slate-200 text-black bg-gradient-to-br from-blue-500 via-purple-500 
            to-pink-600">Hire Me</button>
            <button className="px-1 py-1 rounded-full sm:w-fit w-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-600
            bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full
            px-5 py-2">Download CV</span></button>
        </div>
       </div>

       <div className="col-span-5 place-self-center mt-4 lg:mt-0">
       <div className="rounded-full mx-4 mt-14 pt-4 bg-[#181818] w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] relative">
       <Image src="/images/hero-image.jpeg" width={300}
            height={300} alt="hero image" className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2
            left-1/2 rounded-full "
        />
       </div>
       </div>
       </div>
       </section>
        </>
    )
}
export default HeroSection;