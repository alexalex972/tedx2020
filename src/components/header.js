import React from "react"
import Scrollspy from "react-scrollspy"
import { Navbar, Nav } from "react-bootstrap"
import Scroller from "./scroller"
import Countdown from "../components/Countdown.js"

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
  }

  render() {
    const currentDate = new Date()
    const year =
      currentDate.getMonth() === 11 && currentDate.getDate() > 23
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear()
    return (
      <>
        <Navbar
          className="navbar navbar-expand-lg navbar-dark fixed-top py-3"
          id="mainNav"
          expand="lg"
          collapseOnSelect={true}
        >
          <div className="container">
            <a
              className="navbar-brand js-scroll-trigger"
              style={{ width: "160px", height: "auto" }}
              href="#"
            >
              <img
                className="d-none d-sm-block img-fluid"
                src={require("../images/logo.png")}
              />
            </a>
            <Navbar.Toggle aria-controls="navbarResponsive" />
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav ml-auto my-2 my-lg-0">
                <Scrollspy
                  className="navbar-nav"
                  items={[
                    "about",
                    "speakers",
                    "sponsors",
                    "blog",
                    "team",
                    "contact",
                  ]}
                  currentClassName="active"
                  rootEl={"#mainNav"}
                  offset={-75}
                >
                  <li className="nav-item">
                    <Nav.Link
                      className={"js-scroll-trigger"}
                      href="#about"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      About
                    </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link
                      className={"js-scroll-trigger"}
                      href="#speakers"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      Speakers
                    </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link
                      className={"js-scroll-trigger"}
                      href="#sponsors"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      Sponsors
                    </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link
                      className={"js-scroll-trigger"}
                      href="#blog"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      Blog
                    </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link
                      className={"js-scroll-trigger"}
                      href="#team"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      Team
                    </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link
                      className={"js-scroll-trigger"}
                      href="#contact"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      Contact
                    </Nav.Link>
                  </li>
                </Scrollspy>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <header className="masthead">
          {/* <div className="absolute-landing"><img src={require("../images/element_2.svg")}/></div> */}
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <div className="col-lg-10 mx-auto">
                  <h1 className="text-uppercase text-white font-weight-bold header-text">
                    Escaping the void
                  </h1>
                  <Countdown date={`${year}-04-11T00:00:00`} />
                </div>
                <hr className="divider my-4" />
              </div>
              <div className="col-lg-8 align-self-baseline">
                <p className="text-white-75 font-weight-light mb-5">
                  "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit..." "There is no one who
                  loves pain itself, who seeks after it and wants to have it,
                  simply because it is pain..."
                </p>
                <a
                  className="btn btn-primary btn-xl js-scroll-trigger"
                  href="#about"
                  onClick={Scroller.handleAnchorScroll}
                >
                  Find Out More
                </a>
              </div>
            </div>
          </div>
        </header>
      </>
    )
  }
}
