import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import burger from '../GetDish/burger.jpg'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Restaurant extends Component {
  constructor (props) {
    super(props)

    this.state = {
      bookButton: null,
      orderButton: null,
      websiteButton: null
    }
  }

  handleClick = event => {
    event.preventDefault()
  }

  render () {
    return (
      <Container className="restaurant-container">
        <Row className="dish">
          <Image src={burger} alt="Burger" fluid/>
        </Row>
        <Row>
          <div>Google Maps screenshot</div>
        </Row>
        <Row className="rest-info">
          <p>Restaurant Name</p>
        </Row>
        <Row className="rest-info">
          <p>Location</p>
        </Row>
        <Row>
          <Col>$$</Col>
          <Col>Stars</Col>
        </Row>
        <Row>
          <div className="modal-buttons">
            <Button variant="outline-warning">Book</Button>
            <Button variant="outline-warning">Order</Button>
            <Button variant="outline-warning">Website</Button>
          </div>
        </Row>
      </Container>
    )
  }
}

export default Restaurant
