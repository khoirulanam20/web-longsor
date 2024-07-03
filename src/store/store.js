import { configureStore } from '@reduxjs/toolkit';
import infoCardReducer from '../features/infoCard/infoCardSlice';
import contactReducer from '../features/contact/contactSlice'; // Import contact slice

const store = configureStore({
  reducer: {
    infoCard: infoCardReducer,
    contact: contactReducer, // Add contact reducer
  },
});

export default store;
