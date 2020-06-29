import React, {Component} from "react"

class Cell extends Component{
// Initialize the state with a key of 'color'
// Whose value is the value' prop passed from Matrix
    constructor(props){
        super();
        this.state = {color: props.value}
    }

//Update the state to the following hex value: '#333'
    handleClick = () => {
        return this.setState({
            color: '#333'
        })
    }

//Use inline CSS to style the div using the color key in state
//Create a click listener which, when activated, updates the state
render(){
    return(
        <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleClick}> </div>
    )
}
}

export default Cell;