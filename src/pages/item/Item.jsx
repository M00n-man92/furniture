import { Add, Minimize, ShoppingBagOutlined } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Footer from '../footer/Footer'
import Nav from '../nav/Navigation'
import './item.scss'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/cartRedux'
import { publicRequest } from '../../requestMethods'
import { Link } from 'react-router-dom'

export default function Item() {
    const dropzoneStyle = (isPreview) => ({

        backgroundColor: (isPreview),


    });
    const dropzoneStylee = (isPreview,notpreview) => ({

        width: (isPreview),
        height:(notpreview)
 
 
     });
    const deispatch = useDispatch()
    const handleClick = () => {
        setUsedColor(individualItem.color)
        deispatch(addProduct({ ...individualItem, quantity, usedColor, usedSize }))
        // console.log(usedColor)
    }
    // const cart = useSelector(state => state.cart)
    // console.log(cart)
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const [individualItem, setIndividualItem] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [image, setImage] = useState("")
    //  console.log(individualItem.color[0].coloring)
    const count = (type) => {
        if (type === "dec") {
            setQuantity(quantity - 1)
            if (quantity === 1) {
                setQuantity(1)
            }
        }
        else if (type === "acc") {
            setQuantity(quantity + 1)
        }
    }
    useEffect(() => {
        try {
            const getProduct = async () => {
                const reply = await publicRequest.get(`/product/find/${id}`)
                const real = reply.data
                const data = real.data
                
                setIndividualItem(data)
                
                setImage("")
            }
            getProduct()
        }
        catch (e) {
            console.log(e)
        }

    }, [id])
    const [usedColor, setUsedColor] = useState(null)
    const [usedSize, setUsedSize] = useState(null)
  
    return (
        <div className="item">
            <div className="headers">
                <Nav />

            </div>
            <div className="wrapperr">
                <div className="letmetellyou">
                    {individualItem.img ? individualItem.img.map((item, i) => (<div className="booby" key={i}><img src={item} alt="" onClick={(e) => setImage(item)} /></div>)) : <span></span>}
                   
                </div>
                <div className="imgg">
                    {individualItem.img ? image ? <a target="_blank" href={image}><img src={image} alt="" /></a> : <a target="_blank" href={individualItem.img[0]}><img src={individualItem.img[0]} alt="" /></a> : <a target="_blank" href={individualItem.img}><img src={individualItem.img} alt="" /></a>}
                </div>
                <div className="info">
                    <div className="title">
                        <span>{individualItem.title}</span>
                    </div>
                    <div className="desc">
                        <p>{individualItem.discription}</p>
                    </div>
                    <div className="price">
                        <span>$ {individualItem.price}</span>
                    </div>
                    <div className="selectt">
                        <div className="color">
                            <div className="manishboy">
                                <span>Colour :</span>
                            </div>
                            <div className="jazzythinds">
                                {individualItem.color ? individualItem.color === "multicolor" ? <div className="ohhellnahh" ><img src={individualItem.img[0]} alt="" className="jk" /></div> : <div className="ohhellnahh" style={dropzoneStyle(individualItem.color)}></div> : <span></span>}
                                {individualItem.associate_color ? individualItem.color === "multicolor" ? individualItem.associate_color.map((item, i) => (<Link to={item.id}><div className="ohhellnahh" key={i} ><img src={item.img} alt="" className="jk" /></div></Link>)) : individualItem.associate_color.map((item,i)=>(<Link to={item.id}><div className="ohhellnahh" style={dropzoneStyle(item.coloring)}></div> </Link>)): <span></span>}
                                {/* <select name="Color" id="" onClick={(e)=>{setUsedColor(e.target.value)}}> */}
                               

                            </div>




                            {/* {individualItem.color?individualItem.color.map(s=>(<option key={s._id}>{s.coloring}</option>)) : individualItem.color.map((s)=>(<option key={s}>{s}</option>))} */}



                            {/* </select> */}
                        </div>
                        <div className="size">
                            <span>Size :</span>
                            <select name="Size" id="" onClick={(e) => { setUsedSize(e.target.value) }}>
                                <option disabled="true">size</option>

                                {individualItem.size?.map((s) => (<option key={s}>{s}</option>))}



                            </select>

                        </div>
                    </div>
                    <div className="bag">
                        <div className="option">
                            <Minimize className="minus" onClick={() => { count("dec") }} />
                            <div className="number">
                                <span>{quantity}
                                </span>
                            </div>
                            <Add className="plus" onClick={() => { count("acc") }} />
                        </div>
                        <div className="cart">
                            <button onClick={handleClick}>Add to Cart</button>
                            <ShoppingBagOutlined className="op" onClick={handleClick} style={dropzoneStylee(25,25)} />
                        </div>
                    </div>

                </div>
            </div>
            <div className="footers">
                <Footer />
            </div>
        </div>
    )
}
