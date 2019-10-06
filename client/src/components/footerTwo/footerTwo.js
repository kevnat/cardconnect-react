import React, { Component } from "react";
import { Container, Footer, } from "mdbreact";

export default class FooterTwo extends Component {
render() {
return (
<Footer color="indigo" style={{ position: "absolute", width: "100%", bottom: "0" }}>
  <div className="text-center py-3">
    <Container>
      &copy; {new Date().getFullYear()} cardconnect.app {" "}
      <a href="/Pay/">Pay</a>
    </Container>
  </div>
</Footer>
);
}
}