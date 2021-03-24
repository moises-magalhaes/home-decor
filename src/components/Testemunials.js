import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import person01 from "../assets/images/person-01.webp"
import person02 from "../assets/images/person-02.webp"
import person03 from "../assets/images/person-03.webp"



function Testemunials() {
    return (
      <>
        <div className="testemonials">
           <h2>Clients testemonials</h2>
        </div>
        <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={person01}
                      alt="First slide"
              />
              <Carousel.Caption>
                <h3>Adma Traore</h3>
                <p>I came to them with so much dreams and thoughts,
                  and they helped me to choose the living room of my dreams.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={person02}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Georgina Staples</h3>
                <p>I was looking for some smart products for my kid's bedroom, 
                  so that he could have a small studies and game area and a nice bedroom in his small place,
                  then I foud all with them, my boy loves it. Besides, the service is very fast and good.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={person03}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Sandra Cloudnine</h3>
                <p>I never thought I would spend so much time in my couch, 
                  but my living room feels so much nicer with the sofa 
                 and the lights I found in Home Decor.
                 </p>
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
</>
    )
}

export default Testemunials;