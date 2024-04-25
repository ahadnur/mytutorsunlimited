import React from "react";
import Link from "next/link";
import Image from "next/image";

import { LiaGripLinesVerticalSolid } from "react-icons/lia";

import { ImFacebook } from "react-icons/im";
import { BsTwitterX, BsLinkedin, BsInstagram } from "react-icons/bs";



function Footer() {
  const year = new Date();
  return (
    <footer className="relative border-t">
      <div >
        <div className="mx-auto text-center px-5 pt-10 ">
          <div className="text-4xl font-black">MTU</div>

          <div className="border-b py-6">

            {/* Social Icons */}
            <div className="flex justify-center items-center gap-5 mt-5">
              <Link href={`https://www.facebook.com/`} target="_blank">
                <div className="text-xl text-gray-900 bg-white border p-2 lg:p-4 rounded-lg  transition-all duration-300 highlight relative hover:bg-gray-100">
                  <ImFacebook />
                </div>
              </Link>

              <Link href={`https://www.facebook.com/`} target="_blank">
                <div className="text-xl text-gray-900 bg-white border p-2 lg:p-4 rounded-lg  transition-all duration-300 highlight relative hover:bg-gray-100">
                  <BsTwitterX />
                </div>
              </Link>
              <Link href={`https://www.facebook.com/`} target="_blank">
                <div className="text-xl text-gray-900 bg-white border p-2 lg:p-4 rounded-lg  transition-all duration-300 highlight relative hover:bg-gray-100">
                  <BsLinkedin />
                </div>
              </Link>
              <Link href={`https://www.facebook.com/`} target="_blank">
                <div className="text-xl text- bg-white border p-2 lg:p-4 rounded-lg  transition-all duration-300 highlight relative hover:bg-gray-100">
                  <BsInstagram />
                </div>
              </Link>
            </div>
          </div>
          <div className="py-3 flex flex-col-reverse sm:flex-row justify-center items-center gap-4 md:text-md text-gray-400 font-semibold">
            <span>&#169;{year.getFullYear()} My Tutors Online</span>
            <Link href={`/privacy`} className="hover:text-gray-800">
              Privace Policy
            </Link>
            <Link href={`/terms`} className="hover:text-gray-800">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;
