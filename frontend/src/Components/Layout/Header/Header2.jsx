import React, { useState } from 'react'
import '../Header/Header2.css';
import { FaSearch, FaRegUser, FaShoppingBasket } from "react-icons/fa";
import {RiDeleteBinLine} from "react-icons/ri";
import { Link } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';

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
      <Offcanvas show={show} onHide={handleClose} placement={"end"} className='canvas-body'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="container">
            <div className="row d-flex align-items-center border-1 border-secondary border-bottom">
              <div className="col-lg-3">
                <img className='w-100' src="https://cdn.shopify.com/s/files/1/2508/8358/products/22_9ad7cedf-f388-4f2c-9597-6c15309c6ef5_grande.jpg?v=1509598556" alt="" />
              </div>
              <div className="col-lg-6 d-flex flex-wrap align-items-center">
                  <p><Link style={{ textDecoration: 'none', color: 'black' }} to="/details"><li className='li-2'>Home</li></Link></p>
                  <p><span>1</span> x <span>3500</span></p>
                </div>
                <div className="col-lg-3"><i className='i-2'><RiDeleteBinLine /></i></div>
            </div>
            
           <div className="buttons">
           <Link style={{ textDecoration: 'none', color: 'black' }} to="/"><button className='view-cart'>View Cart</button></Link>
           <Link style={{ textDecoration: 'none', color: 'black' }} to="/"><button className='check-out'>Checkout</button></Link>
           </div>

          </div>
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

      <header className={fix ? 'navbar-fixed-2' : 'navbar-2'}>
        <div classname='col-lg-2'>
          <img src='https://cdn.shopify.com/s/files/1/2508/8358/files/uniqlo_7e3b262a-2afc-45df-94f2-2ea168969da6_medium.png?v=1509616224' alt="a" />
        </div>
        <nav classname='col-lg-6'>
          <ul className='d-flex mb-0'>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/"><li className='li-2'>Home</li></Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/products"><li className='li-2'>Shop</li></Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/about"><li className='li-2'>About</li></Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/contact"><li className='li-2'>Contact</li></Link>
          </ul>
        </nav>
        <div classname='col-lg-4'>
          <div>
            <i className='i-2'><FaSearch onClick={toggleShowsearch} /></i>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/login"><i className='i-2'><FaRegUser /></i></Link>
            <i className='icons i-2'><FaShoppingBasket onClick={toggleShow} /><span>0</span></i>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header