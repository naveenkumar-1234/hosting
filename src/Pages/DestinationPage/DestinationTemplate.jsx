const destinationTemplate = (props) => {
  return (
    <div className="border-2 rounded-[2.5rem]   w-fit min-w-[300px] lg:min-h-[500px] m-5">
            <div >
            <img src={props.picture} alt="/" className="lg:h-auto"/></div>
            <div className="px-5 py-6  ">
                <h5 className="text-[#f85e9f] text-lg font-bold">{props.price}</h5>
                <p className="text-black text-xl font-bold">{props.place}</p>
                <p className="font-thin text-gray-500 py-4">{props.location}</p>
                <h6 className="text-[#ff5722] font-bold text-lg">{props.star}</h6>
            </div>
        </div>
  )
}

export default destinationTemplate