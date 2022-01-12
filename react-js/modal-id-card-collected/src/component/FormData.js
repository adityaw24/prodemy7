/* eslint-disable no-unused-vars */
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Form, Input, Label, FormGroup } from "reactstrap";
import React, { useState } from "react";
import "./FormData.css";

function FormData(props) {
  const [formUser, setFormUser] = useState([]);
  const [
    user = {
      nama: "",
      tanggalLahir: "",
      job: "",
      gender: "",
      agama: "",
      kontak: "",
      email: "",
      foto: "",
    },
    setUser,
  ] = useState("");

  const handleAvatar = (e) => {
    let src = URL.createObjectURL(e.target.files[0]);
    setUser({ ...user, [e.target.name]: src });
  };

  // const user = {
  //   nama: "",
  //   tanggalLahir: "",
  //   job: "",
  //   gender: "",
  //   agama: "",
  //   kontak: "",
  //   email: "",
  // };

  // console.log(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(e.target.files);
  };

  const handleSubmit = (event) => {
    // Prevent from form submission to server
    event.preventDefault();
    // Gather all data from input
    setFormUser([...formUser, user]);
    setUser(user);
    // const user = {
    //   nama: nama,
    //   tanggalLahir: tanggalLahir,
    //   job: job,
    //   gender: gender,
    //   agama: agama,
    //   kontak: kontak,
    //   email: email,
    //   avatar: avatar,
    // };

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
              value={user.nama}
              onChange={handleChange}
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
              value={user.job}
              onChange={handleChange}
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
              value={user.tanggalLahir}
              onChange={handleChange}
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
                onChange={handleChange}
              />
              <Label check>Male</Label>
            </FormGroup>
            <FormGroup check className="text-start">
              <Input
                name="gender"
                type="radio"
                value="female"
                onChange={handleChange}
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
            <Input
              id="agama"
              name="agama"
              type="select"
              value={user.agama}
              onChange={handleChange}
            >
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
              value={user.kontak}
              onChange={handleChange}
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
              value={user.email}
              onChange={handleChange}
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
