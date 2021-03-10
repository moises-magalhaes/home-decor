import React from 'react'
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import img2 from "./images/img-02.webp"
import img3 from "./images/img-03.webp"
import img4 from "./images/img-04.webp"
import styles from "./ProductCards.module.css";
import imageStyles from "./cardImage.module.css";



function ProductCards() {
    return (
        <CardGroup className={styles.ProductCards}>
        <Card>
          <div>
          <Card.Img variant="top" src={img2} alt="chair 1" className={imageStyles.cardImage} />
          </div>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top"src={img3} alt="chair 2" className={imageStyles.cardImage} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={img4} alt="chair 3" className={imageStyles.cardImage} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    )
}

export default ProductCards
