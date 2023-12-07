import Image from "../assets/keyFeature.png";
import KeyCard from "./reusable/keycard.jsx";
import Location from "../assets/location.png";
import Calender from "../assets/calender.png";
import Pin from "../assets/pin.png";
const KeyFeature = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:mt-7">
      <div className="lg:col-span-1 lg:row-span-1 ">
        <img
          src={Image}
          alt=""
          className="w-full  pl-7 lg:h-auto md:h-auto h-auto md:w-full"
        />
      </div>
      <div className="lg:col-span-1 lg:row-span-1">
        {" "}
        <div>
          <div
            className="text-[#fa86b7] uppercase font-semibold mt-8 text-center tracking-widest 
        "
          >
            KEY FEATURES
          </div>
          <div
            className="font-normal py-5 text-3xl text-center px-2
        "
          >
            We Offer best services
          </div>
          <div className="text-center px-7 text-gray-400 font-thin">
            Contrary to popular belief, Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laudantium, porro?
          </div>
        </div>
        <div
          className="flex flex-col lg:flex-row lg:flex-wrap lg:px-20 lg:py-16
      md:flex-row md:flex-wrap md:items-center md:m-auto md:py-10 md:px-10
      "
        >
          <KeyCard
            Image={Location}
            Heading="We offer best services"
            Subheading="Lorem Ipsum is not the simply random text"
          />
          <KeyCard
            Image={Calender}
            Heading="We offer best services"
            Subheading="Lorem Ipsum is not the simply random text"
          />
          <KeyCard
            Image={Pin}
            Heading="We offer best services"
            Subheading="Lorem Ipsum is not the simply random text"
          />
        </div>
      </div>
    </div>
  );
};

export default KeyFeature;
