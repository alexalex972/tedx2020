import React from "react"
import { Link } from "gatsby"
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBContainer, MDBRow 
} from "mdbreact"
import Img from "gatsby-image"

const PortfolioCarousel = ({ posts, current }) => {
  const carouselItems = posts.map(({ node }, index) => (
    <MDBCol key={index} lg="4">
      <MDBCard>
      <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid}></Img>
        <MDBCardBody>
          <MDBCardTitle>
            <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
              {node.frontmatter.title}
            </Link>
          </MDBCardTitle>
          <MDBCardText dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  ))

  return (
    <MDBContainer>
      <MDBRow>{carouselItems}</MDBRow>
    </MDBContainer>
  )
}

export default PortfolioCarousel
