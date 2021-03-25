import React, { Component } from 'react'
import ReactSwipe from 'react-swipe'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'
import burger from './burger.jpg'
import salad from './salad.jpg'
import acai from './acai_bowl.jpg'
import avocado from './avocado_toast.jpg'
import noodles from './noodle_bowl.jpg'
import pancakes from './pancakes.jpg'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

let reactSwipeEl

class GetDish extends Component {
  constructor (props) {
    super(props)

    this.state = {
      likeButton: false
    }
  }

  handleClick = event => {
    event.preventDefault()
    // set likeButton state to true and redirect to restaurant route
  }

  render () {
    return (
      <div className="dishes">
        <div>
          <ReactSwipe
            className="carousel"
            swipeOptions={{ continuous: false }}
            ref={el => (reactSwipeEl = el)}
          >
            <div className="dish">
              <Image src={burger} alt="Burger"/>
            </div>
            <div className="dish">
              <Image src={salad} alt="Salad"/>
            </div>
            <div className="dish">
              <Image src={acai} alt="Acai Bowl"/>
            </div>
            <div className="dish">
              <Image src={avocado} alt="Avocado Toast"/>
            </div>
            <div className="dish">
              <Image src={noodles} alt="Noodle Bowl"/>
            </div>
            <div className="dish">
              <Image src={pancakes} alt="Pancakes"/>
            </div>
          </ReactSwipe>
          <Row>
            <Col>Really Good Local Food</Col>
            <Col>7.2 Mi</Col>
          </Row>

          <div className="godish-buttons">
            <button onClick={() => reactSwipeEl.next()}>Keep  Dishing</button>
            <Link to={'/restaurant'}>
              <button onClick={() => reactSwipeEl.prev()}>I Like It</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default GetDish
