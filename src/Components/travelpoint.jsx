import travelimg from "../assets/travel.png"
import Template from "./reusable/template.jsx"
const travelpoint = () => {
  return (
    <div>
      <div><img src={travelimg} alt="" /></div>
      <div>
      <div className="text-[#fa86b7] uppercase font-semibold mt-8 text-center tracking-widest 
        ">
          TRAVEL POINT
        </div>
    <div className="font-normal py-5 text-3xl text-center px-2
        ">
          We helping you find your dream location 
        </div>
        <div className="text-center px-7 text-gray-400 font-thin">
            Contrary to popular belief, Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, porro?
        </div>
      </div>
     <Template Amount="500+" Package="Holiday Package"/>
     <Template Amount="100" Package="Luxury Hotel"/>
     <Template Amount="7" Package="Premium Airlines"/>
     <Template Amount="2k+" Package="Happy Customer"/>
    </div>
  )
}

export default travelpoint