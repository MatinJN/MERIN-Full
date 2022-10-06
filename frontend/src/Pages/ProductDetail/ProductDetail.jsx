import React, { useEffect, useReducer, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Rating } from '@mui/material';

import Header2 from '../../Components/Layout/Header/Header2'
import "../ProductDetail/ProductDetail.css"
import axios from 'axios';


function reducer(state,action){
    switch(action.type){
        case 'fetch_req':
            return{...state,loading:true}
            case 'fetch_success':
                return {...state,loading:false,singleproduct:action.payload}
                default:
                    return state
    }
}

const ProductDetails = ({product}) => {

    const[{singleproduct},dispatch]=useReducer(reducer,{
        loading:true,
        singleproduct:{}
    })
    console.log(singleproduct.raiting);
    const [counter, setCount] = useState(1)
    
    const params=useParams()
    const {id}=params
    useEffect(()=>{
        const  getProducts=async()=>{
            dispatch({type:'fetch_req'})
            try {
                const resp=await axios.get(`http://localhost:7777/details/${id}`)
        const oneProd=resp.data.find((p)=>p._id===id)

                dispatch({type:'fetch_success',payload:oneProd})
                
            } catch (error) {
            }
        }
        getProducts()
        },[id])

    return (
        <>
        <Header2/>
        <section id='top-products' className='mb-5'>
        <div className='top-text'>
          <h2>Product Details</h2>
        </div>
        <div className='bottom-text'>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/products"><span className='go-shop'>Home</span></Link> / <span classNameName='span-text'>Products Details</span>
        </div>
      </section>
            <div class="product-details">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="product-details">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="product-details-wrapper">
                                                <div class="row">
                                                    <div class="col-lg-5">
                                                        <div class="product-wrapper-img mb-5">
                                                            <img src={singleproduct.image} style={{width: "110px"}} alt="" />
                                                        </div>
                                                        <div class="product-mini-img d-flex">
                                                            <div class="mini-img">
                                                                <img src="https://cdn.shopify.com/s/files/1/2508/8358/products/23_978a909a-70db-4eed-8448-1ee18f69228d_compact.jpg?v=1509598556" style={{width: "110px"}} alt="" />
                                                            </div>
                                                            <div class="mini-img">
                                                                <img src="https://cdn.shopify.com/s/files/1/2508/8358/products/24_2636476d-a4a6-408a-ad22-ea9d8e16318a_compact.jpg?v=1509598556" style={{width: "110px"}} alt="" />
                                                            </div>
                                                            <div class="mini-img">
                                                                <img src="https://cdn.shopify.com/s/files/1/2508/8358/products/25_7b0f2d0f-62c3-4498-a78d-22aebf82af2b_compact.jpg?v=1509598556" style={{width: "110px"}} alt="" />
                                                            </div>
                                                            <div class="mini-img">
                                                                <img src="https://cdn.shopify.com/s/files/1/2508/8358/products/32_f9a0ca5c-5ce2-4906-8ee3-79f14c955d7b_grande.jpg?v=1509598469" style={{width: "110px"}} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-7">
                                                        <div class="product-details-desc">
                                                            <h3>{singleproduct.name}</h3>
                                                            <div class="review mb-3">
                                                                <div class="starrating">
                                                                    <Rating name="half-rating" defaultValue={singleproduct.raiting} precision={0.5} />
                                                                </div>
                                                            </div>
                                                            <div class="price mb-3">
                                                                <span>${singleproduct.price}.00</span>
                                                            </div>
                                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                                                Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat nisi ut mauris efficitur lacinia.
                                                            </p>
                                                            <div class="quantity mb-2 d-flex">
                                                                <div class="qty-input">
                                                                    <button class="qty-count qty-count--minus" data-action="minus" type="button" onClick={() => {setCount(counter - 1)}} >-</button>
                                                                    <input class="product-qty" type="number" name="product-qty" min="1" max="50" value={counter}  />
                                                                    <button class="qty-count qty-count--add" data-action="add" type="button " onClick={() => {setCount(counter + 1)}} >+</button>
                                                                </div>
                                                                <button className='add'>Add to Cart</button>
                                                            </div>
                                                            <div class="stock mb-3 d-flex">
                                                                <h5>SKU:</h5>
                                                                <span>5GF123YD</span>
                                                            </div>
                                                            <div class="stock mb-3 d-flex">
                                                                <h5>{singleproduct.name}:</h5>
                                                                <span>Mask</span>
                                                            </div>
                                                            <div class="stock mb-3 d-flex">
                                                                <h5>Availability:</h5>
                                                                <span>In Stock</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  
        </>
    )
}


export default ProductDetails