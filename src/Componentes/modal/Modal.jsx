import { useEffect, useRef } from "react";

import './Modal.css'
import ProdModules from '../../modules/main.jsx'

const Modal = ({ isOpen, onClose , posx , posy }) => {
  console.log(posx,posy)
  const modalRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const chatice = {
    [ <div className="modal-overlay">
        <div className="modal" ref={modalRef}>
          <h3>Cart</h3>
          <div className="line"></div>
          <img src="/" alt="/" />
          <img />
          <button>checkout</button>
        </div>
      </div>]:'chato'
  }

  const style = {
    position: 'absolute',
    top: `${posy + 10}px`,
    left: `${posx -152}px`,
};

  return (
    <div className="modal-overlay" style={style}>
      <div className="modal" ref={modalRef}>
        <div className="hd">
          <h3>Cart</h3>
        </div>
        {<ProdModules/> ? <ProdModules/>  : <p>your cart is empty.</p> }
        
      </div>
    </div>
  );
};

export default Modal;
