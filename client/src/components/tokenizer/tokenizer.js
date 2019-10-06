import React, { Component } from "react";
import API from '../../utils/API'

export default class Tokenizer extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
      let cardNum = this.state.value;
      API.tokenize(cardNum)
        .then(result => {
            console.log(result);
        }); 
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Card Number:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
          <label>
              Token:
            <pre>4444333322221111</pre>
          </label>
        </form>
      );
    }
  }