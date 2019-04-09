import React, { Component } from 'react'
import './HotelInformation.css'
export default class HotelInformation extends Component {
  constructor(){
    super()
    this.setActiveTab = this.setActiveTab.bind(this)
    this.state = {
      activeTab: 0
    }
  }

  setActiveTab(tab) {
    this.setState({
      activeTab: tab
    })
  }

  render() {

    let tabContent

    switch (this.state.activeTab) {
      case 1:
        tabContent = <div>Details</div>
        break
      case 2:
        tabContent = <div>Location</div>
        break
      default:
        tabContent = <div>Description</div>
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
