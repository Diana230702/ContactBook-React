import React from "react";
import ContactCard from "../ContactCard/ContactCard";

const ContactList = ({ contacts, handleDelete, handleEdit }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <div>
        {contacts.map((item) => (
          <ContactCard
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
