import React, { Component } from 'react'
import './HotelInformation.css'
import purpleDownArrow from '../../static/images/purple-down-arrow.png'
import locationDropIcon from '../../static/images/black-location-drop-icon.png'

export default class HotelInformation extends Component {
  constructor(){
    super()
  }

  formatDescription() {
    let description =  this.props.hotelInformation.description.split("\r\n\r\n").map((val, index) => (
      <div className="margin-bottom-24" key={index}>{val}</div>
    ))


    if(this.props.readMore){
      description.push(
        <div onClick={() => this.props.toggleReadMore()} className="show-full-description"> SHOW LESS DESCRIPTION <img className="down-arrow" src={purpleDownArrow} /></div>
      )
    }else{
      description = description.splice(0, 2)
      description.push(
        <div onClick={() => this.props.toggleReadMore()} className="show-full-description"> SHOW FULL DESCRIPTION <img className="down-arrow" src={purpleDownArrow} /></div>
      )
    }
      return description
  }

  formatDetails() {
    let details = this.props.hotelInformation.details.map((val, index) => (
      <div className="margin-bottom-24" key={index}>
        <div className="detail-label">{val.label}:</div>
        <div className="detail-description">{val.value}</div>
      </div>
    ))

    if(this.props.readMore){
      details.push(
        <div onClick={() => this.props.toggleReadMore()} className="show-full-description"> SHOW LESS DETAILS <img className="down-arrow" src={purpleDownArrow} /></div>
      ) 
    }else{
      details = details.splice(0, 2)
      details.push(
        <div onClick={() => this.props.toggleReadMore()} className="show-full-description"> SHOW FULL DETAILS <img className="down-arrow" src={purpleDownArrow} /></div>
      )
    }
    return details
  }

  formatLocation() {
    return (
      <div>
        <div><img className="location-drop-icon" src={locationDropIcon } />{this.props.hotelInformation.location.address},{this.props.hotelInformation.location.city}, {this.props.hotelInformation.location.state} {this.props.hotelInformation.location.postalCode}</div>
        <img className="location-map" src={this.props.hotelInformation.media[1].href} />
      </div>
    )
  }

  render() {

    let tabContent

    switch (this.props.activeTab) {
      case 1:
        tabContent = (
          <div>{this.formatDetails()}</div>
        )
        break
      case 2:
        tabContent = <div>{this.formatLocation()}</div>
        break
      default:
        tabContent = (
          <div>{this.formatDescription()}</div>
        ) 
        
        break
    }


    return (
      <div id="hotel-information">
        <div className="tabs">
          <div onClick={() => this.props.setActiveTab(0)} className={this.props.activeTab === 0 ? "tab-highlighted tab flex-1" : "tab flex-1"}>
            <span className="tab-name">DESCRIPTION</span>            
          </div>

          <div onClick={() => this.props.setActiveTab(1)} className={this.props.activeTab === 1 ? "tab-highlighted tab flex-1" : "tab flex-1"}>
            <span className="tab-name">DETAILS</span>
          </div>

          <div onClick={() => this.props.setActiveTab(2)} className={this.props.activeTab === 2 ? "tab-highlighted tab flex-1" : "tab flex-1"}>
            <span className="tab-name">LOCATION</span>
          </div>
        </div>
        
        <div className="tab-content">
          {tabContent}
        </div>
      </div>
    )
  }
}