import React, { useState } from 'react'
import '../Header/Header.css';
import { FaSearch, FaRegUser, FaShoppingBasket } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {Offcanvas} from "react-bootstrap"

const Header = () => {
  const [fix, setFix] = useState(false)

  const setFixed = () => {
    if (window.scrollY >= 340) {
      setFix(true)
    } else {
      setFix(false)
    }
  }
  window.addEventListener('scroll', setFixed)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const [showsearch, setShowsearch] = useState(false);

  const handleClosesearch = () => setShowsearch(false);
  const toggleShowsearch = () => setShowsearch((s) => !s);
  return (
    <>
        <Offcanvas show={show} onHide={handleClose} placement={"end"}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>aaaa</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          </Offcanvas.Body>
        </Offcanvas>
          
        <Offcanvas  show={showsearch} onHide={handleClosesearch} placement={"top"}>
          <Offcanvas.Header closeButton>
          </Offcanvas.Header>
          <Offcanvas.Body className="Search">
          <div className="container">
            <input className='inputSearch' type="text" />
          </div>
          </Offcanvas.Body>
        </Offcanvas>
    <header className={fix ? 'navbar-fixed-1' :'navbar-1'}>
      <div classname='col-lg-2'>
        <img src='https://cdn.shopify.com/s/files/1/2508/8358/files/2_medium.png?v=1509611728' alt="a" />
      </div>
      <nav classname='col-lg-6'>
        <ul className='d-flex mb-0'>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/"><li className='li-1'>Home</li></Link>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/products"><li className='li-1'>Shop</li></Link>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/about"><li className='li-1'>About</li></Link>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/contact"><li className='li-1'>Contact</li></Link>
        </ul>
      </nav>
      <div classname='col-lg-4'>
        <div>
          <i className='i-1'><FaSearch onClick={toggleShowsearch}/></i>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/login"><i className='i-1'><FaRegUser /></i></Link>
          <i className='icons i-1'><FaShoppingBasket onClick={toggleShow} /><span>0</span></i>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header