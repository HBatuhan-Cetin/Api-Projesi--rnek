import React, { Component } from 'react'

export default class Kelvin extends Component {
  render() {
    return (
      <div class="kelvin">Kelvin: {(this.props.sicaklik +273.15)}</div>
    )
  }
}
