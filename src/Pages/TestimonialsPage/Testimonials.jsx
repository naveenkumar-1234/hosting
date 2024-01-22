import Avatar from "./assets/Avatar.png"
import Arrow from "./assets/Arrow.png"
import ArrowCom from "./arrow.jsx"
// import Bg from "../assets/BgImg.png"
const Testimonials = () => {
  return (
    <div  className="relative">
      <div className="flex flex-col ">
        <h3 className="text-[#fa86b7] uppercase text-center font-medium text-xl py-4 lg:text-3xl">Testimonials</h3>
        <p className="text-center text-3xl font-semibold lg:text-4xl"> Trust our clients</p>
      </div>
      <div className="">
        <img src={Avatar} alt=""  className="my-12 mx-auto lg:w-1/12"/>
        <div className=" justify-between hidden">
          <img src={Arrow} alt="" className="  w-10 bg-black rounded-full scale-x-[-1]" />
          
          <img src={Arrow} alt="" className=" w-10 rounded-full bg-[#5d50c6]  "/>
        </div>
        <div ><h3 className="text-[1.35rem]  px-3 font-semibold text-center text-[#53525c] lg:text-3xl">
            <span className="text-[#ff5722]">Mark Smith</span> / Travel Enthusiast
          </h3></div>
      </div>
      <div className="text-gray-500 text-center py-6 px-3 lg:text-2xl lg:px-36">Contary is popular belief , Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet assumenda quam nobis error optio tenetur Lorem ipsum dolor sit amet.?</div>
      <ArrowCom Image={Arrow}/>
      {/* <img src={Bg} alt="" className="absolute inset-0 mx-auto " /> */}
    </div>
    
  );
};

export default Testimonials;
