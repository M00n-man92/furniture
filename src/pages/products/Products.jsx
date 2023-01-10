import './products.scss'
// import { filteredproducts } from '../../data'
import Product from './product/Product'
import { useEffect, useState, useRef } from 'react'
import { publicRequest } from '../../requestMethods'
import { fetchProducts } from '../../redux/apiCall'
import { useDispatch } from 'react-redux'
export default function Products({ cat, sex, sort, filter }) {
	// console.log(sex)
	const [products, setProducts] = useState([])
	const [filters, setFilters] = useState([])
	const dispatch = useDispatch();
	// console.log(sex)
	/* const socartis = {
		g: ["/assets/logo.jpg", "/assets/kanye1.jpg",
			"/assets/kanye2.jpg",
			"/assets/kanye3.jpg"
		]
		, h: ["/assets/kanye10.jpg", "/assets/kanye4.jpg",
			"/assets/kanye5.jpg",
			"/assets/kanye6.jpg"],
		i: ["/assets/kanye11.jpg", "/assets/kanye7.jpg",
			"/assets/kanye8.jpg"
			, "/assets/kanye9.jpg"],
		key: function (n) {
			return this[Object.keys(this)[n]];
		}
	} */
	/* const [problesm, setProblesm] = useState(0)
	const hello = (hundi) => {
		return socartis.key(hundi - 1)
	} */
	// const interval = setInterval(() => {

	//     setProblesm(problesm+1)
	//     if (problesm == 4) {setProblesm(1)}
	//     console.log(problesm)

	// }, 8000)
	// const slider=()=>{
	//     
	//     setTimeout(slider,5000)
	// }
	const [itemm, setitemm] = useState(0)
	const autoPlay = useRef()
	useEffect(() => {
		autoPlay.current = heandler
	})
	// setInterval(()=>heandler("r"),8000)
	useEffect(() => {
		const andle = () => {
			autoPlay.current()
		}
		// andle()
	  setInterval(andle, 4000)

	}, [])

	const heandler = () => {

		// else if (digits == "r") {
		itemm !== 3 ? setitemm(itemm + 1) : setitemm(0)
		// console.log(itemm)
		// }
	}
	useEffect(() => {
		const fun = async () => {
			try {
				console.log(sex,cat)
				// const reply = await fetchProducts(dispatch,sex,cat)
				// console.log(reply)
				const reply = await publicRequest.get(sex && cat ? `product/find?sex=${sex}&catagory=${cat}` : sex ? `product/find?sex=${sex}` : cat ? `product/find?catagory=${cat}` : 'product/find')
				const res = reply.data
				setProducts(res.data)
			}
			catch (e) {
				console.log(e)
			}
		}
		fun()

	}, [cat, sex])
	useEffect(() => {
		cat && setFilters(products.filter(item =>
			Object.entries(filter).every(([key, value]) =>

				item[key].includes(value)

			)))
	}, [cat, filter, products])
	// console.log(products)
	useEffect(() => {
		if (sort === "newest") {
			setFilters(prev =>
				[...prev].sort((a, b) => a.createdAt - b.createdAt))
		}
		else if (sort === "asc") {
			setFilters(prev =>
				[...prev].sort((a, b) => a.price - b.price))
		}
		else {
			setFilters(prev =>
				[...prev].sort((a, b) => b.price - a.price))
		}
	}, [sort])

	return (
		<div className="still">
				<div className="products">
					{cat ? filters.map((items, i) => (
						<Product items={items} toss={i + 45} />
					)) : products.map((items, i) => (<>
						<Product items={items} toss={i + 434} />
					</>
					))}
				</div>
		</div>

	)
}
