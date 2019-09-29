import React, { Component } from "react";
import { Container, Footer, } from "mdbreact";

export default class FooterPage extends Component {
  render() {
    return (
      <Footer color="indigo">
        <div className="text-center py-3">
          <Container>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="/home/">ReactPay</a>
          </Container>
        </div>
      </Footer>
    );
  }
}
