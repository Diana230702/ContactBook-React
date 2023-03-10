import { useState } from "react";
import { FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AddContact = ({ handleClose, show, handleAddContacts }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  function handleAdd() {
    if (!name || !surname || !email || !number) {
      alert("inputs are empty");
      return;
    }
    let newObj = {
      name,
      surname,
      email,
      number,
      id: Date.now(),
    };
    handleAddContacts(newObj);
    console.log(newObj);
    setName("");
    setEmail("");
    setNumber("");
    setSurname("");
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="m-2 "
            placeholder="Enter name"
          />
          <FormControl
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className="m-2 "
            placeholder="Enter surname"
          />
          <FormControl
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="m-2 "
            placeholder="Enter email"
          />
          <FormControl
            value={number}
            className="m-2 "
            placeholder="enter number"
            onChange={(e) => setNumber(e.target.value)}
            er="Enter phone number"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddContact;
