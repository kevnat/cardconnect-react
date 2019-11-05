import React, { Component } from "react";
import ReactTable from "react-table";
import 'react-table/react-table.css';
import API from "../../utils/API";

class ReportForm extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    // tableRef
    this.state = {
      selectedRowState: null
    };
}

  render() {
    return (
      <div>
      <ReactTable
        data={this.props.resp}
        columns={this.props.cols}
        defaultPageSize={15}
        minRows={3}
        filterable={false}
        getTdProps={(state, rowInfo, column, instance) => {
          return {
            onClick: (e, handleModal) => {
              console.log('A row was clicked:', rowInfo.row.retref);
              // working with the below State/props
              // this.props.tableRef = rowInfo.row.retref;
              this.state.selectedRowState = rowInfo.row.retref;
              if (handleModal) {
                handleModal()
              }
              // return rowInfo.row.retref;
            }
          }
        }
      }
      />
      </div>
    );
  }
}

export default ReportForm;