import React, { Component } from "react";
import Heading from "../../components/Nav/Nav";
import BoltForm from "../../components/BoltForm";
import Footer from "../../components/footer";
// import VoidForm from "../../components/voidForm";
// import Tokenizer from "../../components/tokenizer";
// import Col from 'react-bootstrap/Col';


class Bolt extends Component {

  render() {
    return (
      <>
        <Heading />
        <br />
        <br />
        <br />


        <div className="container">
          <BoltForm/>
        </div>
        <div>
          <Footer/>
        </div>
      </>
    );
  }
}

export default Bolt;
