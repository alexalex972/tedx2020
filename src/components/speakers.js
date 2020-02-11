import React from "react"
import Flipper from "../components/flipper"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"

const Speakers = ({ speakers }) => {
  const speakerItems = speakers.map((node, index) => (
    <MDBCol key={index} md="6" lg="4">
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
