import React, { Component } from "react";
import { Table } from "reactstrap";

export default class Example extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <h5><strong>Transactions</strong></h5>
        <hr />
        <Table bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Bill Plan</th>
              <th>Date Submitted</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Bill Clinton</td>
              <td>Monthly</td>
              <td>October 11, 2018</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Bill Russell</td>
              <td>Weekly</td>
              <td>October 1, 2018</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Bill Burr</td>
              <td>Annually</td>
              <td>October 5, 2018</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
