
const keycard = (props) => {
  return (
    <div className="flex flex-col border-2 rounded-3xl p-8 mx-5 my-5">
        <div><img src={props.Image} alt="/" /></div>
        <div className="">
            <h5 className="font-semibold text-2xl pt-6">{props.Heading}</h5>
            <p className="text-gray-500 text-lg pt-3 ">{props.Subheading}</p>
        </div>
    </div>
  )
}

export default keycard