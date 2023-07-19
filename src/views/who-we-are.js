import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './who-we-are.css'

const WhoWeAre = (props) => {
  return (
    <div className="who-we-are-container">
      <Helmet>
        <title>Who-We-Are - Aude.ai</title>
        <meta property="og:title" content="Who-We-Are - Aude.ai" />
      </Helmet>
      <Header rootClassName="header-root-class-name2"></Header>
      <div className="who-we-are-testimonial">
        <h1 className="who-we-are-text">Our founders</h1>
        <span className="who-we-are-text01">
          <span>
            The team was formed with members with experience from various
            companies such
          </span>
          <br></br>
          <span>as Meta, Amazon, JPMorgan Chase, and FromTheCulture</span>
          <br></br>
        </span>
        <div className="who-we-are-container1">
          <header className="who-we-are-testimonial-card">
            <svg viewBox="0 0 1024 1024" className="who-we-are-icon">
              <path d="M800 640c-123.712 0-224-100.29-224-224 0-123.712 100.288-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.634-11.636 22.252-24.016 31.83-37.020-11.438 1.8-23.16 2.746-35.104 2.746zM224 640c-123.71 0-224-100.29-224-224 0-123.712 100.29-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.636-11.636 22.254-24.016 31.832-37.020-11.44 1.8-23.16 2.746-35.106 2.746z"></path>
            </svg>
            <div className="who-we-are-testimonial1">
              <span className="who-we-are-text06">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                lorem lorem, malesuada in metus vitae, scelerisque accumsan
                ipsum. Nam pellentesque nulla leo, sagittis vehicula sem commodo
                nec.
              </span>
              <img
                alt="image"
                src="/keithpfp-200h.jpg"
                loading="eager"
                className="who-we-are-image"
              />
              <span className="who-we-are-text07">Keith Jia</span>
            </div>
          </header>
          <header className="who-we-are-testimonial-card1">
            <svg viewBox="0 0 1024 1024" className="who-we-are-icon2">
              <path d="M800 640c-123.712 0-224-100.29-224-224 0-123.712 100.288-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.634-11.636 22.252-24.016 31.83-37.020-11.438 1.8-23.16 2.746-35.104 2.746zM224 640c-123.71 0-224-100.29-224-224 0-123.712 100.29-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.636-11.636 22.254-24.016 31.832-37.020-11.44 1.8-23.16 2.746-35.106 2.746z"></path>
            </svg>
            <div className="who-we-are-testimonial2">
              <span className="who-we-are-text08">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                lorem lorem, malesuada in metus vitae, scelerisque accumsan
                ipsum. Nam pellentesque nulla leo, sagittis vehicula sem commodo
                nec.
              </span>
              <img
                alt="image"
                src="/sivapfp-200h.jpg"
                className="who-we-are-image1"
              />
              <span className="who-we-are-text09">Siva Dosapoti</span>
            </div>
          </header>
          <header className="who-we-are-testimonial-card2">
            <svg viewBox="0 0 1024 1024" className="who-we-are-icon4">
              <path d="M800 640c-123.712 0-224-100.29-224-224 0-123.712 100.288-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.634-11.636 22.252-24.016 31.83-37.020-11.438 1.8-23.16 2.746-35.104 2.746zM224 640c-123.71 0-224-100.29-224-224 0-123.712 100.29-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.636-11.636 22.254-24.016 31.832-37.020-11.44 1.8-23.16 2.746-35.106 2.746z"></path>
            </svg>
            <div className="who-we-are-testimonial3">
              <span className="who-we-are-text10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                lorem lorem, malesuada in metus vitae, scelerisque accumsan
                ipsum. Nam pellentesque nulla leo, sagittis vehicula sem commodo
                nec.
              </span>
              <img
                alt="image"
                src="/markpfp-200h.jpg"
                className="who-we-are-image2"
              />
              <span className="who-we-are-text11">Mark Monroe</span>
            </div>
          </header>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre
