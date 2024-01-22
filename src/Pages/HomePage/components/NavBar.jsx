import MenuIcon from "../assets/MenuIcon.svg";
import Logo from "../assets/BrandLogo.png";
import MenuCloseIcon from "../assets/Close.png";
import { Link } from "react-scroll";
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPhone,
  faCompass,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [isPressed, setIcon] = useState(false);
  // const drawerRef = useRef(null);
  const Press = () => {
    console.log("clicked");
    setIcon(!isPressed);
  };
  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     console.log("useeffect ran")
  //     if (drawerRef.current && !drawerRef.current.contains(e.target)) {
  //       setIcon(false);
  //     }
  //   };
  //   if (isPressed) {
  //     document.addEventListener("click", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);
  useEffect(() => {
    if (isPressed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isPressed]);

  return (
    <div className="mx-auto flex items-center px-4 py-9 justify-between lg:justify-between relative">
      <div className="flex align-center text-2xl  ">
        <img src={Logo} alt="/" className="lg:w-14 pointer-events-none  " />
        <h5 className="font-poppins font-bold px-2 pt-1 lg:text-4xl">
          Travlog
        </h5>
      </div>
      <div className="   ">
        <ul className={` lg:flex  hidden cursor-pointer `}>
          <li
            className="lg:text-xl lg:px-7  font-semibold
          hover:bg-[#6d48b2] rounded-3xl transform duration-300
            hover:text-white hover: lg:py-2
          "
          >
            Home
          </li>
          <Link to="service" smooth={true} duration={1000} >
          <li
            className="lg:text-xl lg:px-7 hover:bg-[#6d48b2] rounded-3xl transform duration-300
            hover:text-white hover: lg:py-2 "
          >
            Discover
          </li></Link>
          <Link to="key_feature" smooth={true} duration={1500}>
          <li
            className="lg:text-xl lg:px-7 hover:bg-[#6d48b2] rounded-3xl transform duration-300
            hover:text-white hover: lg:py-2"
          >
            Special Deals
          </li></Link>
          <Link to="test" smooth={true} duration={2000}>
          <li
            className="lg:text-xl lg:px-7 hover:bg-[#6d48b2] rounded-3xl transform duration-300
            hover:text-white hover: lg:py-2"
          >
            Contact
          </li></Link>
        </ul>
      </div>
      <div className="hidden md:flex ">
        <button className="lg:px-6 text-lg md:px-6 md:text-base lg:text-lg border-2 rounded-3xl  " >
          Log in
        </button>
        <button
          className="lg:px-5 
        xl:py-3
        md:py-2 md:px-4 md:text-base  rounded-full bg-[#6d48b2] py-3 text-lg text-white "
        >
          Sign Up
        </button>
      </div>
      <div className="lg:hidden md:hidden  " onClick={Press}>
        {isPressed ? (
          <img src={MenuCloseIcon} className="w-10" alt="/" />
        ) : (
          <img src={MenuIcon} alt="/" />
        )}
      </div>
      <div
        // ref={drawerRef}
        className={` ${
          isPressed ? "visible " : "hidden"
        } absolute left-0 top-0  h-screen w-[70%]
      md:hidden lg:hidden xl:hidden 
      bg-gray-50 `}
      >
        <div className="py-7 px-7">
          <div className="flex align-center text-2xl  ">
            <img src={Logo} alt="/" className="lg:w-14 pointer-events-none  " />
            <h5 className="font-poppins font-bold px-2 pt-1 lg:text-4xl">
              Travlog
            </h5>
          </div>
          <ul className="text-xl mt-9 font-semibold text-black space-y-5   ">
            <li className="">
              <FontAwesomeIcon icon={faHome} color="#f85e9f" />
              <span>  Home</span>
            </li>
            <li className="">
              <FontAwesomeIcon
                icon={faCompass}
                color="#f85e9f"
                className="mr-1 "
              />
              <span>  Discover</span>
            </li>
            <li className="">
              <FontAwesomeIcon icon={faShoppingBag} color="#f85e9f" />
                <span>  Special Deals</span>
            </li>
            <li className="">
              <FontAwesomeIcon icon={faPhone} color="#f85e9f" />
              <span>  Contact</span>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className={`${isPressed? 'visible': 'hidden'} absolute z-10 bg-black w-full h-screen`}></div> */}
    </div>
  );
};

export default NavBar;
