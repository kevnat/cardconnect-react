/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const TxnModal = (props) => {
  //function txnModal contains the following props:
  const { 
    buttonLabel = "Manage", 
    testProp = "test prop",
    retref = "txnModal's retref prop"
  } = props;

  //below are state variables
  const [showModal, setShow, modalData] = useState(false);

  const toggle = () => setShow(!showModal)

  // const populateModal = () => modalData(this.props.retref)

  return (
    <div>
      <Button
        color="primary"
        onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal
        isOpen={showModal}
        toggle={toggle}
        >
        <ModalHeader
          toggle={toggle}>

        </ModalHeader>
        <ModalBody>
          {testProp}
          
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={toggle}>Void/Refund
          </Button>
          <Button
            color="secondary"
            onClick={toggle}>Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default TxnModal;