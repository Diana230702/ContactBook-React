import React, { useEffect, useState } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";

const EditContact = ({
  showEditModal,
  handleEditClose,
  handleSave,
  editContact,
}) => {
  let [contactToEdit, setContactToEdit] = useState("");
  useEffect(() => {
    setContactToEdit(editContact);
  }, [editContact]);

  const EditName = (e) => {
    let newObj = {
      ...contactToEdit,
      name: e.target.value,
    };
    setContactToEdit(newObj);
  };

  const EditSurname = (e) => {
    let newObj = {
      ...contactToEdit,
      surname: e.target.value,
    };
    setContactToEdit(newObj);
  };

  const EditEmail = (e) => {
    let newObj = {
      ...contactToEdit,
      email: e.target.value,
    };
    setContactToEdit(newObj);
  };

  const EditNumber = (e) => {
    let newObj = {
      ...contactToEdit,
      number: e.target.value,
    };
    setContactToEdit(newObj);
  };

  return (
    <>
      <Modal show={showEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">
            <FormControl
              onChange={EditName}
              value={contactToEdit.name}
              className="my-3"
              placeholder="Title"
            />
            <FormControl
              onChange={EditSurname}
              value={contactToEdit.surname}
              className="my-3"
              placeholder="Description"
            />
            <FormControl
              onChange={EditNumber}
              value={contactToEdit.number}
              className="my-3"
              placeholder="Price"
            />
            <FormControl
              onChange={EditEmail}
              value={contactToEdit.email}
              className="my-3"
              placeholder="Image"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSave(contactToEdit)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditContact;
