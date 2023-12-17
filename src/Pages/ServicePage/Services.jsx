import World from "./assets/C1.png";
import Mobile from "./assets/C2.png";
import Weather from "./assets/c3.png";
import Template from "./ServiceTemplate.jsx"
const Services = () => {
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
        <Template Image={World} heading="Best Tour Guid" subheading="What looked like a small patch of purple grass, above five feet."/>
        <Template Image={Mobile} heading="Easy booking" subheading="What looked like a small patch of purple grass, above five feet." />
        <Template Image={Weather} heading="Weather Shine" subheading="What look like a small patch of purple grass, above the five feet." />
        
        
      </div>
    </div>
  );
};

export default Services;
