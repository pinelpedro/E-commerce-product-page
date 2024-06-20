import { useState} from "react";


import "./Center.css";
import Img from "../../images/imgp1.jpg";
import Img2 from "../../images/imgp2.jpg";
import Img3 from "../../images/imgp3.jpg";
import Img4 from "../../images/imgp4.jpg";
import mini1 from "../../images/image1.jpg";
import mini2 from "../../images/image2.jpg";
import mini3 from "../../images/image3.jpg";
import mini4 from "../../images/image4.jpg";
import Quantion from "./Quantion/Quantion.jsx";

import icard from '../../images/icon-cart.svg'

const Center = () => {
  const [index, setIndex] = useState(Img);

  return (
    <div className="estruct">
      <div className="areapic">
        <img className="centralpic" src={index} alt="pic1" />
        <div className="mini">
          <img
            onClick={() => {
              setIndex(Img);
            }}
            src={mini1}
            alt="mini1"
          />
          <img
            onClick={() => {
              setIndex(Img2);
            }}
            src={mini2}
            alt="mini2"
          />
          <img
            onClick={() => {
              setIndex(Img3);
            }}
            src={mini3}
            alt="mini3"
          />
          <img
            onClick={() => {
              setIndex(Img4);
            }}
            src={mini4}
            alt="mini4"
          />
        </div>
      </div>
      <div className="areatext">
        <h4>Fall Limited Edition Sneakers</h4>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="subareaprice">
          <div className="price">
            <span>$125.00</span>
            <p>50%</p>
         </div>
          <p className="line">$250.00</p>
          <div className="addcart">
            <Quantion />
            <button className="but"><img src={icard} alt="carf" className="bcart" />Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
