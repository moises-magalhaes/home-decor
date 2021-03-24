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
            Check our living room products, that will make you feel just at home!
            </Card.Text>
          </Card.Body>
          <a href="/ProductPage" variant="primary" className="btn btn-primary" onclick="goToProducts">Go to products</a>
        </Card>

        <Card>
          <Card.Img variant="top"src={img11} alt="chair 2" />
          <Card.Body>
            <Card.Title>Bedroom</Card.Title>
            <Card.Text>
              Do not miss the cozy feeling that you need 
              to boost your energies, check rather our bedroom products.
            </Card.Text>
          </Card.Body>
          <a href="/ProductPage" variant="primary" className="btn btn-primary" onclick="goToProducts">Go to products</a>
        </Card>
        
        <Card>
          <Card.Img variant="top" src={img10} alt="chair 3" />
          <Card.Body>
            <Card.Title>kitchen</Card.Title>
            <Card.Text>
              We all know that the taste of our food starts with a good taste for a kitchen. 
              So make your kitchen look taste in your tongue.
            </Card.Text>
          </Card.Body>
          <a href="/ProductPage" variant="primary" className="btn btn-primary" onclick="goToProducts">Go to products</a>
        </Card>
      </CardGroup>
    )
}

export default ProductCards
