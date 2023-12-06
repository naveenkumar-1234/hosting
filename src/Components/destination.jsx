import boat from "../assets/beach.png";
import fish from "../assets/fish.png";
import sky from "../assets/sky.png";
const destination = () => {
  return (
    <div>
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
      <div className="py-10 px-4"> 
        <div className="border-2 rounded-3xl my-5 shadow-2xl  ">
            <div >
            <img src={boat} alt="/" /></div>
            <div className="px-5 py-6 ">
                <h5 className="text-[#f85e9f] text-lg font-bold">$550.16</h5>
                <p className="text-black text-xl font-bold">Paradise Beach, Bantayan Island</p>
                <p className="font-thin text-gray-500 py-4">Rome, Italy</p>
                <h6 className="text-[#ff5722] font-bold text-lg">4.8</h6>
            </div>
        </div>
        <div className="border-2 rounded-3xl my-5 shadow-2xl  ">
            <div >
            <img src={fish} alt="/" /></div>
            <div className="px-5 py-6 ">
                <h5 className="text-[#f85e9f] text-lg font-bold">$550.16</h5>
                <p className="text-black text-xl font-bold">Paradise Beach, Bantayan Island</p>
                <p className="font-thin text-gray-500 py-4">Rome, Italy</p>
                <h6 className="text-[#ff5722] font-bold text-lg">4.8</h6>
            </div>
        </div>
        <div className="border-2 rounded-3xl my-5 shadow-2xl  ">
            <div >
            <img src={sky} alt="/" /></div>
            <div className="px-5 py-6 ">
                <h5 className="text-[#f85e9f] text-lg font-bold">$550.16</h5>
                <p className="text-black text-xl font-bold">Paradise Beach, Bantayan Island</p>
                <p className="font-thin text-gray-500 py-4">Rome, Italy</p>
                <h6 className="text-[#ff5722] font-bold text-lg">4.8</h6>
            </div>
        </div>
      </div>

    </div>
  )
}

export default destination