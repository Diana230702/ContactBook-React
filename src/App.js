import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
import EditContact from "./components/EditContact/EditContact";

const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [contacts, setContacts] = useState([]);

  function handleAddContacts(newObj) {
    let newContacts = [...contacts];
    newContacts.push(newObj);
    setContacts(newContacts);
    handleClose();
  }

  function handleDelete(id) {
    let newContacts = contacts.filter((item) => item.id !== id);
    setContacts(newContacts);
  }

  const [showEditModal, setShowEditModal] = useState(false);
  const handleEditClose = () => setShowEditModal(false);

  const handleEditShow = () => setShowEditModal(true);

  const [editContact, setEditContact] = useState({});
  function handleEdit(id) {
    let obj = contacts.filter((item) => item.id == id);
    setEditContact(obj[0]);
    handleEditShow();
  }
  function handleSave(editedobj) {
    let newContacts = contacts.map((item) => {
      if (item.id === editedobj.id) {
        return editedobj;
      }
      return item;
    });
    setContacts(newContacts);
    setShowEditModal(false);
  }

  console.log(contacts);
  return (
    <div>
      <Header handleShow={handleShow} />
      <AddContact
        show={show}
        handleClose={handleClose}
        handleAddContacts={handleAddContacts}
        handleShow={handleShow}
      />
      <ContactList
        contacts={contacts}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      <EditContact
        showEditModal={showEditModal}
        handleEditClose={handleEditClose}
        handleSave={handleSave}
        editContact={editContact}
      />
    </div>
  );
};

export default App;
