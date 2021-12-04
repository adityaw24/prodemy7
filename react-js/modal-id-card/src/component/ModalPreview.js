/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from "react";
import { Button, Modal, ModalBody, Row, Col, CardImg } from "reactstrap";

const ModalPreview = (props) => {
  const [modal, setModal] = useState(props.modalState);
  const toggle = () => {
    setModal(!modal);
  };

  if (props.modalState === true) {
    console.log(props.userData);
  }

  return (
    <div>
      <Button color="dark" className="w-100" onClick={toggle}>
        Preview
      </Button>
      <Modal
        centered
        scrollable
        size="lg"
        isOpen={modal}
        toggle={toggle}
        className={props.className}
      >
        {/* <ModalHeader toggle={toggle} className="bborder-0">Modal title</ModalHeader> */}
        <ModalBody style={{ background: "#e9ecef" }}>
          <Row className="p-3">
            <Col sm={4} className="align-self-center">
              <CardImg
                alt="avatar"
                className="img-fluid"
                src={props.userData.avatar}
              />
            </Col>
            <Col sm={8} className="bg-light p-3">
              <Row>
                <Col sm={12} className="mb-4 text-center">
                  <h5 className="fw-bold mb-2">{props.userData.nama}</h5>
                  <p className="mb-0">{props.userData.job}</p>
                </Col>
                <Col sm={4} className="mb-3">
                  <p className="mb-0">Birthdate</p>
                </Col>
                <Col sm={8} className="mb-3">
                  <p className="mb-0">: {props.userData.tanggalLahir}</p>
                </Col>
                <Col sm={4} className="mb-3">
                  <p className="mb-0">Gender</p>
                </Col>
                <Col sm={8} className="mb-3">
                  <p className="mb-0">: {props.userData.gender}</p>
                </Col>
                <Col sm={4} className="mb-3">
                  <p className="mb-0">Religion</p>
                </Col>
                <Col sm={8} className="mb-3">
                  <p className="mb-0">: {props.userData.agama}</p>
                </Col>
                <Col sm={4} className="mb-3">
                  <p className="mb-0">Phone Number</p>
                </Col>
                <Col sm={8} className="mb-3">
                  <p className="mb-0">: {props.userData.kontak}</p>
                </Col>
                <Col sm={4} className="mb-3">
                  <p className="mb-0">Email</p>
                </Col>
                <Col sm={8} className="mb-3">
                  <p className="mb-0">: {props.userData.email}</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalPreview;
