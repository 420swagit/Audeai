import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './header.css'

const Header = (props) => {
  return (
    <div className={`header-container ${props.rootClassName} `}>
      <div className="header-container1">
        <Link to="/" className="header-navlink">
          <h1 className="header-text">{props.heading1}</h1>
        </Link>
      </div>
      <div className="header-container2">
        <Link to="/about" className="header-navlink1">
          {props.text6}
        </Link>
        <Link to="/who-we-are" className="header-navlink2">
          {props.text7}
        </Link>
      </div>
    </div>
  )
}

Header.defaultProps = {
  text7: 'Who We Are',
  text6: 'About',
  heading1: 'Aude.ai',
  text3: 'Text',
  text5: 'Text',
  text1: 'Who We Are',
  text4: 'Text',
  text2: 'Text',
  heading: 'Aude.ai',
  text: 'About',
  rootClassName: '',
}

Header.propTypes = {
  text7: PropTypes.string,
  text6: PropTypes.string,
  heading1: PropTypes.string,
  text3: PropTypes.string,
  text5: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
  text2: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Header
