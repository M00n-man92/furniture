import React from 'react'
import "./third.scss"

export default function Third() {
  return (
    <div className='third'>
      <div className="container">
        <img src="./assets/Gojjam Amhara.jfif" alt="" />
        <div className="infoholder">
          <div className="header">
            <h3>
              Best Fashion Since 2021
            </h3>
          </div>
          <div className="info">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper congue eros, eget tincidunt ipsum eleifend ut orem ipsum dolor sit amet consectetur adipiscing elit Sed ullamcorper congue eros eleifend ut tincidunt ipsum .
            </span>
          </div>
          <div className="values">
            <div className="individual">
              <h3>
                2021
              </h3>
              <span>
                Founded
              </span>
            </div>
            <div className="individual">
              <h3>
                8900 +
              </h3>
              <span>
                Product Sold
              </span>
            </div>
            <div className="individual">
              <h3>
                3105 +
              </h3>
              <span>
                Best Reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
