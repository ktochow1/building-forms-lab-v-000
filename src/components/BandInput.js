// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
    // console.log(event.target.value)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
          onChange={this.handleChange} value={this.state.name}>
          
          </input>
          <input type="submit"/>
          {/* <input type="submit">Submit</input> */}
        </form>
      </div>
    )
  }
}

export default BandInput
