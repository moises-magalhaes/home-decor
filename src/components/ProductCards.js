import React from 'react'
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import sofa from "../assets/images/sofa-small.webp"
import img11 from "../assets/images/img-11.webp"
import img10 from "../assets/images/img-01-changed.webp"


function ProductCards() {
    return (
        <CardGroup>
        <Card>
          <div>
          <Card.Img variant="top" src={sofa} alt="living-room" />
          </div>
          <Card.Body>
            <Card.Title>Living Room</Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Card.Text>
          </Card.Body>
          <a href="/ProductPage" variant="primary" className="btn btn-primary" onclick="goToProducts">Go to products</a>
        </Card>

        <Card>
          <Card.Img variant="top"src={img11} alt="chair 2" />
          <Card.Body>
            <Card.Title>Bedroom</Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Card.Text>
          </Card.Body>
          <a href="/ProductPage" variant="primary" className="btn btn-primary" onclick="goToProducts">Go to products</a>
        </Card>
        
        <Card>
          <Card.Img variant="top" src={img10} alt="chair 3" />
          <Card.Body>
            <Card.Title>kitchen</Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Card.Text>
          </Card.Body>
          <a href="/ProductPage" variant="primary" className="btn btn-primary" onclick="goToProducts">Go to products</a>
        </Card>
      </CardGroup>
    )
}

export default ProductCards
