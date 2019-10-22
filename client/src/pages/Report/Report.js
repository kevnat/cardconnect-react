import React, { Component, useState } from "react";
import Heading from "../../components/Nav/Nav";
import ReportForm from "../../components/reportForm";
import FooterPage from "../../components/footer";
import API from "../../utils/API";
import ModalExample from "../../components/modal";


class Report extends Component {
  constructor(props) {
    super(props);
    // function getCurrentRow(rowInfo) {
    //   console.log("got current Row" + rowInfo);
    //   this.props.currentRow = rowInfo;
    // };

    function ManageModal({ 
      // data, 
      // columnProps: { rest: { showModal } } 
    }) {
      return <ModalExample 
      initialModalState={false}
      // retRef={this.getTdProps}
      />
    }
    this.state = {
      columns: [
      {
        Header: 'Action',
        Cell: ManageModal,
        width: 115
      },
      {
        Header: 'RetRef',
        accessor: 'retref',
        width: 135
      },
      {
        Header: 'GUID',
        accessor: '_id'
      },
      {
        Header: 'createdAt',
        accessor: 'createdAt'
      },
      {
        Header: 'Amount',
        accessor: 'amount'
      },
      {
        Header: 'RespText',
        accessor: 'resptext'
      },
      {
        Header: 'CommCard',
        accessor: 'commcard'
      },
      {
        Header: 'CvvResp',
        accessor:'cvvresp'
      },
      {
        Header: 'AvsResp',
        accessor: 'avsresp'
      },
      {
        Header: 'RespCode',
        accessor: 'respcode'
      },
      {
        Header: 'EntryMode',
        accessor: 'entrymode'
      },
      {
        Header: 'MerchId',
        accessor: 'merchid'
      },
      {
        Header: 'Token',
        accessor: 'token'
      },
      {
        Header: 'AuthCode',
        accessor: 'authcode'
      },
      {
        Header: 'Processor',
        accessor: 'respproc'
      },
      {
        Header: 'BinType',
        accessor: 'bintype'
      },
      {
        Header: 'RespStat',
        accessor: 'respstat'
      },
      {
        Header: 'Account',
        accessor: 'account'
      }],
      data: []
    };
  }
  
componentDidMount() { 
  //call API put result in state
  // console.log("component did mount!");
  API.getReport()
  .then(result => {
    this.setState({
      data: result.data},() => 
        console.log(this.state.data))
  })
  .catch(error => {
    console.log(error);
    throw error;
  })
}

voidActivity() {

  API.void()
  .then(result => {

  })

}

  render() {
    // const report = this.props.report;
    return (
      <React.Fragment>
        <Heading />
        <br />
        <br />
        <br />
        <div className="container">
          <ReportForm 
            resp={this.state.data}
            cols={this.state.columns}
            // currentRow={this.getCurrentRow}
          />
          
        </div>
        <div>
          <FooterPage />
        </div>
      </React.Fragment>
    );
  }
}

export default Report;
