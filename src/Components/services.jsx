import world from "../assets/C1.png";
import mobile from "../assets/C2.png";
import weather from "../assets/c3.png";
const services = () => {
  return (
    <div className="xl:grid lg:grid-cols-2">
      <div className=" block text-center lg:col-span-1 lg:gap-5">
        <div className="text-[#fa86b7] uppercase font-semibold py-6
        xl:text-left lg:px-28 lg:py-7 xl:text-4xl lg:3xl lg:text-center lg:text-4xl 
        ">
          Services
        </div>
        <div className="font-bold text-2xl
        xl:text-left lg:px-28  lg:text-6xl lg:text-center
        ">
          Our top value categories for you
        </div>
      </div>
      <div className="cards grid grid-cols-1  gap-5 px-3 py-5 lg:flex lg:   ">
        <div className="border-2  rounded-3xl flex flex-col items-center lg:flex-1 
        md:w-auto mx-auto
        ">
          <img src={world} alt="/" className="w-20 py-7" />
          <h5 className="font-bold text-2xl">Best Tour Guide</h5>
          <p className="text-center px-6 py-8 ">
            What looked like a small patch of purple grass, above five feet.
          </p>
        </div>
        <div className="border-2  rounded-3xl flex flex-col items-center
        lg:shadow-2xl lg:flex-1 md:w-auto mx-auto
        ">
          <img src={mobile} alt="/" className="w-20 py-7" />
          <h5 className="font-bold text-2xl">Easy Booking</h5>
          <p className="text-center px-6 py-8">
            Square, was moving across the sand and in their direction.
          </p>
        </div>
        <div className="border-2  rounded-3xl flex flex-col 
        md:w-auto mx-auto
        items-center lg:flex-1">
          <img src={weather} alt="/" className="w-20 py-7" />
          <h5 className="font-bold text-2xl lg:rtext-center xl:text-center">Weather Forecast</h5>
          <p className="text-center px-6 py-8">
            What look like a small patch of purple grass, above the five feet.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default services;
