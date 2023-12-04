import Arrow from "../assets/HomeArrow.png"
import imagegrid from "../assets/Frame 15.png"

const HomePage = () => {
  return (
    <div>
     <div className="relative flex justify-center"> 
        <img className="  h-auto w-full py-3" src={Arrow} alt="/" />
        <img className=" absolute mt-14 w-[70%]  py-3 " src={imagegrid} alt="/" />
        
     </div>
     <div className="">
        
     </div>
    </div>
  )
}

export default HomePage