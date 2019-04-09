import React from '../../../node_modules/react'
import './HotelList.css'

export default function HotelList(props) {
  return (
    <div id="hotel-list">
      {props.list.map((val,index) => (
          <div className="hotel-item" key={index}>
              <div className="hotel-name">{val.name}</div>
              <div className="hotel-price">${val.price}</div>
          </div>
      ))}
    </div>
  )
}
