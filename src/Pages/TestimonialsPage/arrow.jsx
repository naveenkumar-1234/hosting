const arrow = (props) => {
    const Image=props.Image;
  return (
    <div className=" justify-between my-6 mx-4 hidden">
          <img src={Image} alt="" className="  w-10 bg-gray-400 p-3 rounded-full scale-x-[-1]" />
          
          <img src={Image} alt="" className=" w-10 rounded-full p-3 bg-[#5d50c6]  "/>
        </div>
  )
}

export default arrow