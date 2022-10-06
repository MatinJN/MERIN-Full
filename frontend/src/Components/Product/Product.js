import React, { useEffect, useReducer } from 'react'
import "./Product.css"
import { AiOutlinePlus } from 'react-icons/ai'
import { BsSuitHeart } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function reducer(state,action){
    switch(action.type){
        case 'fetch_req':
            return{...state,loading:true}
            case 'fetch_success':
                return {...state,loading:false,products:action.payload}
                default:
                    return state
    }
}

const Product = ({product}) => {
  
const[{loading,products},dispatch]=useReducer(reducer,{
    loading:true,
    products:[]
})

useEffect(()=>{
const  getProducts=async()=>{
    dispatch({type:'fetch_req'})
    try {
        const resp=await axios.get('http://localhost:7777/product')
        dispatch({type:'fetch_success',payload:resp.data})
        
    } catch (error) {
        
    }
}
getProducts()
},[products])
const navigate=useNavigate()
    return (
        <>
         {products && products.map((prod)=>{
                            return (
                                <div key={prod._id} onClick={()=>navigate(`/details/${prod._id}`)} className="product-foto">
                                <img src={prod.image} alt="" />
                                <div className='overlay'>
                                    <div className='product-text'>
                                       
                                        <span className='pro-text'>{prod.name}</span>
                                        <span className='pro-price'>${prod.price}.00</span>
                                        <div className='pro-icons'>
                                            <i><AiOutlinePlus /></i>
                                            <i><FiShoppingCart /></i>
                                            <i><BsSuitHeart /></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
        
           
            </>
    )
}

export default Product