export const addContact = (contact) => ({
   type: "ADD_CONTACT",
   payload: contact,
});

export const deleteContact = (index) => ({
   type: "DELETE_CONTACT",
   payload: index,
});

export const editContact = (index, editedContact) => ({
   type: "EDIT_CONTACT",
   payload: { index, editedContact },
});
