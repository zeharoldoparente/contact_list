import React, { useState } from "react";

const contactFormStyles = {
   maxWidth: "400px",
   margin: "0 auto",
};

const contactFormInputStyles = {
   width: "calc(100% - 30px)",
   padding: "10px",
   marginBottom: "10px",
   border: "1px solid #ccc",
   borderRadius: "5px",
};

const contactFormButtonStyles = {
   padding: "10px 20px",
   backgroundColor: "#007bff",
   color: "#fff",
   border: "none",
   borderRadius: "5px",
   cursor: "pointer",
};

const ContactForm = ({ onSubmit }) => {
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [error, setError] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!isValidPhone(phone)) {
         setError("O telefone deve conter apenas números.");
         return;
      }
      const fullName = `${firstName} ${lastName}`;
      onSubmit({ fullName, email, phone });
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setError("");
   };

   const isValidPhone = (phone) => {
      return /^\d*$/.test(phone);
   };

   return (
      <div style={contactFormStyles}>
         <h2>Adicionar Contato 📝</h2>
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               placeholder="Nome"
               value={firstName}
               onChange={(e) => setFirstName(e.target.value)}
               style={contactFormInputStyles}
            />
            <input
               type="text"
               placeholder="Sobrenome"
               value={lastName}
               onChange={(e) => setLastName(e.target.value)}
               style={contactFormInputStyles}
            />
            <input
               type="text"
               placeholder="Email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               style={contactFormInputStyles}
            />
            <input
               type="text"
               placeholder="Telefone"
               value={phone}
               onChange={(e) => setPhone(e.target.value)}
               style={contactFormInputStyles}
            />
            {error && <p className="error">{error}</p>}
            <button type="submit" style={contactFormButtonStyles}>
               Adicionar
            </button>
         </form>
      </div>
   );
};

export default ContactForm;
