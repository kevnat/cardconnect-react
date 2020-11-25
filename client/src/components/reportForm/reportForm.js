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
                return rowInfo.row.retref;
              }
                // this.props = rowInfo.row.retref;
                //to do: consume entire row as json into currentRow prop and parse txnData in modal
                // console.log("this.props=", this.props.getTdProps.rowInfo)
                
                // console.log("this.state=", this.state);
                // return this.props
              // }
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