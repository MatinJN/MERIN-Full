import React from 'react'
import '../Home/Home.css'
import {Link } from "react-router-dom";
import Header from '../../Components/Layout/Header/Header';
import Product from '../../Components/Product/Product';


const Home = () => {
    return (
        <>
        <Header/>
            <section id='First' className='position-position-relative'>
                <div className='content position-absolute'>
                    <div className='m-auto'>
                        <h3>New Product Collection</h3>
                        <Link style={{textDecoration: 'none', color:'black'}} to="/products"><span className='go-shop'>SHOP NOW</span></Link>
                        
                    </div>
                </div>
            </section>

            <section className='Second'>
                <div className="container">
                    <div className="row d-flex justify-content-evenly">
                        <div data-aos="zoom-in" className="col-lg-6">
                            <img className='w-100' src='https://cdn.shopify.com/s/files/1/2508/8358/files/1_1024x1024.jpg?v=1509612262' alt="" />
                            <h3>New Product Collection</h3>
                            <Link style={{textDecoration: 'none', color:'black'}} to="/products"><span className='go-shop'>SHOP NOW</span></Link>
                        </div>
                        <div data-aos="zoom-in" className="col-lg-6">
                            <img className='w-100' src='https://cdn.shopify.com/s/files/1/2508/8358/files/2_6c66c4d6-85c3-46d0-95ab-3789b570933e_1024x1024.jpg?v=1509612302' alt="" />
                            <h3>New Product Collection</h3>
                            <Link style={{textDecoration: 'none', color:'black'}} to="/products"><span className='go-shop'>SHOP NOW</span></Link>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>

    )
}

export default Home