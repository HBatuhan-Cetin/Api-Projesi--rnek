import React, { Component } from 'react'

export default class Fahrenheit extends Component {
  render() {
    return (
      <div class="fahrenheit">Fahrenheit: {(this.props.sicaklik*1.8)+32}</div>
    )
  }
}
