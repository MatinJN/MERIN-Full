import React from 'react'
import { Link } from 'react-router-dom'
import Header2 from '../../Components/Layout/Header/Header2'
import './About.css'

const About = () => {
  return (
    <>
        <Header2/>
        <section id='top-products'>
        <div className='top-text'>
          <h2>About</h2>
        </div>
        <div className='bottom-text'>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/products"><span className='go-shop'>Home</span></Link> / <span classNameName='span-text'>About</span>
        </div>
      </section>
        <section className='First-about'>
        <h2>Welcome To Uniqlo Store</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore gna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
        <button>Contact us</button>
        </section>
      </>
  )
}

export default About