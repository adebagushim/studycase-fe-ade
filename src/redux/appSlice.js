import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  carts: [],
  auth: localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : false,
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {},
  loading: false
};


export const counterSlice = createSlice({
  name: 'app',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setAuth: (state, action) => {
      state.auth  = action.payload;
      localStorage.setItem('auth', JSON.stringify(action.payload));
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setUser: (state, action) => {
      state.user = action.payload
      localStorage.setItem('user', JSON.stringify(action.payload));
    }
  },
});

export default counterSlice.reducer;