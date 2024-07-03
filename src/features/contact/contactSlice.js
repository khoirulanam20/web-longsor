import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  message: ''
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    resetForm: (state) => {
      state.name = '';
      state.email = '';
      state.message = '';
    }
  }
});

export const { setName, setEmail, setMessage, resetForm } = contactSlice.actions;

export default contactSlice.reducer;
