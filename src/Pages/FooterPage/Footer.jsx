import Logo from "./assets/BrandLogo.png";
import Facebook from "./assets/FB.png";
import Twitter from "./assets/TW.png";
import Instagram from "./assets/IG.png";
import arrow from "./assets/arrow.png";
import { useState } from "react";
const Footer = () => {
   const [isVisible,SetVisible]=useState(false)
   const toggle=()=>{
    if(isVisible2){
      SetVisible2(!isVisible2);
    }
    if(isVisible3){
      setVisible3(!isVisible3)
    }
    SetVisible(!isVisible)
   }
   const [isVisible2,SetVisible2]=useState(false)
   const toggle2=()=>{
    if(isVisible){
      SetVisible(!isVisible);
    }
    if(isVisible3){
      setVisible3(!isVisible3)
    }
    SetVisible2(!isVisible2)
   }
   const [isVisible3,setVisible3]=useState(false)
   const toggle3=()=>{
    if(isVisible){
      SetVisible(!isVisible);
    }
    if(isVisible2){
      SetVisible2(!isVisible2)
    }
    setVisible3(!isVisible3)
   }

  return (
    <div className="lg:flex  py-6 rounded-tl-3xl rounded-tr-3xl">
      <div className=" lg:w-1/2 mx-5 ">
        <div className="lg:mx-16 flex items-center ">
          <img src={Logo} alt="/" className="lg:w-12" />
          <h4 className="font-poppins font-bold px-2 pt-1 lg:text-2xl text-lg">Travlog</h4>
        </div>
        <p className="lg:ml-16 lg:my-7 text-gray-500 leading-8  py-3
        lg:text-lg text-sm">
          Contrary to polpular belief, Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eos dolores distinctio quae, explicabo facilis aut recusandae iure amet, veritatis voluptatem. A enim libero id.
        </p>
        <div className="flex lg:mx-16">
          <img src={Facebook} alt="/" className="pr-6"/>
          <img src={Twitter} alt="/" className="pr-6"/>
          <img src={Instagram} alt="/" className="pr-6" />
        </div>
      </div>
      <div className="mx-7 lg:flex lg:w-1/2 justify-around">
        <div>
          <h5 className="flex justify-between text-xl font-semibold my-6">Company <span onClick={toggle}><img src={arrow} alt=""  className={`lg:hidden ${isVisible? 'rotate-180':''}`}/></span></h5>
          <ul className={`lg:block ${isVisible? 'visible':'hidden'}`}>
          <li className="pb-7 text-gray-500 text-lg">About</li>
          <li className="pb-7 text-gray-500 text-lg">Career</li>
          <li className="pb-7 text-gray-500 text-lg">Mobile</li>
        </ul>
          
        </div>
        <div>
          <h5 className="flex justify-between text-xl font-semibold my-6">Contact
          <span onClick={toggle2}><img src={arrow} alt="" className={`lg:hidden ${isVisible2? 'rotate-180':''}`} /></span></h5>
          <ul className={`lg:block ${isVisible2 ? '' : 'hidden'}`}>
            <li className="pb-7 text-gray-500 text-lg">About</li>
            <li className="pb-7 text-gray-500 text-lg">Parent with us</li>
            <li className="pb-7 text-gray-500 text-lg">FAQ s</li>
            <li className="pb-7 text-gray-500 text-lg">Blog</li>
          </ul>

        </div>
        <div>
          <h5  className="flex justify-between text-xl font-semibold my-6">Meet Us
          <span onClick={toggle3}><img src={arrow} alt="" className={`lg:hidden ${isVisible3? 'rotate-180':''}`} /></span></h5>
          <ul className={`lg:block ${isVisible3 ? '' :`hidden`}
          
          `}>
            <li className="pb-7 text-gray-500 text-lg">+91 9872439822</li>
            <li className="pb-7 text-gray-500 text-lg">info.travlog.com</li>
            <li className="pb-7 text-gray-500 text-lg">Vivegananthar street, Dubai</li>
            <li className="pb-7 text-gray-500 text-lg">798821</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
