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
            <div>
              <Row className="dish">
                <div>
                  <Image src={burger} alt="Burger"/>
                </div>
              </Row>
              <Row className="text">
                <Col>BURGER</Col>
                <Col>7.2 Mi</Col>
              </Row>
            </div>
            <div>
              <Row className="dish">
                <div>
                  <Image src={salad} alt="Salad"/>
                </div>
              </Row>
              <Row className="text">
                <Col>SALAD</Col>
                <Col>7.2 Mi</Col>
              </Row>
            </div>
            <div>
              <Row className="dish">
                <div>
                  <Image src={acai} alt="Acai"/>
                </div>
              </Row>
              <Row className="text">
                <Col>ACAI</Col>
                <Col>7.2 Mi</Col>
              </Row>
            </div>
            <div>
              <Row className="dish">
                <div>
                  <Image src={avocado} alt="Avocado"/>
                </div>
              </Row>
              <Row className="text">
                <Col>AVOCADO</Col>
                <Col>7.2 Mi</Col>
              </Row>
            </div>
            <div>
              <Row className="dish">
                <div>
                  <Image src={noodles} alt="Noodles"/>
                </div>
              </Row>
              <Row className="text">
                <Col>NOODLE</Col>
                <Col>7.2 Mi</Col>
              </Row>
            </div>
            <div>
              <Row className="dish">
                <div>
                  <Image src={pancakes} alt="Pancakes"/>
                </div>
              </Row>
              <Row className="text">
                <Col>PANCAKE</Col>
                <Col>7.2 Mi</Col>
              </Row>
            </div>
          </ReactSwipe>

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
