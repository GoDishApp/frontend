import React, { Component } from 'react'
// import Image from 'react-bootstrap/Image'

class Restaurant extends Component {
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
      <div className="restaurant">
        <p>Restaurant Page</p>

      </div>
    )
  }
}

export default Restaurant