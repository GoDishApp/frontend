import React, { Component } from 'react'

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
      </div>
    )
  }
}

export default GetDish
