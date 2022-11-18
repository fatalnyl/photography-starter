import React, { useState } from "react"
// import icons
import { IoMdClose } from "react-icons/io"
import { CgMenuRight } from "react-icons/cg"
// import Link
import { Link } from "react-router-dom"
// import motion
import { motion } from "framer-motion"

const MobileNav = () => {
  return (
    <nav>
      {/* nav open button */}
      <div className="text-3x1 cursor-pointer">
        <CgMenuRight />
      </div>

      {/*   top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */}
      {/* menu */}
      <div className="bg-white shadow-2x1 w-full absolute top-0 right-0 max-w-xs h-screen">
        {/* icon */}
        <div className="text-3xl flex absolute z-30 left-4 top-20 text-primary cursor-pointer">
          <IoMdClose />
        </div>
        <ul className="h-full  flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/portfolio"}>Portfolio</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default MobileNav
