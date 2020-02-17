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
    const speakersinfo = data.speakersinfo.nodes
    
    return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>TEDxAUBG</title>
          <link rel="canonical" href="https:/tedxaubg.com" />
        </Helmet>
        <Helmet><script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script></Helmet>
        <section className="page-section" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  className="d-none d-sm-block img-fluid d-flex align-items-center"
                  src={require("../images/x.png")}
                />
              </div>
              <div className="col-md-8">
              <h1 className="text-uppercase text-white font-weight-bold header-text text-center">
                About
              </h1>
                <hr className="divider light my-4" />
                <CarouselPage></CarouselPage>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section" id="speakers">
        <h1 className="text-uppercase text-white font-weight-bold header-text text-center">
                Speakers
              </h1>
              <hr className="divider light my-4" />
          <Speakers speakers={speakersinfo}></Speakers>
        </section>
        <section className="page-section" id="team">
          <div className="container">
          <h1 className="text-uppercase text-white font-weight-bold header-text text-center">
                Team
              </h1>
              <hr className="divider light my-4" />
            <TeamSlider></TeamSlider>
          </div>
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
    speakersinfo: allMarkdownRemark(
      filter: {
        frontmatter: { featuredImage: { name: { regex: "/speaker/" } } }
      }, sort: { fields: [frontmatter___date], order: DESC }
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
