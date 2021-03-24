import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import burger from '../GetDish/burger.jpg'
import Button from 'react-bootstrap/Button'

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
      <div className="restaurant">
        <p>Restaurant Page</p>
        <div className="dish">
          <Image src={burger} alt="Burger" fluid/>
        </div>
        <div>Google Maps screenshot</div>
        <p>Restaurant Name</p>
        <p>Location</p>
        <div>$$ | Stars</div>
        <div className="modal-buttons">
          <Button variant="outline-secondary">Book</Button>
          <Button variant="outline-secondary">Order</Button>
          <Button variant="outline-secondary">Website</Button>
        </div>
      </div>
    )
  }
}

export default Restaurant
