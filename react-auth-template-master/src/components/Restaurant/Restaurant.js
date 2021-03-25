import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import burger from '../GetDish/burger.jpg'
import maps from './maps.jpg'
import rating from './Rating.jpg'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'

const API = 'https://go-dish-app.herokuapp.com/businesses/business'

class Restaurant extends Component {
  constructor (props) {
    super(props)

    this.state = {
      dataReady: false,
      name: '',
      address: '',
      stars: 0
    }
  }

  handleClick = event => {
    event.preventDefault()
  }

  loadData = () => {
    axios
      .get(API)
      .then(res => {
        const randomRestaurant = res.data[0]
        this.setState({
          dataReady: true,
          name: randomRestaurant.name,
          address: randomRestaurant.address,
          stars: randomRestaurant.stars
        })
        console.log(
          'Success, component did mount! Axios made HTTP request to url and loaded data'
        )
        console.log(this.state)
      })
      .catch(err => {
        console.log('Error! ', err)
      })
  };

  componentDidMount () {
    this.loadData()
  }

  render () {
    return (
      <Container className="restaurant-container">
        <Row className="dish">
          <Image src={burger} alt="Burger" fluid/>
        </Row>
        <Row className="dish">
          <Image src={maps} alt="Maps" fluid/>
        </Row>
        <Row className="rest-info">
          <h3>Really Good Local Restaurant</h3>
        </Row>
        <Row className="rest-info">
          <p>123 Local Business Ave, Austin, TX 90210</p>
        </Row>
        <Row>
          <Col>$$</Col>
          <Col><Image src={rating} alt="Rating" fluid/></Col>
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
