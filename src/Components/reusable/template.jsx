
const template = (props) => {
  return (
    <div className="border-2 rounded-3xl my-5 mx-4">
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