'use client';
import Link from "next/link";
import React from "react";
import LogoImg from '../../../public/Images/Logo.jpeg'
import Image from "next/image";

export default function Header() {
 return (
  <>
    <header className="flex flex-col md:flex-row justify-between items-center p-4 md:p-6 lg:px-30 bg-amber-700 text-white">
      <Link href='/' className="flex items-center gap-2 md:gap-4 text-xl md:text-2xl lg:text-3xl font-bold text-amber-200 hover:text-amber-300"> 
        <Image 
          src={LogoImg} 
          alt="Logo Image" 
          className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-3xl" 
          priority
        />
        NextLevel Food
      </Link>
      <nav className="mt-4 md:mt-0 flex items-center">
        <ul className="text-base md:text-xl lg:text-2xl flex gap-4 md:gap-6 lg:gap-10">
          <li>
            <Link className="hover:text-amber-200 text-amber-100" href='../../meals'>
              Browse Meals
            </Link>
          </li>
          <li>
            <Link className="hover:text-amber-200 text-amber-100" href='../../Components/community'>
              Foodies Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  </>
);
};