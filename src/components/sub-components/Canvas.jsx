import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function OffCanvas(prop) {
  const { data, btnName } = prop;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {btnName}
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="off_canvas"
      >
        <Offcanvas.Header closeButton="start">
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{data}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
