import React, { Component } from 'react'
import './App.css'
import getAllHotels from './api/getAllHotels.js'
import getHotelInformation from './api/getHotelInformation.js'
import venetians from './api/venetian.json'
import HotelList from './components/HotelList/HotelList.js'
import HotelProfile from './components/HotelProfile/HotelProfile.js'
import HotelInformation from './components/HotelInformation/HotelInformation.js'
import leftButtonIcon from './static/images/purple-left-arrow.png'

class App extends Component {
  constructor(){
    super();
    this.getAllHotels = this.getAllHotels.bind(this)
    this.getHotelInformation = this.getHotelInformation.bind(this)
    this.setActiveTab = this.setActiveTab.bind(this)
    this.toggleReadMore = this.toggleReadMore.bind(this)
    this.state = {
      hotelList: [],
      hotelInformation: venetians,
      activeTab: 0,
      readMore: false
    }
  }

  componentWillMount(){
    this.getAllHotels()
    this.getHotelInformation('venetian')
  }

  async getAllHotels() {
    const result = await getAllHotels()
    this.setState({
      hotelList: result
    })
  }

  async getHotelInformation(hotelTag){
    const result = await getHotelInformation(hotelTag)
    this.setState({
      hotelInformation: result
    })
  }

  setActiveTab(tab) {
    this.setState({
      activeTab: tab,
      readMore: false
    })
  }

  toggleReadMore() {
    this.setState({
      readMore: !this.state.readMore
    })
  }

  render() {
    return (
      <div className="App">
        <div className="paper-container">
          <div className="grid-layout">
            <div className="top-navigation-bar purple-text clickable">
              <span><img className="back-icon" src={leftButtonIcon} />SEE ALL LAS VEGAS</span>
            </div>
            <div className="left-col">
              <img className="hotel-profile-picture" src={this.state.hotelInformation.media[0].href} />
              <HotelList list={this.state.hotelList} />
            </div>
            <div className="right-col">
              <HotelProfile setActiveTab={this.setActiveTab} hotelInformation={this.state.hotelInformation} /> 
              <HotelInformation
              activeTab={this.state.activeTab}
              readMore={this.state.readMore} 
              hotelInformation={this.state.hotelInformation}
              setActiveTab={this.setActiveTab}
              toggleReadMore={this.toggleReadMore}
               />
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App
