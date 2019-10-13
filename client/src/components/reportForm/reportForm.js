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
        getTdProps={(state, rowInfo, column, instance) => {
          return {
            onClick: (e, handleOriginal) => {
              console.log('A Td Element was clicked!')
              console.log('it produced this event:', e)
              console.log('It was in this column:', column)
              console.log('It was in this row:', rowInfo)
              console.log('It was in this table instance:', instance)
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