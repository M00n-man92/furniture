// import styled from "styled-components"
// import { RadioButtonChecked } from '@mui/icons-material'
import Nav from '../../nav/Navigation'
import './productlist.scss'
import Products from '../../products/Products';
import Footer from '../../footer/Footer';
import { useLocation } from "react-router"
import { useState } from "react"

export default function ProductList() {
    const location=useLocation()
    let cata 
    let sexa
    if(location.pathname.split("/")[3]){
         cata=location.pathname.split("/")[3]
         sexa=location.pathname.split("/")[2]
    }
   else if(!(location.pathname.split("/")[3])){
     cata=location.pathname.split("/")[2]
   }
   console.log("sex= "+sexa)
console.log("cat= "+cata)
    const [filters,setFilter]=useState({})
    const [sort,setSort]=useState("newest")
//    console.log(cata)
    const changeHnadler=(e)=>{
        const value=e.target.value
        setFilter({
            ...filters,[e.target.name]:value})
    }
//    console.log(filters,sort)

    return (
        <div className="productlist">
           <div className="con">
            <Nav /></div> 
            <div className="tilte">
                <h2>{sexa} {cata}</h2>
            </div>
            <div className="containerrr">
                <div className={"filter " + "l"}>
                    <span> Filter :</span>
                    <select name="color" onChange={changeHnadler}>
                        <option value=""  >Colour</option>
                        <option value="red">Red </option>
                        <option value="yellow">Yellow </option>
                        <option value="black">Black </option>
                        <option value="orange">Orange </option>
                        <option value="pink">Pink </option>
                        <option value="white">White </option>
                        <option value="green">Green </option>
                        <option value="khaki">khaki </option>
                        <option value="brown">Brown </option>

                        
                    </select>
                    <select name="size" onChange={changeHnadler} className="birthday">
                        <option value="" disabled>Size</option>
                        <option value="XS(2)">XS </option>
                        <option value="S(4)">S </option>
                        <option value="M(6)">M</option>
                        <option value="L(8/10)">L</option>
                        <option value="XL(12)">XL </option>
                    </select>

                </div>
                <div className={"filter " + "r"}>
                    <span>Sort :</span>
                    <select name="price" onChange={(e)=>setSort(e.target.value)}>
                        <option value="newest"  >Newest</option>
                        <option value="asc">Price(asc) </option>
                        <option value="desc">Price(desc) </option>
                       
                    </select>

                </div>
            </div>
            <Products cat={cata} filter={filters} sort={sort} sex={sexa}/>
     <Footer/> 
        </div>
    )
}
