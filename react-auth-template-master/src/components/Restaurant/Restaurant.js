import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
// import burger from '../GetDish/burger.jpg'
import maps from './maps.jpg'
import sickFood from './sickFood.jpg'
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
          <Image src={sickFood} alt="kabab" fluid/>
        </Row>
        <Row id="mapRow" className="dish">
          <Image src={maps} style={ { width: '357px' } } alt="Maps" fluid/>
        </Row>
        <Row className="rest-info">
          <h3>{this.state.name}</h3>
        </Row>
        <Row className="rest-info">
          <p>{this.state.address}</p>
        </Row>
        <Row id="rating-info">
          <Col>$$</Col>
          <Col>♡</Col>
          <Col>Rating: {this.state.stars}/5</Col>
        </Row>
        <Row>
          <div className="modal-buttons rest-info">
            <Button className="buttons leaveButtons" variant="outline-warning">Book</Button>
            <Button className="buttons leaveButtons" variant="outline-warning">Order</Button>
            <Button className="buttons leaveButtons" variant="outline-warning">Website</Button>
          </div>
        </Row>
      </Container>
    )
  }
}

export default Restaurant
