import { Link } from 'react-router-dom'
import './catitem.scss'

export default function Catitem({ item,id,sex }) {
    return (
        <Link to={`/products/${sex}/${item.cat}`} key={id}>
            <div className="catitem" key={id}>


                <div className="image">
                    <img src={item.img} alt="" />
                </div>
                <div className="title">
                    <h4>{item.name}</h4>
                    <button>Shop Now</button>
                </div>

            </div>
        </Link>
    )
}
