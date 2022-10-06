import React from 'react'
import { Link } from 'react-router-dom'
import Header2 from '../../Components/Layout/Header/Header2'

import '../Products/Products.css'
import Product from '../../Components/Product/Product';


const Products = () => {
  return (
    <>
      <Header2 />
      <section id='top-product'>
        <div className='top-text'>
          <h2>Product</h2>
        </div>
        <div className='bottom-text'>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/products"><span className='go-shop'>Home</span></Link> / <span classNameName='span-text'>Products</span>
        </div>
      </section>
      <section className='main-product'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3'>
              <div className='product-list'>
                <h4>CATEGOREIS</h4>
                <ul>
                  <li>Man</li>
                  <li>Woman</li>
                  <li>Furniture</li>
                  <li>Decoration</li>
                </ul>
              </div>
              <div className='product-color'>
              </div>
            </div>
            <div className='col-lg-9'>
              <div className='product d-flex gap-5 flex-wrap mb-5'>
                <Product/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products
