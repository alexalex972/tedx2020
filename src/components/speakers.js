import React from "react"
import { Carousel } from "react-bootstrap"
import Img from "gatsby-image"
import { Link } from "gatsby"
import Flipper from "../components/flipper"

const Speakers = ({ images, current }) => {
  const speakerItems = images.map(( node , index) => (
    <div key={index} className="mx-auto col-lg-2 col-md-4">
      <Flipper 
      image={node.childImageSharp.fluid} 
      name={current[index].frontmatter.title}
      description={current[index].frontmatter.description}
      text={current[index].html}
      ></Flipper>
    </div>
  ))

  return (
    <div className="row" style={{ marginLeft: "0", marginRight: "0" }}>
      {speakerItems}
    </div>
  )
}

export default Speakers
