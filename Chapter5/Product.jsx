import { Container, Row, Col } from 'react-bootstrap'
import Rating from './Rating'

const Product = (props) => {
  return (
    <Container style={{ width: 500, marginTop: 5 }}>
      <Row>
        <Col xs="auto">
          <img
            width={64}
            height={64}
            src={props.data.imageUrl}
            alt={props.data.productName}
          />
        </Col>
        <Col>
          <h5>{props.data.productName}</h5>
          {props.data.releasedDate}
          <Rating
            rating={props.data.rating}
            numOfReviews={props.data.numOfReviews}
          />
          <p>{props.data.description}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Product
