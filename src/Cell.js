import React, { Component } from 'react';

export default class Cell extends Component {

  // You'd need to pass props to super() if you want to be able to access the this.props attribute within the constructor.
  // This has to do with the initialisation of the component, and how React handles that
  // But directly accessing props from the constructor argument is fine, but ONLY in the constructor

  // 1st way
  constructor(props) {
    super(props)
    this.state = {
      //sate.color is initially set to the value prop passed from Matrix 
      color: this.props.value
    }
  }

  // 2nd way
  // constructor(props) {
  //   super()
  //   this.state = {
  //     //sate.color is initially set to the value prop passed from Matrix 
  //     color: props.value
  //   }
  // }

  handleClick = () => {
    this.setState(
      {
        color: '#333'
      }
    )
  }

  render() {
    return (
      <div className="cell" onClick={this.handleClick}
        style={{ backgroundColor: this.state.color }}>
      </div>
    )
  }
}
