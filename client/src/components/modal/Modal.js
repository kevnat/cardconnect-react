/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const TxnModal = (props) => {
  const {
    buttonLabel = "Manage",
    retref = "2412412029"
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal)

  return (
    <div>
      <Button 
       color="primary" 
       onClick={toggle}>
       {buttonLabel}
       </Button>
      <Modal 
       isOpen={modal} 
       toggle={toggle} 
      //  retref={retref}
       >
        <ModalHeader 
         toggle={toggle}>
         
        </ModalHeader>
        <ModalBody>
          {retref}
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