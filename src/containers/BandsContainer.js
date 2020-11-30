import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'


class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (band) => dispatch({type: 'ADD_BAND', band: band})
  }
}

const mapStateToProps = state => {
  return {
    name: state.name
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
