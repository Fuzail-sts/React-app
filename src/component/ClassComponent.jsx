import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            dec:100

        }
    }

    handleChange=()=>{
        this.setState({dec:this.state.dec-2})
    }
    render() {
        return (
            <div style={{textAlign:'center'}}>
          <p>dec:{this.state.dec}</p> 
            <button onClick={()=>{this.handleChange()}}>DEC</button>
            </div>
        )
    }
}
