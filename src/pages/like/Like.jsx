import React from 'react'
import './like.scss'
import Product from '../products/product/Product'
import { useSelector } from 'react-redux'
import {useEffect,useState} from 'react'
import Navigation from '../nav/Navigation'
import Footer from '../footer/Footer'

export default function Like() {
 const likes=useSelector(state=>state.like)
 const [products,setProducts]=useState([])
console.log(likes.products)
    useEffect(()=>{
    
likes&&likes.products&&setProducts(likes.products)


 },[likes])
    return (
        <>

        <Navigation />
        <div className="likes">
        {products.map((items,i)=>(<Product items={items} toss={i} />))}
        </div>

<Footer />
</>
   
  )
}
