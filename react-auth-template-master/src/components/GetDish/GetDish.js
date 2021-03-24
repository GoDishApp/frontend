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
        <p>Go Dishing</p>
        <div>
          <ReactSwipe
            className="carousel"
            swipeOptions={{ continuous: false }}
            ref={el => (reactSwipeEl = el)}
          >
            <div className="dish">
              <Image src={burger} alt="Burger"/>
            </div>
            <div>
              <Image src={salad} alt="Salad"/>
            </div>
            <div>
              <Image src={acai} alt="Acai Bowl"/>
            </div>
            <div>
              <Image src={avocado} alt="Avocado Toast"/>
            </div>
            <div>
              <Image src={noodles} alt="Noodle Bowl"/>
            </div>
            <div>
              <Image src={pancakes} alt="Pancakes"/>
            </div>
          </ReactSwipe>
          <Link to={'/restaurant'}>
            <button onClick={() => reactSwipeEl.prev()}>I Like It</button>
          </Link>
          <button onClick={() => reactSwipeEl.next()}>Keep Dishing</button>
        </div>
      </div>
    )
  }
}

export default GetDish
