import React from 'react'
import { FaFacebook, FaGooglePlus, FaInstagram, FaLongArrowAltRight, FaTwitter } from 'react-icons/fa';
import'../Footer/Footer.css';

const Footer = () => {
  return (
    <footer id='Footer'>
        <div className='container'>
            <div className='f-top d-flex justify-content-evenly border-bottom'>
                <div className='left col-lg-3'>
                    <img src="https://cdn.shopify.com/s/files/1/2508/8358/files/uniqlo_93a7cafa-87bd-48b0-8cf2-cf28307387b7_medium.png?v=1509612902" alt=""/>
                    <p>Get 10% discount with notified about the latest news and updates.</p>
                </div>
                <div className='middle col-lg-3'>
                    <h2>Newsletters</h2>
                    <div className='d-flex align-items-center'>
                    <input 
                    className='form-control w-75 h-25'
                    type="" 
                    name="" 
                    value=""
                    placeholder='Email Adress'/>
                    <i className='bg-white text-secondary h-25'><FaLongArrowAltRight/></i>
                    </div>
                </div>
                <div className='right col-lg-3'>
                    <h2>Follow Us</h2>
                    <i className='i-2'><FaFacebook/></i>
                    <i className='i-2'><FaInstagram/></i>
                    <i className='i-2'><FaGooglePlus/></i>
                    <i className='i-2'><FaTwitter/></i>
                </div>
            </div>
            <div className='f-bottom d-flex justify-content-evenly my-2'>
                <div className='left col-lg-7'>
                    <p>© 2018 Uniqlo All Right Reserved.</p>
                </div>
                <div className='right col-lg-3 d-flex justify-content-around'>
                    <p>May Account</p>
                    <p>Whishlist</p>
                    <p>Contact Us</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer