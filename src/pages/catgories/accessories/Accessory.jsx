import React from 'react'
import './accessory.scss'
import Nav from '../../nav/Navigation'
// import Catagories from '../Catagories'
// import { femaleCatagory } from '../../../data'
import Footer from '../../footer/Footer'
import Products from '../../products/Products'

export default function Accessory() {
  return (
    <>
        <Nav />
        {/* <Catagories sex={femaleCatagory} gender="women" /> */}
        <Products  cat="accessory" filter={{}}/>
        <Footer />
</>
  )
}
