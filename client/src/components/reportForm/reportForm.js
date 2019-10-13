import React, { Component } from "react";
import ReactTable from "react-table";
import 'react-table/react-table.css'

class ReportForm extends Component {
  constructor(props) {
    super(props);
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
            onClick: (e, handleOriginal) => {
              // console.log('it produced this event:', e)
              // console.log('It was in this column:', column)
              // console.log('It was in this table instance:', instance)
              console.log('A row was clicked:', rowInfo.row.retref);
              this.state.selectedRowState = rowInfo.row.retref;
              // this.props.getCurrentRow(rowInfo.row.retref);
              console.log(this.state);
              if (handleOriginal) {
                handleOriginal()
              }
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