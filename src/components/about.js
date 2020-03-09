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
        showControls={false}
        showIndicators={true}
        className="z-depth-1"
        interval={200000}
        style={{ textAlign: "justify" }}
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <p
                className="text-white-50 mb-4"
                style={{ paddingBottom: "2rem" }}
              >
                <a
                  href="https://www.ted.com/about/programs-initiatives/tedx-program?fbclid=IwAR3f_kFdm5WQ8p9xVDCXgSv80_vkcaIRbIwmGm68CYsLr0k_5smNQtpFzn8"
                  target="_blank"
                >
                  TEDx
                </a>{" "}
                is a grassroots initiative, created in the spirit of TED’s
                overall mission to research and discover “ideas worth
                spreading.” TEDx brings the spirit of TED to local communities
                around the globe via “rules and tools”. TEDx events are
                organized by passionate individuals who seek to uncover new
                ideas and the latest research in their local areas and spark
                conversations in their communities. TEDx events include live
                speakers and recorded TED Talks, and are organized independently
                under a free license granted by TED. These events are not
                controlled by TED, but event organizers agree to abide by our
                format, and are offered guidelines for curation, speaker
                coaching, event organizing and more. They learn from us and from
                each other. More than 3000 events are now held annually.
              </p>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <p
                className="text-white-50 mb-4"
                style={{ paddingBottom: "2rem" }}
              >
                TEDxAUBG is a student club founded in 2012 by a group of idea
                seekers from the American University in Bulgaria. Each spring we
                organize a TED-like conference where we gather speakers from all
                around the world. We celebrate human ingenuity by exploring
                ideas, innovation, and creativity through mind-shifting talks.
                Our goal is to disconnect from the noise, connect with
                each-other and spark conversations, build relationships, and
                share insights.
              </p>
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  )
}

export default CarouselPage
