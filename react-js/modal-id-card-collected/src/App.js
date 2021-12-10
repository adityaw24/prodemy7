import "./App.css";
import React, { useState } from "react";
import { Container } from "reactstrap";
import FormData from "../src/component/FormData";
import ModalPreview from "./component/ModalPreview";

function App() {
  const [userData, setUserData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [number, setNumber] = useState(0);
  const toggle = () => {
    setModalShow(!modalShow);
  };

  // Gather data from Form component and set modalShow to true
  const handleSubmitData = (userDataForm) => {
    setUserData((prevState) => {
      return [
        ...prevState,
        {
          ...userDataForm,
          number: String(number),
        },
      ];
    });
    setNumber(number + 1);
    setModalShow(true);
  };

  const handleResetData = () => {
    setUserData("");
    setModalShow(false);
  };

  console.log(modalShow);
  console.log(userData);

  return (
    <Container fluid>
      <div
        className="mx-auto my-4 bg-light rounded-3 border p-5"
        style={{
          width: "45%",
        }}
      >
        <FormData submitData={handleSubmitData} onClick={toggle} />{" "}
        <div className="row">
          <div className="col-6">
            {" "}
            {modalShow && (
              <ModalPreview
                user={userData}
                modalShow={modalShow}
                // initialModalState={false}
              />
            )}{" "}
          </div>{" "}
          <div className="col-6">
            <button className="btn btn-danger w-100" onClick={handleResetData}>
              Reset Data{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </Container>
  );
}

export default App;
