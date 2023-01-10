import React, { useState, useEffect } from 'react'
import { CircularProgress } from '@mui/material';
import "./newproducts.scss"
import { useSelector } from 'react-redux';
import Products from '../../products/Products'
import Product from '../../products/product/Product';
import { publicRequest } from '../../../requestMethods';
// import Product from '../../products/product/Product'
export default function NewProducts() {
  const user = useSelector(state => state.user)
  const isFetching = user.isFetching

  console.log(isFetching)
  const [cat, setCat] = useState("dress");
  const [sex, setSex] = useState("");
  // const nav =["Hot", "On SALE","Trending Now", "New Arrival"]
  const nav =["dress", "shirt","short", "shoes"]
  const [isLined, setIsLined] = useState(0);
  const [products, setProducts] = useState([]);
  useEffect(() => {
		const fun = async () => {
      console.log(isFetching)
			/* try {
				const reply = await publicRequest.get(sex && cat ? `product/find?sex=${sex}&catagory=${cat}` : sex ? `product/find?sex=${sex}` : cat ? `product/find?catagory=${cat}` : 'product/find')
				const res = reply.data
				setProducts(res.data)
			}
			catch (e) {
				console.log(e)
			} */
		}
		fun()

	}, [cat, sex, isLined, isFetching])
  return (
    
    <div className='newproducts'>
      <h3>Our Product</h3>
      <div className="container">
        {nav.map((item,index)=>(
          <span
            onClick={(e)=>{
              setIsLined(index)
              setCat(item)
             }
            }
            key={index}
            style= {
              index === isLined ? 
              { textDecorationLine: "underline",
                fontWeight:"Bold",
                textDecorationThickness:"10%"
              } : 
              {}
            }
          >
            {item}
          </span>
        ))}
      </div>
      <div className="productscontainer">
        {/* {products.map((items, i)=>(
          <Product items={items} toss={i + 434} />
        ))} */}
        {isFetching ? (
          <div className="circularprogress" style={{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <CircularProgress />
          </div>
        ):(
<Products filter={{}} cat={cat}/>
        )}
        
      
      
      </div>
    </div>

  )
}
