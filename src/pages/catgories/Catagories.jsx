import './catagories.scss'
import { maleCatagory } from '../../data'
import Catitem from './catagoryitem/Catitem'
export default function Catagories({sex,gender}) {
    return (

        <div className="catagory">
            
            <div className="blamegame">
               {/* <span>Catagories</span> */}
                
            </div>
            <div className="lovetoplay">
            {sex.map((item,i)=>(
                <Catitem item={item} id={i} key={i} sex={gender} />
            ))}
            </div>
            
        </div>
    )
}
