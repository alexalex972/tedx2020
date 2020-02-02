import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Scroller from "../components/scroller"
import PortfolioCarousel from "../components/portfolio/carousel"
import "react-multi-carousel/lib/styles.css"
import TeamSlider from "../components/team"
import CarouselPage from "../components/about"
import Speakers from "../components/speakers"

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
    const speakers = data.speakers.nodes
    const speakersinfo = data.speakersinfo.nodes
    return (
      <Layout>
        <section className="page-section-half" id="about">
          <div className="container h-100">
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
          <Speakers images={speakers} current={speakersinfo}></Speakers>
        </section>
        {/* <section id="sponsors">
        <div className="section" style={{backgroundColor: 'white'}} data-anchor="sponsors">
            <div className="container" style={{marginTop: '50px'}}>
                <div className="row">
                    <div className="col-md-4 col-xs-12 sponsor-img"><a href="https://www.11.me/" target="_blank"><img
                                 src={require("../images/logos/eleven.png")}/></a></div>
                    <div className="col-md-4 col-xs-12 sponsor-img"><a href="https://www.zoya.bg/" target="_blank"><img
                                 src={require("../images/logos/zoya.jpg")}/></a></div>
                    <div className="col-md-4 col-xs-12 sponsor-img"><a href="https://technofy.io/" target="_blank"><img
                                className="sponsor-img-tech" 
                                 src={require("../images/logos/technofy.png")}/></a></div>
                    <div className="col-md-6 offset-md-3 col-xs-12 sponsor-img"><a
                            href="https://www.unicreditbulbank.bg/bg/individualni-klienti/" target="_blank"><img
                                 src={require("../images/logos/unicredit.jpg")}/></a></div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-xs-6 sponsor-img "><a href="https://www.telerikacademy.com/"
                            target="_blank"><img  src={require("../images/logos/telerik-academy.png")}/></a></div>
                    <div className="col-md-4 col-xs-6 sponsor-img "><a href="https://www.sitel.com/" target="_blank"><img
                                 src={require("../images/logos/sitel.png")}/></a></div>
                    <div className="col-md-4 col-xs-6 sponsor-img "><a href="https://www.gromahold.bg/" target="_blank"><img
                                className="sponsor-img-tech" 
                                 src={require("../images/logos/gromahold_logo.svg")}/></a></div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-xs-6 sponsor-img "><a href="https://www.siteground.com/"
                            target="_blank"><img  src={require("../images/logos/site-ground.svg")}/></a></div>
                    <div className="col-md-4 col-xs-6 sponsor-img "><a href="https://zaednovchas.bg/" target="_blank"><img
                                 src={require("../images/logos/zaedno.svg")}/></a></div>
                    <div className="col-md-4 col-xs-6 sponsor-img "><a href="https://escreo.com/" target="_blank"><img
                                 src={require("../images/logos/escreo.png")}/></a></div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-xs-6 sponsor-img "><a href="https://www.kookiecat.com/bg/"
                            target="_blank"><img className="sponsor-img-tech" 
                                 src={require("../images/logos/kookie-kat_logo.png")}/></a></div>
                    <div className="col-md-4 col-xs-6 sponsor-img "><a href="https://naturalleaf.io/" target="_blank"><img
                                className="sponsor-img-tech" 
                                 src={require("../images/logos/naturalleaf.png")}/></a></div>
                    <div className="col-md-4 col-xs-6 sponsor-img "><a href="https://www.mondelezinternational.com/"
                            target="_blank"><img className="sponsor-img-tech" 
                                 src={require("../images/logos/mdlz.jpg")}/></a></div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-xs-6 sponsor-img "><a href="https://www.fuzetea.bg/bg/home/"
                            target="_blank"><img className="sponsor-img-tech" 
                                 src={require("../images/logos/fuze.png")}/></a></div>
                    <div className="col-md-4 col-xs-6 sponsor-img "><a href="https://www.bankia.bg/bg/home/"
                            target="_blank"><img className="sponsor-img-tech" 
                                 src={require("../images/logos/Bankia.png")}/></a></div>
                    <div className="col-md-4 col-xs-6 sponsor-img "><a href="https://www.kaufland.bg/" target="_blank"><img
                                className="sponsor-img-tech"   src={require("../images/logos/kl-min.jpg")}/></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-xs-6 sponsor-img "><a href="http://www.innocentstore.bg/"
                            target="_blank"><img  src={require("../images/logos/innocent.jpg")}/></a></div>
                    <div className="col-md-4 col-xs-6 sponsor-img "><a href="https://www.saracakis.bg/" target="_blank"><img
                                 src={require("../images/logos/sigma.png")}/></a></div>
                    <div className="col-md-4 col-xs-6 sponsor-img "><a href="https://www.pwc.bg/" target="_blank"><img
                                className="sponsor-img-tech"   src={require("../images/logos/pwc.png")}/></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 offset-md-3 col-xs-6 sponsor-img "><a href="https://dev.bg/"
                            target="_blank"><img  src={require("../images/logos/dev.bg.png")}/></a></div>
                    <div className="col-md-3 col-xs-6 sponsor-img "><a href="https://www.betahaus.bg/" target="_blank"><img
                                 src={require("../images/logos/betahaus.png")}/></a></div>
                </div>
            </div>
        </div>
        </section> */}
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

    speakers: allFile(filter: { sourceInstanceName: { eq: "speakers" } }) {
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
      filter: {}
      sort: { fields: fileAbsolutePath }
      skip: 3
    ) {
      nodes {
        html
        fileAbsolutePath
        frontmatter {
          title
          description
        }
      }
    }
  }
`
