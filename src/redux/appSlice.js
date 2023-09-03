import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  carts: [],
  auth: localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : false,
  order: localStorage.getItem('order') ? JSON.parse(localStorage.getItem('order')) : [],
  address: localStorage.getItem('address') ? JSON.parse(localStorage.getItem('address')) : [],
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {},
  loading: false,
  searchQ: '',
  tagQ: '',
  categoryQ: '',
  addToCart: ''
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
    setOrder: (state, action) => {
      state.order  = action.payload;
      localStorage.setItem('order', JSON.stringify(action.payload));
    },
    setAddress: (state, action) => {
      state.address  = action.payload;
      localStorage.setItem('address', JSON.stringify(action.payload));
    },
    setUser: (state, action) => {
      state.user = action.payload
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setSearchQ: (state, action) => {
      state.searchQ = action.payload
    },
    setTagQ: (state, action) => {
      state.tagQ = action.payload
    },
    setCategoryQ: (state, action) => {
      state.categoryQ = action.payload
    },
    setAddToCart: (state, action) => {
      state.addToCart = action.payload
    },
  },
});

export default counterSlice.reducer;