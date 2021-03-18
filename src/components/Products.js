import React from 'react'
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import img2 from "../assets/images/img-02.webp"
import img3 from "../assets/images/img-03.webp"
import img4 from "../assets/images/img-04.webp"
import chair from "../assets/images/chair-blur.webp"


function Products() {
    return (
    < div className="products">
        <h2>Products</h2>
        <CardGroup>
        <Card>
          <div>
          <Card.Img variant="top" src={img2} alt="living-room" />
          </div>
          <Card.Body>
            <Card.Title>product 01</Card.Title>
          </Card.Body>
            <Card.Text>
                kr: 2500,00
            </Card.Text>
            <a href="/ProductPage" variant="primary" className="btn btn-primary" onclick="goToProducts">Go to products</a>
        </Card>
        <Card>
          <div>
          <Card.Img variant="top" src={img3} alt="living-room" />
          </div>
          <Card.Body>
            <Card.Title>product 02</Card.Title>
          </Card.Body>
          <Card.Text>
                kr: 2500,00
            </Card.Text>
            <a href="/ProductPage" variant="primary" className="btn btn-primary" onclick="goToProducts">Go to products</a>
        </Card>

        <Card>
          <div>
          <Card.Img variant="top" src={img4} alt="living-room" />
          </div>
          <Card.Body>
            <Card.Title>product 03</Card.Title>
           
          </Card.Body>
          <Card.Text>
                kr: 2500,00
            </Card.Text>
            <a href="/ProductPage" variant="primary" className="btn btn-primary" onclick="goToProducts">Go to products</a>
        </Card>
        
      </CardGroup>

      <CardGroup>
        <Card>
          <div>
          <Card.Img variant="top" src={img2} alt="living-room" />
          </div>
          <Card.Body>
            <Card.Title>product 01</Card.Title>
          </Card.Body>
          <Card.Text>
                kr: 2500,00
            </Card.Text>
            <a href="/ProductPage" variant="primary" className="btn btn-primary" onclick="goToProducts">Go to products</a>
        </Card>
        <Card>
          <div>
          <Card.Img variant="top" src={chair} alt="living-room" />
          </div>
          <Card.Body>
            <Card.Title>product 02</Card.Title>
          </Card.Body>
          <Card.Text>
                kr: 2500,00
            </Card.Text>
            <a href="/ProductPage" variant="primary" className="btn btn-primary" onclick="goToProducts">Go to products</a>
        </Card>

        <Card>
          <div>
          <Card.Img variant="top" src={img4} alt="living-room" />
          </div>
          <Card.Body>
            <Card.Title>product 03</Card.Title>
           
          </Card.Body>
          <Card.Text>
                kr: 2500,00
            </Card.Text>
            <a href="/ProductPage" variant="primary" className="btn btn-primary" onclick="goToProducts">Go to products</a>
        </Card>

    
      </CardGroup>
    </div>
  )


}

export default Products
