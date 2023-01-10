import { DeleteOutlineOutlined } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'
import Nav from '../nav/Navigation'
import './cart.scss'
import StripeCheckout from 'react-stripe-checkout'
import { removeProduct } from '../../redux/cartRedux'
import { publicRequest } from '../../requestMethods'

export default function Cart() {
	// const onToken=(token)=>{
	//     console.log(token)
	// }
	const cart = useSelector(state => state.cart)
	const Key = 'pk_test_51JkB96G4aeogyTY8BarC9GXHT8gsGMeaYlVFyvX1kq4lO14pyTa0FEiMp50PELe8C8Fpf40XJB5sfQeqoe5iVtyc00THIuMYoi'
	// console.log(cart)
	// console.log(cart)
	// const pro = cart.products
	const dispatch = useDispatch()
	const dropzoneStyle = (isPreview) => ({

		backgroundColor: (isPreview),


	});
	// console.log(cart)
	// console.log(hol)
	const [quantity, setQuantity] = useState(1)

	// setQuantity(cart.quantity)
	const [stripeToken, setStripeToken] = useState(null)
	/* const count = (type, pro_id) => {
		if (type === "dec") {



			pro.forEach((item) => {
				if (pro_id === item._id) {
					setQuantity(item.quantity - 1)
					item.quantity = quantity
					// console.log(item._id)
				}
				if (item.quantity === 1) {
					setQuantity(1)
				}
			})
		}
		else if (type === "acc") {
			setQuantity(quantity + 1)
			pro.ForEach((item) => {
				if (pro_id === item._id) {
					setQuantity(item.quantity + 1)
					item.quantity = quantity
					// console.log(item._id)
				}
				if (item.quantity === 5) {
					setQuantity(5)
				}
			})
		}
	} */
	const thatsjusthowitgo = (i, price, quantity) => {
		// const pio={astaws}
		// console.log(pio)
		dispatch(removeProduct({ i, price, quantity }))
	}
	const onToken = (token) => {
		setStripeToken(token)
		console.log(setStripeToken)
	}
	const makeRequest = async () => {

		try {
			const res = await publicRequest.post("stripe/payment", { tokenId: setStripeToken.id, amount: cart.total })
			// console.log(res.data)
		}
		catch (e) {
			console.log(e)
		}

	}
	useEffect(() => {

		// setStripeToken && makeRequest()

	}, [quantity, thatsjusthowitgo, setStripeToken, makeRequest()])
	/* const handleStuff=(type)=>{
					if(type==="dec"){
							product.quantity-=1
							if( product.quantity===1){
									product.quantity=1
							}
					}
					else if(type==="dec"){
							product.quantity+=1
					}
			} */


	// console.log(pro)

	return (
		<>
			<div className="wehadarule">
				<div className="headers">

					<Nav className="head"/>
				</div>
				<div className="cart">
					<div className="wrapper">
						<div className="title">
							<h2>YOUR BAG</h2>
						</div>
						<div className="container">
							<Link className="link" to='/'><div className="butt ">
								<button className={"but " + ("l")}>Continue Shopping</button>
							</div></Link>
							<div className="text">
								<span>Shopping Bag({cart.quantity})</span>
								{/* <span>Your WishList</span> */}
							</div>
							<div className="butt " >
								<button className={"but " + ("r")}>Chekout Now</button>
							</div>
						</div>
						<div className="bottom">
							<div className="infoo">
								{cart.products.map((product, i) => (<div className="toppro" key={i}>

									<div className="productt">

										<div className="imagecontianerr">
											<img src={product.img} alt="" />
										</div>
										<div className="detailss">
											<div className="prodname">
												<span>Product : <b>{product.title}</b></span>
											</div>
											<div className="idd">
												<span>ID : <b>{product._id}</b></span>
											</div>
											<div className="coli" style={product.color ? dropzoneStyle(product.color[0]) : dropzoneStyle(product.color)}>

											</div>
											<div className="seze">
												<span>Size : <b>{product.usedSize}</b></span>
											</div>
										</div>
									</div>
									<div className="pricee">
										<div className="bagg">
											<div className="optionn">
												{/* <Minimize className="minuss" onClick={() => {count("des",product._id)
                                            }} /> */}

												<div className="numberr">
													<span>{product.quantity}
													</span>
												</div>
												<DeleteOutlineOutlined color='red' className="wrosheba" onClick={() => { thatsjusthowitgo(i, product.quantity, product.price) }} />
												{/* <Add className="pluss" onClick={() =>{count("acc",product._id)}} /> */}

											</div>
											<div className="lio">
												<span>$ {product.price * product.quantity}</span>
											</div>

										</div>
									</div>


								</div>))}

								<hr />


							</div>


							<div className="summary">
								<div className="summaryitem">
									<div className="sumtitle">
										<span>ORDER SUMMERY</span>
									</div>
									<div className="subtotal">
										<span>SUBTOTAL: </span>
										<span><b>$ {cart.total}</b></span>
									</div>
									<div className="shipping">
										<span>ESTIMATED SHIPPING </span>
										<span><b>$ {0.00}</b></span>
									</div>
									<div className="totall">
										<span>TOTAL: </span>
										<span><b>$ {cart.total}</b></span>
									</div>
									<div className="butit">
										<StripeCheckout
											stripeKey={Key}
											currency="USD"
											description={`your total is $${cart.total}`}
											amount={cart.total * 100}
											token={onToken}>
											<button onClick={makeRequest}>CHECKOUT</button>
										</StripeCheckout>

									</div>
								</div>

							</div>
						</div>

					</div>

				</div>
				<div className="footers">
				{/* we were poppping whtn there was sone dtrama */}
				<Footer className="booje" />
				</div>

			</div>

		</>
	)
}
