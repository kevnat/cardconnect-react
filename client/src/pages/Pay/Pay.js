import React, { Component } from "react";
import Heading from "../../components/Nav/Nav";
import PayFormTwo from "../../components/payFormTwo";
import FooterTwo from "../../components/footerTwo";
// import VoidForm from "../../components/voidForm";
// import Tokenizer from "../../components/tokenizer";
// import Col from 'react-bootstrap/Col';


class Pay extends Component {

  render() {
    return (
      <React.Fragment>
        <Heading />
        <br />
        <br />
        <br />


        <div className="container">
          <PayFormTwo/>
        </div>
        <div>
          <FooterTwo />
        </div>
      </React.Fragment>
    );
  }
}

export default Pay;
