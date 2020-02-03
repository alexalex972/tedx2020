/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.scss"
import {
  MDBMask,
  MDBView,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
} from "mdbreact"

const getScrollNode = element => {
  return (
    element.ownerDocument.scrollingElement ||
    element.ownerDocument.documentElement
  )
}

const isScrolled = element => {
  const scrollNode = getScrollNode(element)
  return scrollNode.scrollTop > 0
}

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.siteContainer = React.createRef()
    this.state = {
      scrolled: false,
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
    const element = this.siteContainer.current
    this.setState({
      scrolled: isScrolled(element),
    })
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll() {
    const element = this.siteContainer.current
    this.setState({
      scrolled: isScrolled(element),
    })
  }

  render() {
    let className = "site-container"
    if (this.props.className) className += ` ${this.props.className}`
    if (this.state.scrolled) className += " navbar-scrolled"

    return (
      <div className={className} ref={this.siteContainer} id="page-top">
        <div id="left"></div>
        <div id="right"></div>
        <div id="top"></div>
        <Header />
        <main className="main">{this.props.children}</main>
        <footer
          className="py-5"
          style={{ backgroundColor: "black" }}
          id="contact"
        >
          >
          <MDBContainer>
            <MDBRow>
            <MDBCol lg="4" className="text-center text-uppercase" style={{ color: "white" }}>
                Escaping the void
              </MDBCol>
              <MDBCol lg="4" className="text-center" style={{ color: "white" }}>
                Copyright &copy; 2019 - TEDxAUBG
              </MDBCol>
              <MDBCol lg="4" className="text-center">
              <MDBIcon fab icon="facebook-f" size="2x" className="mr-5" style={{ color: "white" }} />
              <MDBIcon fab icon="instagram" size="2x" className="mr-5" style={{ color: "white" }} />
              <MDBIcon fab icon="linkedin-in" size="2x" style={{ color: "white" }} />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </footer>
        <div id="bottom"></div>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
