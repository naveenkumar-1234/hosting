
const serviceTemplate = (props) => {
  return (
    <div className="border-2  rounded-3xl flex flex-col items-center lg:flex-1 
        md:w-auto mx-auto
        ">
          <img src={props.Image} alt="/" className="w-20 py-7" />
          <h5 className="font-bold text-2xl">{props.heading}</h5>
          <p className="text-center px-6 py-8 ">{props.subheading}
          </p>
        </div>
  )
}

export default serviceTemplate