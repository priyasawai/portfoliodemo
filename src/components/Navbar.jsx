"use client"
import { useState } from "react"
import Link from "next/link"
import NavLink from "./NavLink"

const navLinks=[
    {
        title:"About",
        path:"#about"
    },
    {
        title:"Projects",
        path:"#projects"
    },
    {
        title:"Contact",
        path:"#contact"
    }
]
const Navbar=()=>{
    const [navbarOpen,setNavbarOpen]=useState(false)
    return(
        <nav className="fixed top-0 left-0 right-0 z-8 bg-[#121212] bg-opacity-80">
        <div className="flex flex-wrap items-center justify-between mx-auto ">
            <Link href={"/"} className=" text-2xl md:text-5xl text-white font-semibold">LOGO</Link>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row space-x-8">
                     {
                        navLinks.map((link,index)=>(
                            <li key={index}>
                               <NavLink href={link.path} title={link.title}/>
                            </li>
                        )

                        )
                     }
                </ul>
            </div>
        </div>
        </nav>
    )
}
export default Navbar