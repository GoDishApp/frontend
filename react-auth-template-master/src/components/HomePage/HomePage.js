import React, { Component } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import logo from './Serving_dish_icon.jpg'

class HomePage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      zipcode: '',
      startButton: null
    }
  }

  handleInputChange = event => {
    event.persist()
    this.setState({ zipcode: event.target.value })
    console.log(event.target.value)
  }

  handleClick = event => {
    event.preventDefault()
    // const { zipcode } = this.state
    // reroute to the /dishes route
  }

  render () {
    return (
      <div className="homepage">
        <p className="text">
          Let us find something to eat around you.
        </p>
        <div className="dish">
          <Image src={logo} alt="Logo"/>
        </div>
        <div>
          <div className="buttonParent">
            <Button id="allButton" className="buttons">All</Button>
            <Button className="buttons">Vegetarian</Button>
            <Button className="buttons">Vegan</Button>
          </div>
          <InputGroup className="mb-3">
            <FormControl id="zipField"
              name="zip"
              type="text"
              value={this.state.zipcode}
              aria-describedby="basic-addon1"
              placeholder="Enter zipcode ..."
              onChange={this.handleInputChange}
            />
          </InputGroup>
          <Typography id="discrete-slider-small-steps" gutterBottom>
            Distance (Miles)
          </Typography>
          <div className="sliderContainer">
            <Slider
              id="slider"
              defaultValue={10}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={0}
              max={25}
              valueLabelDisplay="auto"
            />
          </div>
          <div>
            <Link to={'/dishes'}>
              <Button variant="outline-secondary" className="buttons" id="startDishingButton">Start Dishing!</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
