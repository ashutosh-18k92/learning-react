import React, {Component} from 'react'


// JSX Functions are pure - no mutation is allowed 
class Welcome extends Component{
    render(){
        return <div>
            <h1>Day: 2</h1>
            <h2>Welcome {this.props.firstName} {this.props.lastName} </h2>
            {this.props.children}
        </div>
    }
}
export default Welcome