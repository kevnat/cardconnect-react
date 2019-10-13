import React, { Component, useState } from "react";
import Heading from "../../components/Nav/Nav";
import ReportForm from "../../components/reportForm";
import FooterPage from "../../components/footer";
import API from "../../utils/API";
import ModalExample from "../../components/modal";


class Report extends Component {
  constructor(props) {
    super(props);
    function ActionCell({ value, columnProps: { rest: { showModal } } }) {
      // return <a href = 
      // return <button onClick={showModal}>Manage</button>
      return <ModalExample initialModalState={false} />
    }
    this.state = {
      columns: [
      {
        Header: 'Action',
        Cell: ActionCell,
        getProps:() => ({ showModal: () => 
          // display a modal with txn details, void button and refund button
          // <TxnModal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}></TxnModal>
          alert("clicked")
        }),
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
