import React, {useState} from 'react'
import StarIcon from '@mui/icons-material/Star'; import "./fourth.scss"
export default function Fourth() {
  const id =[ 0,1,2,3,4]
  const [item, setItem] = useState(0);
  return (
    <div className='fourth'>
      <div className="first">
        <div className="info">
          <h3>Best Seller Product</h3>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper congue eros</span>
          <button>See More</button>
        </div>
        <div className="slider">
          <div className="rotation" style={ {transform: `translateX(${-50 * item}vw)`} }>
            <div className="slidercontainer">
              <img src="./assets/Gojjam Amhara.jfif" alt="" />
              <div className="infocontainer">
                <div className="stars">

                  <StarIcon className='individual' onClick={(e) => { }} style={{ color: "#FFB168", fill: "#FFB168" }} />


                  <StarIcon className='individual' />


                  <StarIcon className='individual' />


                  <StarIcon className='individual' />


                  <StarIcon className='individual' />

                </div>
                <div className="tilte">
                  <span>Product Name</span>
                </div>
                <div className="price">
                  <div className="old">
                    <span>$220</span>
                  </div>
                  <div className="new">
                    <span>$140</span>
                  </div>
                </div>
              </div>

            </div>
            <div className="slidercontainer">
              <img src="./assets/Gojjam Amhara.jfif" alt="" />
              <div className="infocontainer">
                <div className="stars">

                  <StarIcon className='individual' onClick={(e) => { }} style={{ color: "#FFB168", fill: "#FFB168" }} />


                  <StarIcon className='individual' />


                  <StarIcon className='individual' />


                  <StarIcon className='individual' />


                  <StarIcon className='individual' />

                </div>
                <div className="tilte">
                  <span>Product Name</span>
                </div>
                <div className="price">
                  <div className="old">
                    <span>$220</span>
                  </div>
                  <div className="new">
                    <span>$140</span>
                  </div>
                </div>
              </div>

            </div>
            <div className="slidercontainer">
              <img src="./assets/Gojjam Amhara.jfif" alt="" />
              <div className="infocontainer">
                <div className="stars">

                  <StarIcon className='individual' onClick={(e) => { }} style={{ color: "#FFB168", fill: "#FFB168" }} />


                  <StarIcon className='individual' />


                  <StarIcon className='individual' />


                  <StarIcon className='individual' />


                  <StarIcon className='individual' />

                </div>
                <div className="tilte">
                  <span>Product Name</span>
                </div>
                <div className="price">
                  <div className="old">
                    <span>$220</span>
                  </div>
                  <div className="new">
                    <span>$140</span>
                  </div>
                </div>
              </div>

            </div>
            <div className="slidercontainer">
              <img src="./assets/Gojjam Amhara.jfif" alt="" />
              <div className="infocontainer">
                <div className="stars">

                  <StarIcon className='individual' onClick={(e) => { }} style={{ color: "#FFB168", fill: "#FFB168" }} />


                  <StarIcon className='individual' />


                  <StarIcon className='individual' />


                  <StarIcon className='individual' />


                  <StarIcon className='individual' />

                </div>
                <div className="tilte">
                  <span>Product Name</span>
                </div>
                <div className="price">
                  <div className="old">
                    <span>$220</span>
                  </div>
                  <div className="new">
                    <span>$140</span>
                  </div>
                </div>
              </div>

            </div>

          </div>



        </div>
      </div>
      <div className="second">
        <div className="circle">
          <div id={id[0]} className={item===id[0]?"individualcircle own":"individualcircle"} onClick={(e)=>{setItem(0)}}></div>
          <div id={id[1]} className={item===id[1]?"individualcircle own":"individualcircle"} onClick={(e)=>{setItem(1)}}></div>
          <div id={id[2]} className={item===id[2]?"individualcircle own":"individualcircle"} onClick={(e)=>{setItem(2)}}></div>
          <div id={id[3]} className={item===id[3]?"individualcircle own":"individualcircle"} onClick={(e)=>{setItem(3)}}></div>
          <div id={id[4]} className={item===id[4]?"individualcircle own":"individualcircle"} onClick={(e)=>{setItem(4)}}></div>
        </div>
      </div>
    </div>
  )
}
