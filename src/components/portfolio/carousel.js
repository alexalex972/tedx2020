import React from "react"
import { Link } from "gatsby"
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBContainer, MDBRow 
} from "mdbreact"
import Img from "gatsby-image"

const PortfolioCarousel = ({ posts, current }) => {
  const carouselItems = posts.map(({ node }, index) => (
    <MDBCol key={index} md="4">
      <MDBCard style={{backgroundColor: 'black', color: 'rgba(255, 255, 255, 0.5)'}}>
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
