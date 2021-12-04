import "./App.css";
import React, { useState } from "react";
import { Container } from "reactstrap";
import FormData from "../src/component/FormData";
import ModalPreview from "./component/ModalPreview";

function App() {
  const [userData, setUserData] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const toggle = () => {
    setModalShow(!modalShow);
  };

  // Gather data from Form component and set modalShow to true
  const handleSubmitData = (userDataForm) => {
    setUserData(userDataForm);
    setModalShow(true);
  };

  return (
    <Container fluid>
      <div
        className="mx-auto my-4 bg-light rounded-3 border p-5"
        style={{ width: "45%" }}
      >
        <FormData submitData={handleSubmitData} onClick={toggle} />
        <ModalPreview
          userData={userData}
          modalShow={modalShow}
          // initialModalState={false}
        />
      </div>
    </Container>
  );
}

export default App;
