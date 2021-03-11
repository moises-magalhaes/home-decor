import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import person01 from "../../../assets/images/person-01.webp"
import person02 from "../../../assets/images/person-02.webp"
import person03 from "../../../assets/images/person-03.webp"
import CarouselContainer from "../slide/CarouselContainer"

function Testemunials() {
    return (
      <CarouselContainer>
        <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={person01}
                      alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={person02}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={person03}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </CarouselContainer>

    )
}

export default Testemunials;