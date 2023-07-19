import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Aude.ai</title>
        <meta property="og:title" content="Aude.ai" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="home-container1"></div>
      <div className="home-banner">
        <div className="home-container2">
          <h1 className="home-text">Be the first to get the latest updates</h1>
          <span className="home-text1">
            <span>
              We are currently still in the stealth startup phase but feel free
              to subscribe
            </span>
            <br></br>
            <span>for future updates on the status of our development.</span>
            <br></br>
          </span>
          <div className="home-container3">
            <input
              type="text"
              placeholder="Email here..."
              className="home-textinput input"
            />
            <button className="home-button button">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
