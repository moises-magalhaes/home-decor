import React from 'react'
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import img5 from "../assets/images/img-05.webp"
import img11 from "../assets/images/img-11.webp"
import img10 from "../assets/images/img-01-changed.webp"
import Button from "react-bootstrap/Button";



function Products() {
    return (
        <CardGroup>
        <Card>
          <div>
          <Card.Img variant="top" src={img5} alt="living-room" />
          </div>
          <Card.Body>
            <Card.Title>Living Room</Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Card.Text>
          </Card.Body>
          <Button variant="primary">Go to Products</Button>{' '}
        </Card>

        <Card>
          <Card.Img variant="top"src={img11} alt="chair 2" />
          <Card.Body>
            <Card.Title>Bedroom</Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Card.Text>
          </Card.Body>
          <Button variant="primary">Go to Products</Button>{' '}
        </Card>
        
        <Card>
          <Card.Img variant="top" src={img10} alt="chair 3" />
          <Card.Body>
            <Card.Title>kitchen</Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Card.Text>
          </Card.Body>
          <Button variant="primary">Go to products</Button>{' '}
        </Card>
      </CardGroup>
    )
}

export default Products
