import React, { Component } from 'react'

class Day4 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            MAX: 99,
            MIN: 0
        }
    }

    // when updaing a state best practice is to use arrow function

    updateState() {
        this.setState((prev) => ({
            count: prev.count + 1
        }))
    }


    setCount(c) {
        this.setState({
            count: c
        }, () => console.log("CallbackValue = ", this.state.count))

    }

    resetCount() {
        this.setCount(0);
    }


    incrementCount() {
        if (this.state.count != this.state.MAX) {
            this.setCount(this.state.count + 1);
        }
    }

    decrementCount() {
        if (this.state.count != this.state.MIN) {
            this.setCount(this.state.count - 1);
        }
    }

    render() {
        return (
            <div>
                <p>{this.props.children}</p>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.incrementCount()}>+</button>
                <button onClick={() => this.decrementCount()}>-</button>
                <button onClick={() => this.resetCount()}>reset</button>
            </div>
        )
    }
}

export default Day4
