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
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact"
import { Animated } from "react-animated-css"

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
          <MDBContainer style={{marginBottom: '2rem'}}>
            <MDBRow>
              <MDBCol lg="12" className="text-center social-links">
                <a
                  className="facebook-icon"
                  href="https://www.facebook.com/TEDxAUBG/"
                  target="_blank"
                >
                  <MDBIcon fab icon="facebook-f" size="2x" className="mr-5" />
                </a>
                <a
                  className="linkedin-icon"
                  href="https://www.linkedin.com/company/tedxaubg/"
                  target="_blank"
                >
                  <MDBIcon fab icon="instagram" size="2x" className="mr-5" />
                </a>
                <a
                  className="insta-icon"
                  href="https://www.instagram.com/tedxaubg/?hl=bg"
                  target="_blank"
                >
                  <MDBIcon fab icon="linkedin-in" size="2x" />
                </a>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <MDBContainer style={{marginBottom: '2rem'}}>
            <MDBRow>
              <MDBCol
                lg="12"
                className="text-center text-uppercase"
                style={{ color: "white" }}
              >
                <Animated
                  animationIn="bounceInLeft"
                  animationOut="fadeOut"
                  isVisible={true}
                >
                  <a
                    className="navbar-brand js-scroll-trigger"
                    style={{ width: "210px", height: "auto", marginRight: '0px' }}
                    href="#"
                  >
                    <img
                      className="d-sm-block img-fluid"
                      src={require("../images/logo.png")}
                    />
                  </a>
                  <div className="sub-title sub-fade-in animated fadeInDownBig delay-0.5s">ESCAPING THE VOID</div>
                </Animated>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <MDBContainer style={{marginBottom: '2rem'}}>
            <MDBRow>
              <MDBCol
                lg="12"
                className="text-center"
                style={{ color: "white",     fontFamily: "'Karla', sans-serif", textTransform: 'uppercase'}}
              >
                Copyright &copy; 2020 - TEDxAUBG
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
