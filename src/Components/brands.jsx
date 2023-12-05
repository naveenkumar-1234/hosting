import B1 from "../assets/b1.png"
import B2 from "../assets/b2.png"
import B3 from "../assets/b3.png"
import B4 from "../assets/b4.png"
import B5 from "../assets/b5.png"

const brands = () => {
  return (
    <div className="flex flex-wrap justify-between">
  <img src={B1} alt="/" className="w-1/3 p-4" />
  <img src={B2} alt="/" className="w-1/3 p-4" />
  <img src={B3} alt="/" className="w-1/3 p-4" />
  <img src={B4} alt="/" className="w-1/2 p-4" />
  <img src={B5} alt="/" className="w-1/2 p-4" />
</div>

  )
}

export default brands