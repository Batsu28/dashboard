import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function OffCanvas({}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        click
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="off_canvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>name</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body></Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
