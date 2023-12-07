import travelImage from "../assets/Home.png";
import bag from "../assets/bag.png";

const HomePage = () => {
  return (
    <div className=" grid lg:grid-flow-col lg:grid-cols-2 xl:px-4 lg:gap-5 ">
      <div className="lg:order-last">
        <img src={travelImage} alt="/" className="w-full lg:" />
      </div>
      <div className="lg:order-1">
        <div className="flex justify-center  lg:mt-24 lg:justify-start lg:pl-24">
          <h3
            className="text-[#f85e9f] font-semibold px-2 
        "
          >
            Explore the world!{" "}
          </h3>
          <img className=" h-auto" src={bag} alt="" />{" "}
        </div>
        <div className="flex flex-col">
          <div
            className="font-extrabold text-4xl text-center py-5
          xl:text-7xl lg:text-left lg:px-24 lg:leading-tight 
          md:px-24 md:text-6xl 
          lg:text-5xl 
          
          
          "
          >
            Travel <span className="text-[#f85e9f] ">top destination</span> of
            the world
          </div>
          <div
            className="text-sm text-center text-[#8b8a91] px-4
        lg:text-lg lg:px-24 lg:text-left lg:py-5
        md:px-44 md:py-6 md:text-lg 
        2xl:text-2xl
        "
          >
            We always make our customer happy as providing as many choices as
            possible
          </div>
          <div
            className="flex flex-col px-2 py-2
        lg:flex-row lg:px-24
        md:flex-row md:px-56  xl:text-xl
        "
          >
            <button
              className="rounded-full  bg-[#5d50c6] text-white py-4
          shadow-2xl
           lg:w-1/2
          md:w-1/2 md:py-1 
          "
            >
              Get Started
            </button>
            <button
              className="rounded-full border-2 text-black 
          mt-6 py-4
          lg:w-1/2 lg:mt-0 
          md:w-1/2 md:mt-0 
          
          "
            >
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
