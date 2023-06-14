import React from 'react';
import { FaGoogle,FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch } from "react-icons/fa";
import manCity from '../../../../../assets/manCity.jpg'
import manCity2 from '../../../../../assets/manCity2.jpg'
import manCity3 from '../../../../../assets/manCity3.jpg'
import kdb from '../../../../../assets/kdb.jpg'

const RightSideNav = () => {
    return (
        <div>
     <div>
     <button className="btn mb-2 flex flex-col items-center justify-center  whitespace-nowrap"><FaGoogle className='mr-2 inline-block'></FaGoogle><span className='inline-block'>SignIn with Google</span></button>
  <button className="btn mb-2 flex flex-col items-center justify-center  whitespace-nowrap "><FaGithub></FaGithub><span>SignIn with GitHub</span></button>
  <button className="btn mb-2 flex flex-col items-center justify-center  whitespace-nowrap "><FaFacebook></FaFacebook><span>Facebook</span></button>
  <button className="btn mb-2 flex flex-col items-center justify-center  whitespace-nowrap "><FaWhatsapp></FaWhatsapp><span>WhatsApp</span></button>
  <button className="btn mb-2 flex flex-col items-center justify-center  whitespace-nowrap "><FaTwitter></FaTwitter><span>Twitter</span></button>
  <button className="btn mb-2 flex flex-col items-center justify-center  whitespace-nowrap "><FaTwitch></FaTwitch><span>Twitch</span></button>
     </div>

     <div>
     <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src={manCity} className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src={manCity2} className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src={manCity3} className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src={kdb} className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
</div>
     </div>
        
        
    );
};

export default RightSideNav;