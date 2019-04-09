import './HotelProfile.css'
import React from '../../../node_modules/react'
import greyStarIcon from '../../static/images/grey-star.png'
import locationDropIcon from '../../static/images/grey-location-drop-icon.png'
import phoneIcon from '../../static/images/phone-icon.png'
import thumbsUpIcon from '../../static/images/thumbs-up.png'

export default function HotelProfile(props) {

  return (
    <div id="hotel-profile">
      <div className="flex-container flex-horizontal">
        <div className="left-col">
          <div className="flex-container flex-horizontal">
            <div id="hotel-name">{props.hotelInformation.name.toUpperCase()}</div>
            <div className="star-container">{[...Array(Math.ceil(props.hotelInformation.starRating))].map((e, i) => (
              <img className="grey-star icon" src={greyStarIcon} />
            ))}
            </div>
          </div>
          <div className="flex-container flex-horizontal">
            <div className="margin-right-8">
              <img className="icon" src={locationDropIcon} />
              {props.hotelInformation.location.areaName}
            </div>

            <div className="margin-right-8">
              <img className="icon" src={phoneIcon} />
              {props.hotelInformation.phoneNumber}
            </div>

            <div className="margin-right-8">
              <img className="icon" src={thumbsUpIcon} />
              Best Price Guranteed
            </div>
          </div>
        </div>

        <div className="right-col">
          <div id="hotel-price">${props.hotelInformation.price}</div>
          <div>HOTEL ROOMS FROM</div>
        </div>
      </div>
    </div>
  )
}
