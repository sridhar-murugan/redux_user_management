// import { configureStore } from "@reduxjs/toolkit";
// import dataReducer from `./redux/slice;`
// export const store = configureStore({
//     reducer:{
//         customers:dataReducer
//     }
// })


// import { configureStore, createSlice } from '@reduxjs/toolkit';

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: { user: null },
//   reducers: {
//     login: (state, action) => {
//       state.user = action.payload;
//     },
//     logout: (state) => {
//       state.user = null;
//     }
//   }
// });

// export const { login, logout } = authSlice.actions;
// export const store = configureStore({ reducer: { auth: authSlice.reducer } });




import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authenticationSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  }
});

// export default store;
