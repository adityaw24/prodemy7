import "./App.css";
import React, { useState } from "react";
import { Container } from "reactstrap";
import FormData from "../src/component/FormData";
import ModalPreview from "./component/ModalPreview";

function App() {
  const [userData, setUserData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [number, setNumber] = useState(0);
  // const toggle = () => {
  //   setModalShow(!modalShow);
  // };

  // Gather data from Form component and set modalShow to true
  const handleSubmitData = (userData) => {
    setUserData((prevState) => {
      return [
        ...prevState,
        {
          ...userData,
          number: String(number),
        },
      ];
    });
    setNumber(number + 1);
    setModalShow(true);
  };

  const handleResetData = () => {
    setUserData([]);
  };

  // const closeHandler = () => {
  //   setModalShow(false);
  // };

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
        <FormData submitData={handleSubmitData} />
        <button className="btn btn-danger w-100 mb-3" onClick={handleResetData}>
          Reset Data
        </button>
        {modalShow && (
          <ModalPreview
            user={userData}
            // modalShow={modalShow}
            // onClick={toggle}
            // initialModalState={false}
          />
        )}
      </div>
    </Container>
  );
}

export default App;
