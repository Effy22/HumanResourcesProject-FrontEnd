import authUrl from "../../config/AuthController";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const initAuthState = {
    authList: [],
    token: '',
    data: {},
    isLoadingFetchRegister : false,

}

export const fetchRegisterManager = createAsyncThunk(
    'auth/fetchRegisterManager',
    async(payload) => {
        const result = await fetch(authUrl.registerManager,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(payload)
        }).then(data=>data.json())
        .then(data=>data);
        return result;
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: initAuthState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(fetchRegisterManager.pending,(state)=>{
            state.isLoadingFetchRegister = true;
        });
        builder.addCase(fetchRegisterManager.fulfilled,(state,action)=>{
            state.isLoadingFetchRegister = false;
            if(action.payload.data){
                alert('Müdür başarı ile eklendi..:' , action.payload)
            }
        });
        builder.addCase(fetchRegisterManager.rejected,(state)=>{
            state.isLoadingFetchRegister = false;
        });

       
        
    }

})

export default authSlice.reducer;