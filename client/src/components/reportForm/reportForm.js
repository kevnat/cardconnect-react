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
        retref={this.props.retref}
        filterable={false}
        getTdProps={(state, rowInfo, column, instance) => {
          return {
            onClick: (e, handleModal) => {
              // working with the below State/props
              // this.props.retref = rowInfo.row.retref;
              // let retref = rowInfo.row.retref
              this.state.selectedRowState = rowInfo.row.retref;
              if (handleModal) {
                handleModal()
                console.log('A row was clicked:', rowInfo.row.retref);
                console.log(this.state);
              }
              return rowInfo.row.retref;
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