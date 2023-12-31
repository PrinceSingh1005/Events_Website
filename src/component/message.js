import React, {Component} from 'react'

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message : 'Welcome visitors'
        }
    }
    changeMessage(){
        this.setState({
            message: 'Thank You'
        })
    }
    render(){
        return (
            <div>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.changeMessage()}>Click Me</button>
            </div>
        )
    }
}

export default Message