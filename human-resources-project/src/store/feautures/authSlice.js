import authController from "../../config/AuthController";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initAuthState = {
    authList: [],
    token: '',
    data: {},
    isLogin: false,
    isLoadingFetchRegisterManager : false,
    isLoadingFetchRegisterEmployee: false,
    isLoadingFetchLogin: false,
    isLoadingFetchChangePassword: false,
    isChangedPassword: false,
    role: '', 
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


export const fetchRegisterEmployee = createAsyncThunk(
    'auth/fetchRegisterEmployee',
    async(payload) => {
        try{
            const result = await fetch(authController.registerEmployee,{
                method: 'POST',
                headers:{'Content-Type' : 'application/json'},
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

export const fetchChangePassword =createAsyncThunk(
    'auth/fetchChangePassword',
     async (payload) => {

        try{ 
        const result= await fetch(authController.changePassword, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(data =>data.json())
        .then(data =>data);
        console.log('Change Password sonuç..: ', result);
        if(result.status === 200){
            window.location.href = '/login';
        }
        return result;

        } catch(error){
            console.log('ERROR: auth/fetchChangePassword...: ', error);
        }
       
     }
);



const authSlice = createSlice({
    name: 'auth',
    initialState: initAuthState,
    reducers: { },
    extraReducers: (builder) =>{
        //registerManager
        builder.addCase(fetchRegisterManager.pending,(state)=>{
            state.isLoadingFetchRegisterManager = true;
        });
        builder.addCase(fetchRegisterManager.fulfilled,(state,action)=>{
            state.isLoadingFetchRegisterManager = false;
            console.log(action.payload);
        });
        builder.addCase(fetchRegisterManager.rejected,(state)=>{
            state.isLoadingFetchRegisterManager = false;
        }); 
        //registerEmployee  
        builder.addCase(fetchRegisterEmployee.pending,(state)=>{
            state.isLoadingFetchRegisterEmployee = true;
        });
        builder.addCase(fetchRegisterEmployee.fulfilled,(state,action)=>{
            state.isLoadingFetchRegisterEmployee = false;
            console.log(action.payload);
        });
        builder.addCase(fetchRegisterEmployee.rejected,(state)=>{
            state.isLoadingFetchRegisterEmployee = false;
        }); 


        builder.addCase(fetchLogin.pending,(state) => { state.isLoadingFetchLogin =true;}); 
        builder.addCase(fetchLogin.fulfilled,(state,action) => {
            state.isLoadingFetchLogin =false;
           
            console.log("gelen data....: ", action.payload);               
            state.data = action.payload.data;
            state.isLogin = true;
            state.role = action.payload.data.role;
            console.log("Redux state after login:", state);

        }); //işlem tamamlandı

        builder.addCase(fetchLogin.rejected,(state) => {
            state.isLoadingFetchLogin =false;
        });

        //changePassword
        builder.addCase(fetchChangePassword.pending,(state) => {
             state.isLoadingFetchChangePassword =true;
        });
        builder.addCase(fetchChangePassword.fulfilled,(state,action) => {
            state.isLoadingFetchChangePassword =false;
            console.log("gelen data change password: ",action.payload);
            state.data = action.payload.data;
            state.isChangedPassword = true;
        });
        builder.addCase(fetchChangePassword.rejected,(state) => {
            state.isLoadingFetchChangePassword =false;
        });
    }

})

export default authSlice.reducer;