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
} from "mdbreact"

const PortfolioCarousel = ({ posts, current }) => {
  const carouselItems = posts.map(({ node }, index) => (
    <div className="col-log-4" style={{marginBottom: '1rem'}} key={index}>
    <MDBCol style={{ maxWidth: "22rem" }}>
      <MDBCard>
        <MDBCardImage
          className="img-fluid"
          src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
          waves
        />
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
    </div>
  ))

  return (
    <div className="row" style={{margin: '0 auto'}}>{carouselItems}</div>
  )
}

export default PortfolioCarousel
