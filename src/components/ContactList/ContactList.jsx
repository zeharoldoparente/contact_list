import React from "react";
import ContactItem from "../ContactItem/ContactItem";

const contactListStyles = {
   listStyleType: "none",
   padding: 0,
};

const contactListItemStyles = {
   backgroundColor: "#f4f4f4",
   borderRadius: "10px",
   marginBottom: "10px",
   padding: "15px",
};

const ContactList = ({ contacts, onDelete, onEdit }) => {
   return (
      <div>
         <h2>Lista de Contatos 📋</h2>
         <ul style={contactListStyles}>
            {contacts.map((contact, index) => (
               <li key={index} style={contactListItemStyles}>
                  <ContactItem
                     contact={contact}
                     onDelete={() => onDelete(index)}
                     onEdit={() => onEdit(index, contact)}
                  />
               </li>
            ))}
         </ul>
      </div>
   );
};

export default ContactList;
