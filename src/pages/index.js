import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Scroller from "../components/scroller"
import PortfolioCarousel from "../components/portfolio/carousel"
import "react-multi-carousel/lib/styles.css"
import TeamSlider from "../components/team"
import CarouselPage from "../components/about"
import Speakers from "../components/speakers"
import Helmet from 'react-helmet'

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0,
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this)
    this.setModal = this.setModal.bind(this)
  }
  handleClick(e) {
    e.preventDefault()
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
  }

  handlePortfolioClick(index, e) {
    e.preventDefault()
    this.setModal(true, index)
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current,
    })
  }

  render() {
    const { data } = this.props
    const posts = data.posts.edges
    const images = data.team.nodes
    const speakersinfo = data.speakersinfo.nodes
    
    return (
      <Layout>
        <Helmet><script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script></Helmet>
        <section className="page-section" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4">
                <img
                  className="d-none d-sm-block img-fluid"
                  src={require("../images/unnn.png")}
                />
              </div>
              <div className="col-lg-8">
                <h2 className="text-white" style={{ textAlign: "center" }}>
                  About
                </h2>
                <hr className="divider light my-4" />
                <CarouselPage></CarouselPage>
              </div>
            </div>
          </div>
        </section>
        <section
          className="page-section"
          style={{ paddingTop: "10rem" }}
          id="blog"
        >
          <div className="container">
            <PortfolioCarousel posts={posts} />
          </div>
        </section>
        <section className="page-section" id="team">
          <div className="container">
            <TeamSlider images={images} />
          </div>
        </section>
        <section className="page-section" id="speakers">
          <Speakers speakers={speakersinfo}></Speakers>
        </section>
        <section id="sponsors">
        </section>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { featuredImage: { name: { regex: "/blogpost/" } } }
      }
      limit: 3
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    team: allFile(filter: { sourceInstanceName: { eq: "team" } }) {
      nodes {
        relativePath
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    speakersinfo: allMarkdownRemark(
      filter: {
        frontmatter: { featuredImage: { name: { regex: "/speaker/" } } }
      }
    ) {
      nodes {
        html
        frontmatter {
          title
          description
          featuredImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
