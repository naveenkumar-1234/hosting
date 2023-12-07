import menuBar from "../assets/menuBar.svg";
import logo from "../assets/BrandLogo.png";
import close from "../assets/close.png";
import { useState } from "react";
import { useRef, useEffect } from "react";
const NavBar = () => {
  const [isPressed, setIcon] = useState(false);

  const drawerRef = useRef(null);

  // useEffect(() => {
  //   const handout = (e) => {
  //     if (drawerRef.current && !drawerRef.current.contains(e.target)) {
  //       setIcon(false);
        
  //     }
  //   };
   
  //   document.addEventListener("click", handout);
  //   return () => {
  //     document.removeEventListener("click", handout);
  //   };
  // },[]);

  const Press = () => {
    setIcon(!isPressed)
  };
  return (
    <div className="mx-auto flex items-center px-4 py-9 justify-between lg:justify-between relative">
      <div className="flex align-center text-2xl">
        <img src={logo} alt="/" className="lg:w-14 " />
        <h5 className="font-poppins font-bold px-2 pt-1 lg:text-4xl">
          Travlog
        </h5>
      </div>
      <div className="   ">
        <ul className={` lg:flex  hidden`}>
          <li className="lg:text-xl lg:px-7  font-semibold">Home</li>
          <li className="lg:text-xl lg:px-7">Discover</li>
          <li className="lg:text-xl lg:px-7">Special Deals</li>
          <li className="lg:text-xl lg:px-7">Contact</li>
        </ul>
      </div>
      <div className="hidden md:flex ">
        <button className="lg:px-6 text-lg md:px-6 md:text-base">Log in</button>
        <button
          className="lg:px-5 
        xl:py-3
        md:py-2 md:px-4 md:text-base  rounded-full bg-[#6d48b2] py-3 text-lg text-white"
        >
          Sign Up
        </button>
      </div>
      <div className="lg:hidden md:hidden  " onClick={Press}>
        {isPressed ? (
          <img src={close} className="w-10" alt="/" />
        ) : (
          <img src={menuBar} alt="/" />
        )}
      </div>
      <div
        ref={drawerRef}
        className={`transform transition-transform ${
          isPressed ? "visible " : "hidden"
        } absolute left-0 top-0  h-screen w-1/2
      
      bg-gray-200 bg-opacity-50 `}
      >
        <div className="py-7 px-7">
          <ul className="text-xl mt-9 font-semibold text-black">
            <li className="py-4 ">Home</li>
            <li className="pb-4">Discover</li>
            <li className="pb-4">Special Deals</li>
            <li className="pb-4">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
