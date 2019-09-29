import React, { Component } from "react";
import { Container, Footer, } from "mdbreact";

export default class FooterTwo extends Component {
render() {
return (
<Footer color="indigo" style={{ position: "absolute", width: "100%", bottom: "0" }}>
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