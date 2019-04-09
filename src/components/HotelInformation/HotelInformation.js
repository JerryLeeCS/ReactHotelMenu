import React, { Component } from 'react'
import './HotelInformation.css'
import purpleDownArrow from '../../static/images/purple-down-arrow.png'
export default class HotelInformation extends Component {
  constructor(){
    super()
    this.setActiveTab = this.setActiveTab.bind(this)
    this.state = {
      activeTab: 0,
      readMore: false
    }
  }

  setActiveTab(tab) {
    this.setState({
      activeTab: tab,
      readMore: false
    })
  }

  formatDescription() {
    const description =  this.props.hotelInformation.description.split("\r\n\r\n").map((val) => (
      <div className="margin-bottom-24">{val}</div>
    ))


    if(this.state.readMore){
      return description
    }else{
      let shortDescription = description.splice(0, 2)
      shortDescription.push(
        <div onClick={() => this.toggleReadMore()} className="show-full-description"> SHOW FULL DESCRIPTION <img className="down-arrow" src={purpleDownArrow} /></div>
      )
      return shortDescription
    }
  }

  formatDetails() {
    const details = this.props.hotelInformation.details.map((val) => (
      <div className="margin-bottom-24">
        <div className="detail-label">{val.label}</div>
        <div className="detail-description">{val.value}</div>
      </div>
    ))

    if(this.state.readMore){
      return details
    }else{
      let shortDetails = details.splice(0, 2)
      shortDetails.push(
        <div onClick={() => this.toggleReadMore()} className="show-full-description"> SHOW FULL DETAILS <img className="down-arrow" src={purpleDownArrow} /></div>
      )
      return shortDetails
    }

  }

  toggleReadMore() {
    this.setState({
      readMore: !this.state.readMore
    })
  }

  render() {

    let tabContent

    switch (this.state.activeTab) {
      case 1:
        tabContent = (
          <div>{this.formatDetails()}</div>
        )
        break
      case 2:
        tabContent = <div>Location</div>
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
          <div onClick={() => this.setActiveTab(0)} className={this.state.activeTab === 0 ? "tab-highlighted tab flex-1" : "tab flex-1"}>
            <span className="tab-name">DESCRIPTION</span>            
          </div>

          <div onClick={() => this.setActiveTab(1)} className={this.state.activeTab === 1 ? "tab-highlighted tab flex-1" : "tab flex-1"}>
            <span className="tab-name">DETAILS</span>
          </div>

          <div onClick={() => this.setActiveTab(2)} className={this.state.activeTab === 2 ? "tab-highlighted tab flex-1" : "tab flex-1"}>
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
