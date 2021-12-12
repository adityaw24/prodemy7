/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from "react";
import { Button, Modal, ModalBody, Row, Col, CardImg } from "reactstrap";

const ModalPreview = (props) => {
  const [modal, setModal] = useState(props.modalShow);
  const dataLength = props.user.length;
  const toggle = () => {
    setModal(!modal);
  };

  if (modal === true) {
    console.log(props.user);
  }

  return (
    <div>
      <Button color="dark" className="w-100" onClick={toggle}>
        Preview
      </Button>
      <Modal
        centered
        // scrollable
        size="lg"
        isOpen={modal}
        toggle={toggle}
        className={props.className}
        length={dataLength}
        style={{ backgroundColor: "transparent" }}
      >
        {/* <ModalHeader toggle={toggle} className="bborder-0">Modal title</ModalHeader> */}
        {props.user.map((user) => (
          <ModalBody
            number={user.number}
            length={dataLength}
            style={{ background: "transparent" }}
          >
            <Row className="p-3">
              <Col sm={4} className="align-self-center">
                <CardImg alt="avatar" className="img-fluid" src={user.avatar} />
              </Col>
              <Col sm={8} className="bg-light p-3">
                <Row>
                  <Col sm={12} className="mb-4 text-center">
                    <h5 className="fw-bold mb-2">{user.nama}</h5>
                    <p className="mb-0">{user.job}</p>
                  </Col>
                  <Col sm={4} className="mb-3">
                    <p className="mb-0">Birthdate</p>
                  </Col>
                  <Col sm={8} className="mb-3">
                    <p className="mb-0">: {user.tanggalLahir}</p>
                  </Col>
                  <Col sm={4} className="mb-3">
                    <p className="mb-0">Gender</p>
                  </Col>
                  <Col sm={8} className="mb-3">
                    <p className="mb-0">: {user.gender}</p>
                  </Col>
                  <Col sm={4} className="mb-3">
                    <p className="mb-0">Religion</p>
                  </Col>
                  <Col sm={8} className="mb-3">
                    <p className="mb-0">: {user.agama}</p>
                  </Col>
                  <Col sm={4} className="mb-3">
                    <p className="mb-0">Phone Number</p>
                  </Col>
                  <Col sm={8} className="mb-3">
                    <p className="mb-0">: {user.kontak}</p>
                  </Col>
                  <Col sm={4} className="mb-3">
                    <p className="mb-0">Email</p>
                  </Col>
                  <Col sm={8} className="mb-3">
                    <p className="mb-0">: {user.email}</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </ModalBody>
        ))}
      </Modal>
    </div>
  );
};

export default ModalPreview;
