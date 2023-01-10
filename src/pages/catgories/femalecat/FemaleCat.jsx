import React from 'react'
import '../catagories.scss'
import Nav from '../../nav/Navigation'
import Catagories from '../Catagories'
import { femaleCatagory } from '../../../data'
import Footer from '../../footer/Footer'
import Products from '../../products/Products'
export default function FemaleCat() {
    return (<>
        <Nav />
        {/* <Catagories sex={femaleCatagory} gender="women" /> */}
        <div className="spaceing" style={{marginLeft:"10%",marginRight:"10%"}}>
        <Products sex="women"/>
        </div>
        
        <Footer />
</>
        

        // <div className="catagory">

        //     <div className="blamegame">
        //         {/* <span>Catagories</span> */}

        //     </div>
        //     <div className="lovetoplay">
        //         {femaleCatagory.map((item, i) => (
        //             <Catitem item={item} id={i} key={i} sex={women} />
        //         ))}
        //     </div>

        // </div>
    )
}
