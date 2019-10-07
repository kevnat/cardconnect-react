import React, { Component } from "react";
import API from '../../utils/API'

export default class Tokenizer extends Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '',
          token: ''
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    componentDidMount () {
        document.addEventListener('keydown', this.handleHitEnter, true)
      }
      
    
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      let cardNum = this.state.value;
      API.tokenize(cardNum)
        .then(result => {
            this.setState({token: result.data.token})
        }); 
    }
    componentDidUpdate() {
        document.removeEventListener('keydown', this.handleHitEnter, true)
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Card Number:
            <input 
            type="text" 
            value={this.state.value} 
            onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
          <label>
              Token:
            <pre>{this.state.token}</pre>
          </label>
        </form>
      );
    }
  }


/*
 export default function CreditCardForm() {
    const [values, setValues] = React.useState({
      name: "",
      number: "",
      expiration: "",
      cvc: ""
    });
    const handleChange = React.useCallback(
      event => {
        const { name, value } = event.target;
        setValues(v => ({ ...v, [name]: value }));
      },
      [setValues]
    );
  
    const [focused, setFocus] = React.useState<FOCUS_TYPE | undefined>(undefined);
    const handleFocus = React.useCallback(
      event => setFocus(event.target.name as FOCUS_TYPE),
      [setFocus]
    );
    const handleBlur = React.useCallback(() => setFocus(undefined), [setFocus]);
    */