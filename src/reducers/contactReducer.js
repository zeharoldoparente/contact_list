const initialState = {
   contacts: [],
};

const contactReducer = (state = initialState, action) => {
   switch (action.type) {
      case "ADD_CONTACT":
         return {
            ...state,
            contacts: [...state.contacts, action.payload],
         };
      case "DELETE_CONTACT":
         return {
            ...state,
            contacts: state.contacts.filter(
               (_, index) => index !== action.payload
            ),
         };
      case "EDIT_CONTACT":
         return {
            ...state,
            contacts: state.contacts.map((contact, index) =>
               index === action.payload.index
                  ? action.payload.editedContact
                  : contact
            ),
         };
      default:
         return state;
   }
};

export default contactReducer;
