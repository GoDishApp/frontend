import React, { Component } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'

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
  }

  render () {
    return (
      <div className="homepage">
        <p>Home Page Loaded</p>
        <div>
          <Button>Vegetarian?</Button>
          <Button>Vegan?</Button>
          <InputGroup className="mb-3" >
            <InputGroup.Prepend>
              <Button variant="outline-secondary">Start</Button>
            </InputGroup.Prepend>
            <FormControl
              name="zip"
              type="text"
              value={this.state.zipcode}
              aria-describedby="basic-addon1"
              placeholder="Type in your zipcode"
              onChange={this.handleInputChange}
            />
          </InputGroup>
          <Typography id="discrete-slider-small-steps" gutterBottom>
            Small steps
          </Typography>
          <Slider
            defaultValue={10}
            aria-labelledby="discrete-slider-small-steps"
            step={1}
            marks
            min={0}
            max={25}
            valueLabelDisplay="auto"
          />
        </div>
      </div>
    )
  }
}

export default HomePage
