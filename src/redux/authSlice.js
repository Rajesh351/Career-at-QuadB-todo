import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        selected:true,
        login:false,
    },
    reducers:{
        setSelectdUser:(state,action)=>{
            state.selected=action.payload
        },
        setLogin:(state,action)=>{
            state.login=action.payload
        }
        
    }
});
export const {setSelectdUser,setLogin} = authSlice.actions;
export default authSlice.reducer;