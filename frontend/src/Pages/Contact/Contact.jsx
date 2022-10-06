import React from 'react'
import { Link } from 'react-router-dom'
import Header2 from '../../Components/Layout/Header/Header2'
import "./Contact.css"
import { ImLocation } from "react-icons/im";
import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Iframe from 'react-iframe'

const Contact = () => {
  return (
    <>
      <Header2 />
      <section id='top-products'>
        <div className='top-text'>
          <h2>Contact</h2>
        </div>
        <div className='bottom-text'>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/products"><span className='go-shop'>Home</span></Link> / <span classNameName='span-text'>Contact</span>
        </div>
      </section>
      <section className='main-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <h2 className='mb-4 fs-4 text-secondary'>CONTACT INFO</h2>
              <div className='phone d-flex align-items-center my-4'>
                <div className='icon'>
                  <i className='rounded-5 border border-1 p-3 mx-1'><ImLocation style={{ fontSize: "25px" }} /></i>
                </div>
                <div className='phone-text'>
                  <h4 className='text-secondary'>Location : </h4><span>Your location goes here</span>
                </div>
              </div>
              <div className='bottom-text d-flex justify-content-between '>
                <div className='phone d-flex align-items-center my-4'>
                  <div className='icon'>
                    <i className='rounded-5 border border-1 p-3 mx-1'><BsPhone style={{ fontSize: "25px" }} /></i>
                  </div>
                  <div className='phone-text'>
                    <h4 className='text-secondary'>Phone : </h4><span>+00 111 222 333 44</span>
                  </div>
                </div>
                <div className='phone d-flex align-items-center my-4'>
                  <div className='icon'>
                    <i className='rounded-5 border border-1 p-3 mx-1'><AiOutlineMail style={{ fontSize: "25px" }} /></i>
                  </div>
                  <div className='phone-text'>
                    <h4 className='text-secondary'>Mail : </h4><span>info@example.com</span>
                  </div>
                </div>
              </div>
              <h2 className='mb-4 fs-4 text-secondary'>GET IN TOUCH</h2>
              <form>
                <div className='all d-flex w-100 justify-content-between'>
                  <input
                    className='input-form p-1'
                    type="text"
                    name='name'
                    placeholder='Your Name' />

                  <input
                    className='input-form p-1'
                    type="email"
                    name='email'
                    placeholder='Your Email' />
                </div>
                <input
                  className='input-form w-100 my-4 p-1'
                  type="text"
                  name='subject'
                  placeholder='Subject' />
                <textarea className='text-area'>

                </textarea>

              <button type='submit' className='contact-btn'> SEND</button>
              </form>
            </div>
            <div className="col-lg-6">
            <Iframe src="https://www.google.com/maps/d/u/0/embed?mid=1iITZr1LsK5EL5WUSon3ZwAJ5VO3vTOc&ehbc=2E312F" width="100%" height="500"></Iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact