import Email from "./assets/message.png"
import RDesign from "./assets/butterflydesign.png"
import DotDesign from "./assets/dotdesign.png"
const subscribe = () => {
  return (
    <div className='relative flex justify-center py-5 bg-[#fffbf0]  rounded-3xl  lg:mx-24 lg:py-24'><div><h3
    className="text-[#f85e9f]  font-medium uppercase text-center 
    text-xl lg:text-2xl
    "
    >Subscribe to our newsletter</h3>
    <p className="text-2xl font-semibold py-4 text-center px-9
    lg:text-4xl 
    ">Prepare yourself & lets explore the 
    <br className=""/>beauty of the world</p>
    <div className="w-full">
        <div className="flex flex-col lg:px-0 lg:flex-row px-7"><div className="border-2 flex rounded-3xl lg:w-3/5
        py-4 px-3 lg:m-0 
        " ><img src={Email} alt="" /><input type="text" placeholder="  Your Email"
        className="bg-[#fffbf0] outline-none pl-2"
        /></div>
        <button className="border-2 rounded-3xl py-5 px-3 mt-4 bg-[#5d50c6] lg:mt-0 text-white lg:w-2/5 lg:ml-5">Subscribe</button>
        </div>
    </div>
    </div>
    <img src={DotDesign} alt="" className='
      
    absolute lg:left-[0] lg:top-[0] hidden sm:block md:right-[10000px] lg:block'/>
    <img src={RDesign} alt="" className='absolute lg:bottom-[-40%] lg:right-0 right-[1000px]'/>
    </div>
  )
}

export default subscribe