import React from 'react'
import '../catagories.scss'
// import '../catagories.scss'
import Nav from '../../nav/Navigation'
import Catagories from '../Catagories'
import { maleCatagory } from '../../../data'
import Footer from '../../footer/Footer'
import Products from '../../products/Products'
export default function MaleCat() {
  return (
    <>
        <Nav />
        {/* <Catagories sex={maleCatagory} gender="men" /> */}
        <div className="spaceing" style={{marginLeft:"10%",marginRight:"10%"}}>
        <Products sex="men"/>
        </div>
        <Footer />
</>
          
  )
}
