// import { createSlice } from "@reduxjs/toolkit";
// const initialstate =[];
// const data = createSlice({
//     name:"customer",
//     initialstate:initialstate,
//     reducers:{
//         addcustomer(state,action){
//             state.push(action.payload)
//         }
       
//     }
   
// })
// export const {addcustomer} =data.actions;
// export default data.reducer





import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,  
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signup: (state, action) => {
      state.user = action.payload; 
    },
    login: (state, action) => {
      const { email, password } = action.payload;
      if (state.user && state.user.email === email && state.user.password === password) {
        state.isAuthenticated = true;
      } else {
        state.isAuthenticated = false;
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    }
  }
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
