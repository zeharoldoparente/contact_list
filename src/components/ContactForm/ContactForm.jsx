import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../actions/contactActions";
import styled from "styled-components";

const FormContainer = styled.div`
   max-width: 400px;
   margin: 0 auto;
`;

const Input = styled.input`
   width: calc(100% - 30px);
   padding: 10px;
   margin-bottom: 10px;
   border: 1px solid #ccc;
   border-radius: 5px;
`;

const Button = styled.button`
   padding: 10px 20px;
   background-color: #007bff;
   color: #fff;
   border: none;
   border-radius: 5px;
   cursor: pointer;
`;

const Error = styled.p`
   color: red;
`;

const ContactForm = () => {
   const dispatch = useDispatch();
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
      dispatch(addContact({ fullName, email, phone }));
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
      <FormContainer>
         <h2>Adicionar Contato 📝</h2>
         <form onSubmit={handleSubmit}>
            <Input
               type="text"
               placeholder="Nome"
               value={firstName}
               onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
               type="text"
               placeholder="Sobrenome"
               value={lastName}
               onChange={(e) => setLastName(e.target.value)}
            />
            <Input
               type="text"
               placeholder="Email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
            <Input
               type="text"
               placeholder="Telefone"
               value={phone}
               onChange={(e) => setPhone(e.target.value)}
            />
            {error && <Error>{error}</Error>}
            <Button type="submit">Adicionar</Button>
         </form>
      </FormContainer>
   );
};

export default ContactForm;
