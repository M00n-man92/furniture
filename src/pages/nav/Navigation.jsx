import './navi.scss'
import { FavoriteBorder, Person, ShoppingCartOutlined, SearchOutlined, MessageOutlined, ArrowForwardIosOutlined, ArrowBackIosNewOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutSuccess } from '../../redux/userRedux';
import { LogoutOutlined } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/apiCall'
import { useHistory } from 'react-router-dom';
import { publicRequest } from '../../requestMethods'
import { isAsyncThunkAction } from '@reduxjs/toolkit';
import { useLocation } from 'react-router'
// import { Link } from 'react-router-dom'
// import {useNavigate}

export default function Nav() {
    const likes=useSelector(state=>state.like)
    const likesnum=likes.quantity
    const [itemm, setitemm] = useState(0)
    const quantity = useSelector(state => state.cart.quantity)
    const user = useSelector(state => state.user)
    const location = useLocation()
    // console.log(location.pathname)

    var people = localStorage.getItem("persist:root")
    var its_my_jam
    var keepittrue
    var lovelokedown
    var alister
    const history = useHistory()
    const dispatch = useDispatch()
    const nion = (digits) => {
        if (digits == "l") {
            itemm != 0 ? setitemm(itemm - 1) : setitemm(3)
            // console.log(itemm)
        }
        else if (digits == "r") {
            itemm != 3 ? setitemm(itemm + 1) : setitemm(0)
            // console.log(itemm)
        }
    }
    const lbetenestwal = async () => {

        const better = await logout(dispatch)
        history.push(location.pathname)
        window.location.reload()
    }
    const [weare, setWeare] = useState([])
    const [tadyaechilij, setTadyaechilij] = useState(true)
    const wegesha = async (chnke) => {
        // console.log("fiker alrgn " +chnke.length)

        if (chnke.length == 0) {
            // console.log("lemr ynegen maenger")
            setWeare([])
            setTadyaechilij(true)
        }
        else if (chnke.length >= 0) {
            // console.log("alegn")
            try {
                const huluaynger = await publicRequest.get(`product/search?q=${chnke}`)
                // console.log(huluaynger)
                setTadyaechilij(huluaynger.data.success)
                setWeare(huluaynger.data.data.slice(0, 8))
                // console.log(weare)
            }
            catch (e) {
                console.log(e)
            }
        }



    }
    useEffect(() => {


    }, [lbetenestwal])
    if (people) {
        its_my_jam = JSON.parse(people).user
        keepittrue = JSON.parse(its_my_jam).currentUser
        // console.log(keepittrue)
        if (keepittrue !== null) {
            lovelokedown = keepittrue.success
            // console.log(lovelokedown)

        }
        else if (keepittrue === null) {
            alister = true
            // console.log("dundundun "+ alister)
        }

    }
    return (

        <div className="wrapper">
            <div className="left">
                {/* <div className="languge">
                        <span>EN</span>
                    </div> */}
                <div className="lightnigga">
                    {/* <img src="/assets/arrowr.png" alt="" /> */}
                    <ArrowBackIosNewOutlined className='ion' onClick={() => nion("l")} />
                </div>
                <div className="killakilla">
                    <div className='mneyeserahnew' style={{ transform: `translateX(${-12 * itemm}vw)` }}>
                        <Link className="link" to="/">
                            <div className="navigatoe">
                                <span>HOME</span>
                            </div></Link>
                        
                            <div className="navigatoe">
                                <span>Bedding</span>
                            </div>
                       

                        
                            <div className="navigatoe">
                                <span>Decor</span>
                            </div>
                       
                        
                            <div className="navigatoe">
                                <span>Kitchen</span>
                            </div>
                        
                        {/* <Link className='link' to="/products/kids">
                            <div className="navigatoe">
                                <span>KIDS</span>
                            </div>
                        </Link>

                        <div className="navigatoe">
                            <span>CURVES+PLUS</span>
                        </div>
                        <Link className='link' to="/products/accessory"><div className="navigatoe">
                            <span>ACCESSORIES</span>
                        </div></Link> */}

                        {/* <div className="navigatoe">
                        <span>a;slkdjfaslkdjasjd;lkj</span>
                    </div> */}

                    </div>
                </div>

                <div className="darknigga">
                    {/* <img src="/assets/arrowr.png" alt="" /> */}

                    <ArrowForwardIosOutlined className='ion' onClick={() => nion("r")} />
                </div>

            </div>
            <div className={`center ${alister ? "yetmbihon" : ""}`}>
                <h3>Super Great sales Furniture</h3>
            </div>
            <div className={`right ${lovelokedown ? "take" : ""}`}>
                <div className="container">
                    <div className="itrusteverypartofyou">
                        <div className="serasch">
                            <input type="text" className={`uworryaboutthewrongthings ${lovelokedown ? "uworryaboutthewrongthingsbabe" : ""}`} placeholder='Search products '/>
                            <SearchOutlined />






                        </div>
                        <div className="tellmewhaturwaitnfor">

                            {tadyaechilij ? weare ? weare.map((item, i) => (<div className="alegineneeye" key={i}><Link to={`/product/${item._id}`} className="link" key={i}>{item.title}</Link></div>)) : <span></span> :
                                <div className="alegineneeye">
                                    <span>No search results</span>
                                </div>

                            }


                        </div>


                    </div>
                    <Link className="link" to="/cart">
                        <div className={`image ${lovelokedown ? "likeido" : ""}`}>

                            <Badge badgeContent={quantity} anchorOrigin={{ horizontal: 'left', vertical: "top" }} overlap="circular" color="primary" className='image' ><div className="star"><ShoppingCartOutlined className="belhidatenager"/></div></Badge>

                        </div>
                    </Link>
                    <Link className='link' to="/likes">
                        <div className={`image ${lovelokedown ? "likeido" : ""}`}>
{/* badgeContent={likesnum} */}
                            <Badge  anchorOrigin={{ horizontal: 'right', vertical: "top" }} overlap="circular" color="primary" className="somethin"><FavoriteBorder className="belhidatenager"></FavoriteBorder></Badge>
                        </div>
                    </Link>
                    {lovelokedown ? 
                        <div className="suicidal">
                          
                                    <div className="star">
                                        <Link className="link" to="/message"><MessageOutlined className="belhidatenager" /></Link>
                                    </div>

                                
                                    <div className="star">
                                        <LogoutOutlined onClick={lbetenestwal} className="belhidatenager" />
                                    </div>
                               
                           
                        </div>

                    : <div className="rocky">
                        <div className="ereesey">
                            <span>Login</span>
                            
                        </div>
                        <div className="ereesey">

                             <span>Signup</span>
                            
                        </div>

                    </div>}

                </div>

            </div>
        </div >


    )
}
