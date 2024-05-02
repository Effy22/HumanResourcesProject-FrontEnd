import authController from "../../config/AuthController";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const initAuthState = {
    authList: [],
    token: '',
    data: {},
    isLogin: false,
    isLoadingFetchRegister : false,
    isLoadingFetchLogin: false
    

}

export const fetchRegisterManager = createAsyncThunk(
    'auth/fetchRegisterManager',
    async(payload) => {
        try{
            const result = await fetch(authController.registerManager,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(payload)
        }).then(data=>data.json())
        .then(data=>data);
        return result;
        }catch (error){
            console.log('ERROR: auth/fetchRegisterManager...: ', error);
        }
    }
);


export const fetchLogin =createAsyncThunk(
    'auth/fetchLogin',
     async (payload) => {

        try{ 
            
        const result= await fetch(authController.login, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(data =>data.json())
        .then(data =>data);
        console.log('Login sonuç..: ', result);
        return result;

        } catch(error){
            console.log('ERROR: auth/fetchLogin...: ', error);
        }
       
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
            console.log(action.payload);
        });
        builder.addCase(fetchRegisterManager.rejected,(state)=>{
            state.isLoadingFetchRegister = false;
        });   


        builder.addCase(fetchLogin.pending,(state) => { state.isLoadingFetchLogin =true;}); 
        builder.addCase(fetchLogin.fulfilled,(state,action) => {
            state.isLoadingFetchLogin =false;
           /* if(action.payload.status===null || action.payload.status!==200){
                alert('hata....: '+ action.payload.message);
            }else{
                console.log("gelen data...: ", action.payload);
                state.data=action.payload.data; //statemdeki dataya payloaddaki datayı setliyoruz.
                state.isLogin=true;
                // sessionStorage.setItem("token", action.payload.data);
            } */
        }); //işlem tamamlandı

        builder.addCase(fetchLogin.rejected,(state) => {
            state.isLoadingFetchLogin =false;
        });
    }

})

export default authSlice.reducer;