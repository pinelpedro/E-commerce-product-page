import { useState , useEffect } from 'react';
import './Navbar.css';
import iCart from '../../images/icon-cart.svg'
import iAvatar from '../../images/image-avatar.png'
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../images/logo.svg'

import Modal from '../modal/Modal.jsx';



const Navbar = () => {
const prod = {
  name:'a',
  price: 10,
}
  const [isOpen, setIsOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const handleClick = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      setClickPosition({ x, y });
  };

  const openModal = (e) => {
    handleClick(e)
      setIsModalOpen(true);
  };

  const closeModal = () => {
      setIsModalOpen(false);
  };


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

//  useEffect(() => console.log('porrachata'),console.log('porrachata') }, []);
  return (
    <nav className={`navbar`}>
      <div className="nav-container">

      <div className="navbar-logo">
        <a href="/"><img className='logo' src={logo} alt='logo' /></a>


      </div>
        <ul>
          <li>
            <a>Colletions</a>
          </li>
          <li>
            <a>Men</a>
          </li>
          <li>
            <a>Woman</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`navbar-links  ${isOpen ? 'active' : ''}` }>
        <a className='instagram' onClick={openModal}   rel="noreferrer">
        <img src={iCart} alt='cart' />
        </a>
        <Modal isOpen={isModalOpen} posx={clickPosition.x} posy={clickPosition.y}  onClose={closeModal} />
        <a className='github' href='/'  rel="noreferrer">
        <img src={iAvatar} alt='profile pic' />
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
