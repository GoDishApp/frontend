import React, { Component } from 'react'
import ReactSwipe from 'react-swipe'
import Image from 'react-bootstrap/Image'
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
      zipcode: '',
      startButton: null
    }
  }

  handleClick = event => {
    event.preventDefault()
  }

  render () {
    return (
      <div className="dishes">
        <p>Compare dishes</p>
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
          <button onClick={() => reactSwipeEl.prev()}>Previous</button>
          <button onClick={() => reactSwipeEl.next()}>Next</button>
        </div>
      </div>
    )
  }
}

export default GetDish
