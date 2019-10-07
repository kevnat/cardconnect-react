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
        this.handleBlur = this.handleBlur.bind(this);
        
    }

    componentDidMount() {
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    // validateCard(value) {
    //     // Accept only digits, dashes or spaces
    //       if (/[^0-9-\s]+/.test(value)) return false;
      
    //       // The Luhn Algorithm. It's so pretty.
    //       let nCheck = 0, bEven = false;
    //       value = value.replace(/\D/g, "");
      
    //       for (var n = value.length - 1; n >= 0; n--) {
    //           var cDigit = value.charAt(n),
    //                 nDigit = parseInt(cDigit, 10);
      
    //           if (bEven && (nDigit *= 2) > 9) nDigit -= 9;
      
    //           nCheck += nDigit;
    //           bEven = !bEven;
    //       }
    //       console.log(nCheck);
    //       return (nCheck % 10) === 0;
    //   }


    handleBlur(event) {
        event.preventDefault();
        try {
        let cardNum = this.state.value;
            API.tokenize(cardNum)
            .then(result => {
            this.setState({ token: result.data.token })
            return;
        });
        } catch (error) {
            console.log(error);
        }
    }

render() {
    return (
        <form>
            <label>
                Card Number:
            <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                />
            </label>
            <br></br>
            <label>
                Token: <span>{this.state.token}</span>
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