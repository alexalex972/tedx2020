import React from "react"
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact"

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={2}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
        interval={200000}
        style={{textAlign: 'justify'}}
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <p className="text-white-50 mb-4" style={{paddingBottom: '2rem'}}>
                TED is a non-profit organization devoted to Ideas Worth
                Spreading. Started as a conference in California 32 years ago,
                TED has grown to support those world-changing ideas with many
                initiatives. At a TED conference, the world's leading thinkers
                and doers are asked to give the talk of their lives in 18
                minutes or less. In the spirit of ideas worth spreading, TEDx is
                a program of local, self-organized events that bring people
                together to share a TED-like experience. The TED Conference
                provides general guidance for the TEDx program, but individual
                TEDx events are self-organized.
              </p>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <p className="text-white-50 mb-4" style={{paddingBottom: '2rem'}}>
                In times when every truth has multiple dimensions and our strive
                for innovative ideas is bigger than ever, TEDxAUBG is here to
                make room for the real truth-tellers and change seekers.
                TEDxAUBG: Elusive Truth will be held on April 13 at the Dr. Carl
                Djerrasi Theater Hall (ABF Student Center, Blagoevgrad). In our
                eighth year, we will once again bring together a unique blend of
                local, regional and global speakers - each selected by our team
                to inspire, inform and provoke. We'll include critics and
                skeptics, but also the quiet heroes driving ideas we can rally
                around. And through it all, we'll seek an exciting and
                insightful way forward. The event will start at 11:00am and
                continue until the late afternoon with a lunch and a coffee
                break.
              </p>
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  )
}

export default CarouselPage
