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
      zipcode: null,
      startButton: null
    }
  }

  render () {
    return (
      <div className="homepage">
        <p>Home Page Loaded</p>
        <div>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <Button variant="outline-secondary">Button</Button>
            </InputGroup.Prepend>
            <FormControl aria-describedby="basic-addon1" />
          </InputGroup>
          <Button>Vegetarian?</Button>
          <Button>Vegan?</Button>
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
