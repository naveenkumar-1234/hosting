
const keycard = (props) => {
  return (
    <div className="flex flex-col border-2 rounded-3xl p-8  lg:w-4/5 my-2 mx-4 lg:mx-0 lg:my-4 lg:flex-row">
        <div><img src={props.Image} alt="/" /></div>
        <div className="lg:pl-6">
            <h5 className="font-semibold text-[1.35rem] pt-6 lg:text-2xl lg:pt-4">{props.Heading}</h5>
            <p className="text-gray-500 text-lg pt-3 lg:text-xl">{props.Subheading}</p>
        </div>
    </div>
  )
}

export default keycard