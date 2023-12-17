
const template = (props) => {
  return (
    <div className="border-2 rounded-3xl my-2 mx-4  lg:my-0 lg:mx-0 lg:gap-4 lg:w-1/2
    md:w-1/2 md:m-0  
    ">
        <div className="text-[#ff5722] font-bold text-4xl text-center pt-6 pb-5">
            {props.Amount}
        </div>
    <div className="text-center pb-7 text-lg">
        {props.Package}
    </div>
    </div>
  )
}

export default template