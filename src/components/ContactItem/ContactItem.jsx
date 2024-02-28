import React, { useState } from "react";

const contactItemStyles = {
   backgroundColor: "#fff",
   border: "1px solid #ccc",
   borderRadius: "10px",
   marginBottom: "10px",
   padding: "15px",
   display: "flex",
   alignItems: "center",
   justifyContent: "space-between",
};

const contactItemButtonStyles = {
   padding: "8px 15px",
   marginLeft: "10px",
   border: "none",
   borderRadius: "5px",
   cursor: "pointer",
};

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
         <div style={contactItemStyles}>
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
            <button style={contactItemButtonStyles} onClick={handleSave}>
               Salvar
            </button>
         </div>
      );
   }

   return (
      <div style={contactItemStyles}>
         <p>
            {contact.fullName} - {contact.email} - {contact.phone}
         </p>
         <div>
            <button style={contactItemButtonStyles} onClick={onDelete}>
               Excluir
            </button>
            <button style={contactItemButtonStyles} onClick={handleEdit}>
               Editar
            </button>
         </div>
      </div>
   );
};

export default ContactItem;
