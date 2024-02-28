import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact, editContact } from "../../actions/contactActions";
import ContactItem from "../ContactItem/ContactItem";
import styled from "styled-components";

const ListContainer = styled.div`
   background: rgba(255, 255, 255, 0.5);
   backdrop-filter: blur(5px);
   border-radius: 10px;
   padding: 20px;
`;

const List = styled.ul`
   list-style-type: none;
   padding: 0;
`;

const ListItem = styled.li`
   background-color: #f4f4f4;
   border-radius: 10px;
   margin-bottom: 10px;
   padding: 15px;
`;

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
      <ListContainer>
         <h2>Lista de Contatos 📋</h2>
         <List>
            {contacts.map((contact, index) => (
               <ListItem key={index}>
                  <ContactItem
                     contact={contact}
                     onDelete={() => handleDelete(index)}
                     onEdit={(editedContact) =>
                        handleEdit(index, editedContact)
                     }
                  />
               </ListItem>
            ))}
         </List>
      </ListContainer>
   );
};

export default ContactList;
