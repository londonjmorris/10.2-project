import React, { Component } from 'react';

import ChildComponent from './../components/ChildComponent';
import DisplayComponent from './../components/DisplayComponent';


export default class ParentComponent extends Component {
  constructor(props){
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      whatToSay: "",
      whatWasSaid: "",
    }
  }
  handleInput(e) {
    e.preventDefault();
    this.setState({
      whatToSay: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      whatWasSaid: this.state.whatToSay,
      whatToSay: ''
    });
  }
  render() {
    return (
      <div>Smart Component: I have a function, but something isn't working? I also need to pass that function to the ChildComponent.
        <div>
          <input onChange={this.handleInput} type="text" placeholder="Say It, Don't Spray It!" value={this.state.whatToSay}/>
        </div>
        <div>
          <ChildComponent onClick={ this.handleSubmit }/>
          <DisplayComponent whatWasSaid={ this.state.whatWasSaid } />
        </div>
      </div>
    );
  }
}
