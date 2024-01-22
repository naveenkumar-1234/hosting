import Image from "./assets/keyFeature.png";
import KeyCard from "./KeyFeatureComponent.jsx";
import Location from "./assets/Location.png";
import Calender from "./assets/Calender.png";
import Pin from "./assets/Pin.png";

const KeyFeature = () => {
  return (
    <div id="key_feature" className="lg:grid lg:grid-cols-2">
      <div className="lg:col-span-1 lg:order-2">
        <img
          src={Image}
          alt=""
          className="w-full pl-7 lg:p-0 "
        />
      </div>
      <div className="lg:col-span-1 flex flex-col items-center justify-center
      lg:items-start       ">
        <div className="text-[#fa86b7] uppercase font-semibold mt-8 text-center tracking-widest  lg:ml-24 lg:text-2xl">
          KEY FEATURES
        </div>
        <div className="font-normal py-3 text-3xl text-center px-2 lg:font-semibold
        lg:ml-24 lg:px-0
        ">
          We Offer best services
        </div>
        <div className="text-center px-7 text-gray-400 font-thin lg:text-xl
        lg:px-0 lg:ml-24 lg:text-left
        ">
          Contrary to popular belief, Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, porro?
        </div>
        <div className="flex flex-col lg:flex-row lg:flex-wrap items-center justify-center lg:my-3">
          <KeyCard
            Image={Location}
            Heading="We offer best services"
            Subheading="Lorem Ipsum is not the simply random text"
          />
          <KeyCard
            Image={Calender}
            Heading="Schedule your trip and get ticket"
            Subheading="Lorem Ipsum is not the simply random text"
          />
          <KeyCard
            Image={Pin}
            Heading="Get discounted coupons"
            Subheading="Lorem Ipsum is not the simply random text"
          />
        </div>
      </div>
    </div>
  );
};

export default KeyFeature;
