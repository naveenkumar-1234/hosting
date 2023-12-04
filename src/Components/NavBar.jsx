import menuBar from "../assets/menuBar.svg";
import logo from "../assets/BrandLogo.png";

const NavBar = () => {
  return (
    <div className="mx-auto flex items-center px-4 py-9 justify-between lg:justify-between">
      <div className="flex align-center text-2xl">
        <img src={logo} alt="/" className="lg:w-14 " />
        <h5 className="font-poppins font-bold px-2 pt-1 lg:text-4xl">
          Travlog
        </h5>
      </div>
      <div className="   ">
        <ul className="hidden lg:flex space-x-4">
          <li className="text-xl px-10 font-semibold">Home</li>
          <li className="text-xl px-10">Discover</li>
          <li className="text-xl px-10">Special Deals</li>
          <li className="text-xl px-10">Contact</li>
        </ul>
      </div>
      <div className="hidden md:flex ">
        <button className="lg:px-6 text-lg">Log in</button>
        <button className="lg:px-5 rounded-full bg-[#6d48b2] py-3 text-lg text-white">
          Sign Up
        </button>
      </div>
     <div className="lg:hidden md:hidden">
        <img src={menuBar} alt="/" />
      </div>
    </div>
  );
};

export default NavBar;
