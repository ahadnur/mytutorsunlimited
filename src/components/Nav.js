import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

import { motion, AnimatePresence } from "framer-motion";

import { Poppins } from "next/font/google";

import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdCloseCircleOutline } from "react-icons/io";


const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

function Nav() {
  const [open, setOpen] = useState(false);
  const showMenu = () => {
    // console.log(open);
    setOpen(!open);
  };

  const menuVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0, 0, 0, 0],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <nav
      className={`navbar ${poppins.className}`}
    >
      <div className="logo">
        <Link aria-label="Go to home" href={`/`} className="text-2xl font-black">
          {/* <Image
            src={logo}
            alt="Psylab"
            height={150}
            width={150}
            className="hidden md:block"
          /> */}
          MTU
        </Link>
        <Link aria-label="Go to home" href={`/`}>
          {/* <Image
            src={mobileLogo}
            alt="Psylab"
            width={40}
            className="block md:hidden"
          /> */}
        </Link>
      </div>

      {/* desktop links */}
      <div className="links hidden lg:block text-heading-color">
        <ul className="flex justify-center items-center gap-5">
          <li className="text-lg hover:text-blue-600 list-none">
            <Link href="/" aria-label="Check our services">Home</Link>
          </li>
          <li className="text-lg hover:text-blue-600 list-none">
            <Link href="/#register" aria-label="Check our projects">Register</Link>
          </li>
          <li className="text-lg hover:text-blue-600 list-none">
            <Link href="/#course" aria-label="Go to about">Course</Link>
          </li>
          
          <li className="text-lg hover:text-blue-600 list-none">
            <Link href="/resources" aria-label="Check our courses">Resources</Link>
          </li>
        </ul>
      </div>

      {/* Mobile links */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="bg-blur absolute bg-white shadow-2xl rounded-lg w-3/4 mx-auto  right-1/2 translate-x-1/2 top-20 py-10 z-50"
          >
            <div className="">
              <ul className="flex justify-center items-center flex-col gap-5 text-center text-heading-color">
                <li className="text-lg hover:text-blue-600 list-none" onClick={showMenu}>
                  <Link href="/#home" aria-label="Check our services">Home</Link>
                </li>
                <li className="text-lg hover:text-blue-600 list-none" onClick={showMenu}>
                  <Link href="/#course" aria-label="Courses">Course</Link>
                </li>
                <li className=" text-lg hover:text-blue-600 list-none" onClick={showMenu}>
                  <Link href="/#aboutUs" aria-label="About Us">Resourses</Link>
                </li>
                <li className="text-lg hover:text-blue-600 list-none" onClick={showMenu}>
                  <Link href="/#register" aria-label="Register">Register</Link>
                </li>
                
                <li className="ctaButton mt-5 text-lg hover:text-blue-600 list-none" onClick={showMenu}>
                  <Link href="/#contact" aria-label="Contact Us">Contact Us</Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      <div className="ctaButton rounded-full bg-none font-light hidden lg:block hover:text-blue-600 transition-colors duration-300 ease-in-out">
        <Button><Link href="/#contact" aria-label="Contact Us">Contact</Link></Button>
      </div>
      <div className="ham visible lg:hidden cursor-pointer" onClick={showMenu}>
        {!open ? (
          <HiMenuAlt3 className="h-8 w-8 text-heading-color" />
        ) : (
          <IoMdCloseCircleOutline className="h-8 w-8 text-heading-color" />
        )}
      </div>
    </nav>
  );
}

export default Nav;