import React, { Component } from "react";
import ReactTable from "react-table";
import 'react-table/react-table.css'

class ReportForm extends Component {
  render() {
    return (
      <div>
      <ReactTable
        data={this.props.resp}
        columns={this.props.cols}
        defaultPageSize={15}
        minRows={3}
        filterable={false}
      />
      </div>
    );
  }
}

export default ReportForm;