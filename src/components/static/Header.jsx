import React from "react";
import Buttons from "../reusable/buttons"
import { AlignJustify } from 'lucide-react';
import { X } from 'lucide-react'; 


const Header = () => {
  return (
    <div className="max-w-[1028px] flex items-center max-[993px]:justify-between px-[0px] h-[80px] mx-auto">
          <img className="pr-2.5" src="src/assets/logo.svg" alt="Logo" />
        <nav className="flex lg:p-3 justify-between items-center w-full">
             <ul className="flex justify-between gap-5 max-[993px]:hidden">
                <li className="transition-all duration-500 ease-in-out transform hover:scale-150">
                   <a href="#" className="text-black">
                      Save
                   </a>
                </li>
                <li className="transition-all duration-500 ease-in-out transform hover:scale-150">
                   <a href="#" className="text-black">
                      Invest
                   </a>
                </li>
                <li className="transition-all duration-500 ease-in-out transform hover:scale-150">
                   <a href="#" className="text-black">
                      stories
                   </a>
                </li>
                <li className="transition-all duration-500 ease-in-out transform hover:scale-150">
                   <a href="#" className="text-black">
                      FAQs
                   </a>
                </li>
                <li className="transition-all duration-500 ease-in-out transform hover:scale-150">
                    <a href="#" className="text-black">
                      Resources
                   </a>
                </li>
             </ul>
             <div className="flex lg:hidden">
             </div>
             <div className="flex space-x-3 max-[993px]:hidden">
                      <Buttons className="transition-all duration-500 ease-in-out transform hover:scale-105 border border-black" label="Sign in" />
                      <Buttons className="transition-all duration-500 ease-in-out transform hover:scale-105 bg-black text-white" label="Create free account" />
             </div>
             <AlignJustify className="min-[993px]:hidden size-15" />
          </nav>

    </div>
  )
}

export default Header