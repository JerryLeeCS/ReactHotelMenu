import React, { Component } from 'react'
import './App.css'
import getAllHotels from './api/getAllHotels.js'
import hotels from './api/hotels.json'
import venetians from './api/venetian.json'
import HotelList from './components/HotelList/HotelList.js'
import HotelProfile from './components/HotelProfile/HotelProfile.js'
import HotelInformation from './components/HotelInformation/HotelInformation.js'
import VenetianPicture from './static/images/venetian.jpg'

class App extends Component {
  constructor(){
    super();
    this.getAllHotels = this.getAllHotels.bind(this)
    this.state = {
      hotelList: [],
      hotelInformation: venetians
    }
  }

  componentWillMount(){
    this.getAllHotels()
  }

  async getAllHotels() {
    const result = await getAllHotels()
    this.setState({
      hotelList: result
    })
  }

  render() {
    return (
      <div className="App">
        <div className="paper-container">
          <div className="grid-layout">
            <div className="top-navigation-bar purple-text">
              <span>SEE ALL LAS VEGAS</span>
            </div>
            <div className="left-col">
              <img className="hotel-profile-picture" src={VenetianPicture} />
              <HotelList list={this.state.hotelList} />
            </div>
            <div className="right-col">
              <HotelProfile hotelInformation={this.state.hotelInformation} /> 
              <HotelInformation hotelInformation={this.state.hotelInformation} />
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App
