
import boat from "../assets/beach.png";
// import fish from "../assets/fish.png";
import sky from "../assets/sky.png";
import Grid from "./reusable/destinationTemplate.jsx"
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
      <div className="py-10 px-4 flex flex-col items-center xl:grid xl:grid-flow-col xl:gap-6 xl:justify-center
      xl:overflow-x-auto "> 
     
        <Grid picture={boat} price="$550.16" place="Paradise Beach, Bantayan Island" location="Rome, Italy" star="4.8"/>
        <Grid picture={sky} price="$550.16" place="Paradise Beach, Bantayan Island" location="Rome, Italy" star="4.8"/>
        <Grid picture={boat} price="$550.16" place="Paradise Beach, Bantayan Island" location="Rome, Italy" star="4.8"/>
        <Grid picture={boat} price="$550.16" place="Paradise Beach, Bantayan Island" location="Rome, Italy" star="4.8"/>
        <Grid picture={boat} price="$550.16" place="Paradise Beach, Bantayan Island" location="Rome, Italy" star="4.8"/>
        <Grid picture={boat} price="$550.16" place="Paradise Beach, Bantayan Island" location="Rome, Italy" star="4.8"/>
        
      </div>

    </div>
  )
}

export default destination