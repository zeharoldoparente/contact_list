import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact, editContact } from "../../actions/contactActions";
import ContactItem from "../ContactItem/ContactItem";

const ContactList = () => {
   const contacts = useSelector((state) => state.contacts);
   const dispatch = useDispatch();

   const handleDelete = (index) => {
      dispatch(deleteContact(index));
   };

   const handleEdit = (index, editedContact) => {
      dispatch(editContact(index, editedContact));
   };

   return (
      <div>
         <h2>Lista de Contatos 📋</h2>
         <ul style={contactListStyles}>
            {contacts.map((contact, index) => (
               <li key={index} style={contactListItemStyles}>
                  <ContactItem
                     contact={contact}
                     onDelete={() => handleDelete(index)}
                     onEdit={(editedContact) =>
                        handleEdit(index, editedContact)
                     }
                  />
               </li>
            ))}
         </ul>
      </div>
   );
};

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

export default ContactList;
