import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Aude.ai</title>
        <meta property="og:title" content="About - Aude.ai" />
      </Helmet>
      <Header rootClassName="header-root-class-name1"></Header>
      <div className="about-banner">
        <h1 className="about-text">Our Mission</h1>
        <span className="about-text1">
          <span>
            We are a startup operating in stealth mode, co-founded by Keith Jia,
            Siva Dosapoti, and Mark Monroe @fromtheculture. Our collective
            mission is to foster a sense of fulfillment within workplace
            communities.
          </span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <span>
            Throughout our professional journeys, transitioning from engineers
            to managers and directors, we have encountered a range of
            experiences in various company settings, both large and small. These
            experiences have been a mix of positive and negative, fueling our
            belief that there is ample room for improvement. We firmly assert
            that enhancing certain aspects of the workplace can bring immense
            benefits to employees across all levels, from entry-level to the
            C-suite. By fostering a stronger sense of community and
            productivity, we aim to transform companies into places where
            members of this community feel a sense of fulfilment. This is what
            keeps us up at night.
          </span>
        </span>
      </div>
    </div>
  )
}

export default About
