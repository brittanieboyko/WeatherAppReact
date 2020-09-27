import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";

const GetLocationModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onClick = () => {
    props.onClick();
    handleClose();
  };

  return (
    <>
      {props.loading ? (
        <Button variant="outline-secondary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      ) : (
        <Button variant="outline-secondary" onClick={handleShow}>
          Use My Current Location
        </Button>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Use Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Would you like to see the weather for your current location?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClick}>
            Yes, Use My Location
          </Button>
          <Button variant="primary" onClick={handleClose}>
            No, I'll search for a city instead
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GetLocationModal;
