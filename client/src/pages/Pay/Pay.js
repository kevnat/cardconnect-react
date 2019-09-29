import React, { Component } from "react";
import Heading from "../../components/Nav/Nav";
import PayFormTwo from "../../components/payFormTwo";
// import Panel from "../../components/card";
// import CardText from "../../components/cardtext"
import FooterPage from "../../components/footer";

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
          <FooterPage />
        </div>
      </>
    );
  }
}

export default Pay;
