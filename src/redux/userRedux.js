import { createSlice } from '@reduxjs/toolkit'
const userSlice = createSlice(
    {
        name: "user",
        initialState: {
           isFetching: false,
            currentUser: null,
            error: false
        },
        reducers: {
            registerStart:(state)=>{
                state.isFetching=true;
                state.currentUser=null
            },
            registerSuccess:(state)=>{
                state.isFetching=false;
                
            },
            registerError:(state)=>{
state.isFetching=false;
state.error=true;
            },

            loginStart:(state)=>{
                state.isFetching=true;
                state.currentUser=null
            },
            loginSuccess:(state,action)=>{
                state.isFetching=false;
                state.currentUser=action.payload
            },loginError:(state)=>{
                state.isFetching=false;
                state.error=true
            },
            logoutSuccess:(state)=>{
                state.isFetching=false;
                state.currentUser=null;
                state.error=false;

            }
            ,updateStart:(state)=>{
                state.isFetching=true;
               
                state.error=false;
            },updateSuccess:(state)=>{
                state.isFetching=false;
               
                state.error=false;
            },
            updateError:(state)=>{
                state.isFetching=false;
               
                state.error=true;
            }

        },
    })
export const { loginError,loginStart,loginSuccess,logoutSuccess,registerStart,registerSuccess ,registerError,updateStart,updateSuccess,updateError} = userSlice.actions
export default userSlice.reducer