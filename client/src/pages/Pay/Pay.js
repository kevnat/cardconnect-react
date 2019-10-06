import React, { Component } from "react";
import Heading from "../../components/Nav/Nav";
import PayFormTwo from "../../components/payFormTwo";
import Footer from "../../components/footer";
// import Tokenizer from "../../components/tokenizer";
// import Col from 'react-bootstrap/Col';


class Pay extends Component {

  render() {
    return (
      <>
        <Heading />
        <br />
        <br />
        <br />


        <div className="container">
          <PayFormTwo/>
        </div>
        <div>
          <Footer/>
        </div>
      </>
    );
  }
}

export default Pay;
