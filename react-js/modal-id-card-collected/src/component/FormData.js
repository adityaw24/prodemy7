/* eslint-disable no-unused-vars */
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Form, Input, Label, FormGroup } from "reactstrap";
import React, { useState } from "react";
import "./FormData.css";

function FormData(props) {
  const [nama, setNama] = useState("");
  const handleNama = (e) => {
    setNama(e.target.value);
  };

  // eslint-disable-next-line no-unused-vars
  const [tanggalLahir, setTanggalLahir] = useState("");
  const handleTanggalLahir = (e) => {
    setTanggalLahir(e.target.value);
  };

  const [job, setJob] = useState("");
  const handleJob = (e) => {
    setJob(e.target.value);
  };

  const [kontak, setKontak] = useState("");
  const handleKontak = (e) => {
    setKontak(e.target.value);
  };

  const [gender, setGender] = useState("");
  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const [agama, setAgama] = useState("");
  const handleAgama = (e) => {
    setAgama(e.target.value);
  };

  const [email, setEmail] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const [avatar, setAvatar] = useState("");
  const handleAvatar = (e) => {
    if (e.target.files.length > 0) {
      let src = URL.createObjectURL(e.target.files[0]);
      setAvatar(src);
    }
  };

  // const user = {
  //   nama: nama,
  //   tanggalLahir: tanggalLahir,
  //   job: job,
  //   gender: gender,
  //   agama: agama,
  //   kontak: kontak,
  //   email: email,
  // };

  // console.log(user);

  const handleSubmit = (event) => {
    // Prevent from form submission to server
    event.preventDefault();
    // Gather all data from input
    const user = {
      nama: nama,
      tanggalLahir: tanggalLahir,
      job: job,
      gender: gender,
      agama: agama,
      kontak: kontak,
      email: email,
      avatar: avatar,
    };

    props.submitData(user);
  };

  return (
    <div>
      <Form
        className="needs-validation mb-2"
        action="#"
        onSubmit={handleSubmit}
      >
        <h4 className="fw-bold text-center mb-4">Form Data</h4>
        <FormGroup row>
          <Label for="nama" sm={4}>
            Name
          </Label>
          <Col sm={8}>
            <Input
              id="nama"
              name="nama"
              placeholder="Enter Your Name"
              type="text"
              onChange={handleNama}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="job" sm={4}>
            Job
          </Label>
          <Col sm={8}>
            <Input
              id="job"
              name="job"
              placeholder="Enter Your Job"
              type="text"
              onChange={handleJob}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="tglLahir" sm={4}>
            Birthdate
          </Label>
          <Col sm={8}>
            <Input
              id="tanggalLahir"
              name="tanggalLahir"
              type="date"
              onChange={handleTanggalLahir}
            />
          </Col>
        </FormGroup>
        <FormGroup row tag="fieldset">
          <legend className="col-form-label col-sm-4 text-start">Gender</legend>
          <Col sm={8}>
            <FormGroup check className="text-start">
              <Input
                name="gender"
                type="radio"
                value="male"
                onChange={handleGender}
              />
              <Label check>Male</Label>
            </FormGroup>
            <FormGroup check className="text-start">
              <Input
                name="gender"
                type="radio"
                value="female"
                onChange={handleGender}
              />
              <Label check>Female</Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="agama" sm={4}>
            Religion
          </Label>
          <Col sm={8}>
            <Input id="agama" name="agama" type="select" onChange={handleAgama}>
              <option>-</option>
              <option value="islam">Islam</option>
              <option value="kristen">Kristen</option>
              <option value="katolik">Katolik</option>
              <option value="hindu">Hindu</option>
              <option value="budha">Budha</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="kontak" sm={4}>
            Phone Number
          </Label>
          <Col sm={8}>
            <Input
              id="kontak"
              name="kontak"
              placeholder="Enter Your Phone Number"
              type="text"
              onChange={handleKontak}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="email" sm={4}>
            Email
          </Label>
          <Col sm={8}>
            <Input
              id="email"
              name="email"
              placeholder="Enter Your Email"
              type="email"
              onChange={handleEmail}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="email" sm={4}>
            Photo
          </Label>
          <Col sm={8}>
            <Input
              id="foto"
              name="foto"
              type="file"
              accept="image/*"
              onChange={handleAvatar}
            />
          </Col>
        </FormGroup>
        <Button color="primary w-100">Submit</Button>
      </Form>
    </div>
  );
}
export default FormData;
