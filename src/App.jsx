import React, { useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
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
      <div>
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
