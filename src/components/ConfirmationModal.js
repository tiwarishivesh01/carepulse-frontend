import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmationModal = ({ show, onConfirm, onCancel, title, message }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleConfirm = () => {
    setConfirmLoading(true);
    onConfirm();
  };

  return (
    <Modal show={show} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleConfirm} disabled={confirmLoading}>
          {confirmLoading ? 'Confirming...' : 'Confirm'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;