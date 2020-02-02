import React from "react"
import ReactCardFlip from "react-card-flip"
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact"
import Img from "gatsby-image"

class Flipper extends React.Component {
  constructor() {
    super()
    this.state = {
      isFlipped: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
  }

  render() {
    return (
      <ReactCardFlip
        isFlipped={this.state.isFlipped}
        flipDirection="horizontal"
      >
        <MDBCard style={{ marginBottom: "15px" }}>
          {" "}
          <Img fluid={this.props.image}></Img>
          <MDBCardBody>
            <MDBCardTitle>{this.props.name}</MDBCardTitle>
            <MDBCardText>{this.props.description}</MDBCardText>
            <button onClick={this.handleClick}>Read More</button>
          </MDBCardBody>
        </MDBCard>

        <MDBCard style={{ marginBottom: "15px" }}>
          <MDBCardBody>
            <MDBCardText dangerouslySetInnerHTML={{ __html: this.props.text }}></MDBCardText>
            <button onClick={this.handleClick}>Read Less</button>
          </MDBCardBody>
        </MDBCard>
      </ReactCardFlip>
    )
  }
}

export default Flipper
