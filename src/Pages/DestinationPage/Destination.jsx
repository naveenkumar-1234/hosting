import Slider from "./SliderComponent.jsx";
const destination = () => {
  return (
    <div className="overflow-x-hidden">
      <div className=" block text-center lg:col-span-1 lg:gap-5">
        <div className="text-[#fa86b7] uppercase font-semibold py-6
        xl:text-left lg:px-28 lg:py-7 xl:text-4xl lg:3xl lg:text-center lg:text-4xl  tracking-widest
        ">
          TOP DESTINATION
        </div>
        <div className="font-bold text-2xl
        xl:text-left lg:px-28  lg:text-6xl lg:text-center 
        ">
          Explore the top destination
         
        </div>
      </div>
      <Slider/>

    </div>
  )
}

export default destination