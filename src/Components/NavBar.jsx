import menuBar from "../assets/menuBar.svg";
import logo from "../assets/BrandLogo.png";

const NavBar = () => {
  const navbar=false;
  const Press=()=>{
   console.log(navbar);
  }
  return (
    <div className="mx-auto flex items-center px-4 py-9 justify-between lg:justify-between">
      <div className="flex align-center text-2xl">
        <img src={logo} alt="/" className="lg:w-14 " />
        <h5 className="font-poppins font-bold px-2 pt-1 lg:text-4xl">
          Travlog
        </h5>
      </div>
      <div className="   ">
        <ul className="hidden lg:flex ">
          <li className="text-xl px-7 font-semibold">Home</li>
          <li className="text-xl px-7">Discover</li>
          <li className="text-xl px-7">Special Deals</li>
          <li className="text-xl px-7">Contact</li>
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
      <div className="lg:hidden md:hidden  ">
        <img src={menuBar} alt="/" onClick={Press}/>
      </div>
    </div>
  );
};

export default NavBar;
