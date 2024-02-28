import React, { useState } from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
   background-color: #fff;
   border: 1px solid #ccc;
   border-radius: 10px;
   margin-bottom: 10px;
   padding: 15px;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

const DeleteButton = styled.button`
   padding: 8px 15px;
   margin-left: 10px;
   border: none;
   border-radius: 5px;
   cursor: pointer;
   background-color: #ff5252;
   color: #fff;
`;

const EditButton = styled.button`
   padding: 8px 15px;
   margin-left: 10px;
   border: none;
   border-radius: 5px;
   cursor: pointer;
   background-color: #3f51b5;
   color: #fff;
`;

const ItemButton = styled.button`
   padding: 8px 15px;
   margin-left: 10px;
   border: none;
   border-radius: 5px;
   cursor: pointer;
`;

const Button = styled.button`
   /* Adicione esta linha */
   padding: 8px 15px;
   margin-left: 10px;
   border: none;
   border-radius: 5px;
   cursor: pointer;
`;

const ContactItem = ({ contact, onDelete, onEdit }) => {
   const [isEditing, setIsEditing] = useState(false);
   const [editedContact, setEditedContact] = useState(contact);
   const [error, setError] = useState("");

   const handleEdit = () => {
      setIsEditing(true);
   };

   const handleChange = (e) => {
      const { name, value } = e.target;
      setEditedContact({ ...editedContact, [name]: value });
   };

   const handleSave = () => {
      if (!isValidPhone(editedContact.phone)) {
         setError("O telefone deve conter apenas números.");
         return;
      }

      onEdit(editedContact);
      setIsEditing(false);
   };

   const isValidPhone = (phone) => {
      return /^\d*$/.test(phone);
   };

   if (isEditing) {
      return (
         <ItemContainer>
            <input
               type="text"
               name="fullName"
               value={editedContact.fullName}
               onChange={handleChange}
            />
            <input
               type="text"
               name="email"
               value={editedContact.email}
               onChange={handleChange}
            />
            <input
               type="text"
               name="phone"
               value={editedContact.phone}
               onChange={handleChange}
            />
            {error && <p className="error">{error}</p>}
            <Button onClick={handleSave}>Salvar</Button>
         </ItemContainer>
      );
   }

   return (
      <ItemContainer>
         <p>
            {contact.fullName} - {contact.email} - {contact.phone}
         </p>
         <div>
            <DeleteButton onClick={onDelete}>Excluir</DeleteButton>
            <EditButton onClick={handleEdit}>Editar</EditButton>
         </div>
      </ItemContainer>
   );
};

export default ContactItem;
