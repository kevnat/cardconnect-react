import React, { Component, useState } from "react";
import Heading from "../../components/Nav/Nav";
import ReportForm from "../../components/reportForm";
import FooterTwo from "../../components/footerTwo";
import API from "../../utils/API";
import ModalExample from "../../components/modal";


class Report extends Component {
  constructor(props) {
    super(props);
    // function getCurrentRow(rowInfo) {
    //   console.log("got current Row" + rowInfo);
    //   this.props.currentRow = rowInfo;
    // };

    function ManageModal() {
      return <ModalExample 
      initialModalState={false}
      // retRef={}
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
            currentRow={this.state.selectedRowState}
          />
          
        </div>
        <div>
          <FooterTwo />
        </div>
      </React.Fragment>
    );
  }
}

export default Report;
