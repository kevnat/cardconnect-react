// eslint-disable-next-line
import React, { Component, Fragment } from "react";
import Heading from "../../components/Nav/Nav";
import ConfigForm from "../../components/configForm";
import FooterTwo from "../../components/footerTwo";

class Config extends Component {
  render() {
    return (
      <React.Fragment>
        <Heading />
        <br />
        <div class="container">
          <ConfigForm />
        </div>
        <div>
          <FooterTwo />
        </div>
      </React.Fragment>
    );
  }
}

export default Config;
