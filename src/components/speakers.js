import React from "react"
import { Carousel } from "react-bootstrap"
import Img from "gatsby-image"
import { Link } from "gatsby"
import Flipper from "../components/flipper"
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact"

const Speakers = ({ speakers }) => {
  const speakerItems = speakers.map((node, index) => (
    <MDBCol key={index} lg="4">
      <Flipper
        image={node.frontmatter.featuredImage.childImageSharp.fluid}
        name={node.frontmatter.title}
        description={node.frontmatter.description}
        text={node.html}
      ></Flipper>
    </MDBCol>
  ))

  return (
    <MDBContainer>
      <MDBRow>{speakerItems}</MDBRow>
    </MDBContainer>
  )
}

export default Speakers
