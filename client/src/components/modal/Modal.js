/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const {
    buttonLabel = "Manage",
    className,
    retRef
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
       className={className}>
        <ModalHeader 
         toggle={toggle}>
         
        </ModalHeader>
        <ModalBody 
        // retRef={this.props.retRef}
        >
          {/* {this.props.retRef} */}
          Test
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Void/Refund</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;