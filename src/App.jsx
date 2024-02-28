import React, { useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";

const containerStyles = {
   background: "linear-gradient(135deg, #FF6B6B, #3F51B5)",
   minHeight: "100vh",
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
   padding: "20px",
};

const App = () => {
   const [contacts, setContacts] = useState([]);

   const handleAddContact = (newContact) => {
      setContacts([...contacts, newContact]);
   };

   const handleDeleteContact = (index) => {
      const updatedContacts = [...contacts];
      updatedContacts.splice(index, 1);
      setContacts(updatedContacts);
   };

   const handleEditContact = (index, editedContact) => {
      const updatedContacts = [...contacts];
      updatedContacts[index] = editedContact;
      setContacts(updatedContacts);
   };

   return (
      <div style={containerStyles}>
         <ContactForm onSubmit={handleAddContact} />
         <ContactList
            contacts={contacts}
            onDelete={handleDeleteContact}
            onEdit={handleEditContact}
         />
      </div>
   );
};

export default App;
