
import Footer from '../footer/Footer'
import Nav from '../nav/Navigation'
import Into from '../newpages/begining/Into'
import Second from "../newpages/second/Second"
import Catagories from "../catgories/Catagories"
import './home.scss'
// import { MaleOutlined, FemaleOutlined, ArrowForwardIosOutlined, ArrowBackIosNewOutlined } from '@mui/icons-material'
// import { Link } from 'react-router-dom'
import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { publicRequest } from '../../requestMethods'
// import Product from '../products/product/Product'
import Fifith from '../newpages/five/Fifith'
import Comments from '../newpages/comments/Comments'
import Newproducts from '../newpages/newproducts/Newproducts'
import Announcemets from '../announcmenet/Announcemets'
import { maleCatagory } from '../../data.js'
export default function Home() {

	// const [productm, setProductm] = useState([])
	// const [itemm, setitemm] = useState(0)

	/* const nion = (digits) => {
		if (digits == "l") {
			itemm !== 0 ? setitemm(itemm - 1) : setitemm(2)
			// console.log(itemm)
		}
		else if (digits == "r") {
			itemm !== 2 ? setitemm(itemm + 1) : setitemm(0)
			console.log(itemm)
		}
	} */
	// console.log(itemm)
	/* useEffect(() => {
		const stuallday = async () => {
			const answer = await publicRequest.get('/product/find/limit/home')
			setProductm(answer.data.data)
		}
		stuallday()
	}, []) */
	return (
		<div className="home">
			<Announcemets />
			<Nav />
			<div className="beautify">
				
				<Into />
				<Second />
				<Catagories sex={maleCatagory} gender="new" />
			</div>
			<Footer />
			{/* <Menu /> */}
		</div>
	)
}
