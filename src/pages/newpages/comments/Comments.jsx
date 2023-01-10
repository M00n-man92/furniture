import React, { useState } from 'react'
import "./comments.scss"
export default function Comments() {
  const id = [0, 1, 2, 3, 4]
  const [item, setItem] = useState(0);
  return (
    <div className='comments'>
      <h3>
        What People Say About Us
      </h3>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper congue eros
      </span>
      <div className="slider">
        <div className="slidercomponenet" style={{ transform: `translateX(${-25 * item}%)` }}>
          <div className="individualcomponent">
            <div className="indi">
              <h3>
                Comfortable and met all my expectations! I ordered a medium and it fit perfectly
              </h3>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus, auctor pretium ac ultrices. Dui lacus dignissim tincidunt urna,
              </span>
              <img src="./assets/Gojjam Amhara.jfif" alt="" />
              <h2>Tantos creative studio</h2>
            </div>
            
          </div>
          <div className="individualcomponent">
            <div className="indi">
              <h3>
                Comfortable and met all my expectations! I ordered a medium and it fit perfectly
              </h3>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus, auctor pretium ac ultrices. Dui lacus dignissim tincidunt urna,
              </span>
              <img src="./assets/Gojjam Amhara.jfif" alt="" />
              <h2>Tantos creative studio</h2>
            </div>
            
          </div>
          <div className="individualcomponent">
            <div className="indi">
              <h3>
                Comfortable and met all my expectations! I ordered a medium and it fit perfectly
              </h3>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus, auctor pretium ac ultrices. Dui lacus dignissim tincidunt urna,
              </span>
              <img src="./assets/Gojjam Amhara.jfif" alt="" />
              <h2>Tantos creative studio</h2>
            </div>
            
          </div>
          <div className="individualcomponent">
            <div className="indi">
              <h3>
                Comfortable and met all my expectations! I ordered a medium and it fit perfectly
              </h3>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus, auctor pretium ac ultrices. Dui lacus dignissim tincidunt urna,
              </span>
              <img src="./assets/Gojjam Amhara.jfif" alt="" />
              <h2>Tantos creative studio</h2>
            </div>
            
          </div>
          <div className="individualcomponent">
            <div className="indi">
              <h3>
                Comfortable and met all my expectations! I ordered a medium and it fit perfectly
              </h3>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus, auctor pretium ac ultrices. Dui lacus dignissim tincidunt urna,
              </span>
              <img src="./assets/Gojjam Amhara.jfif" alt="" />
              <h2>Tantos creative studio</h2>
            </div>
            
          </div>
          
          {/* <div className="individualcomponent">
            <div className="indi">
              <h3>
                Comfortable and met all my expectations! I ordered a medium and it fit perfectly
              </h3>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus, auctor pretium ac ultrices. Dui lacus dignissim tincidunt urna,
              </span>
              <img src="./assets/Gojjam Amhara.jfif" alt="" />
              <h2>Tantos creative studio</h2>
            </div>
            

          </div>
          <div className="individualcomponent">
            <div className="indi">
              <h3>
                Comfortable and met all my expectations! I ordered a medium and it fit perfectly
              </h3>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus, auctor pretium ac ultrices. Dui lacus dignissim tincidunt urna,
              </span>
              <img src="./assets/Gojjam Amhara.jfif" alt="" />
              <h2>Tantos creative studio</h2>
            </div>
            

          </div>
          <div className="individualcomponent">
            <div className="indi">
              <h3>
                Comfortable and met all my expectations! I ordered a medium and it fit perfectly
              </h3>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus, auctor pretium ac ultrices. Dui lacus dignissim tincidunt urna,
              </span>
              <img src="./assets/Gojjam Amhara.jfif" alt="" />
              <h2>Tantos creative studio</h2>
            </div>
            

          </div>
          <div className="individualcomponent">
            <div className="indi">
              <h3>
                Comfortable and met all my expectations! I ordered a medium and it fit perfectly
              </h3>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus, auctor pretium ac ultrices. Dui lacus dignissim tincidunt urna,
              </span>
              <img src="./assets/Gojjam Amhara.jfif" alt="" />
              <h2>Tantos creative studio</h2>
            </div>
            

          </div>
 */}
        </div>
      </div>
      <div className="sliderbuttons" >

        <div className="circle">
          <div id={id[0]} className={item === id[0] ? "individualcircle own" : "individualcircle"} onClick={(e) => { setItem(0) }}></div>
          <div id={id[1]} className={item === id[1] ? "individualcircle own" : "individualcircle"} onClick={(e) => { setItem(1) }}></div>
          <div id={id[2]} className={item === id[2] ? "individualcircle own" : "individualcircle"} onClick={(e) => { setItem(2) }}></div>
          <div id={id[3]} className={item === id[3] ? "individualcircle own" : "individualcircle"} onClick={(e) => { setItem(3) }}></div>
          <div id={id[4]} className={item === id[4] ? "individualcircle own" : "individualcircle"} onClick={(e) => { setItem(4) }}></div>
        </div>
      </div>
    </div>
  )
}
