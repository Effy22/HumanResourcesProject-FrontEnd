import managerController from "../../config/ManagerController";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


/**
 * 1- Token'ı buraya koymalı mıyız emin olamadım
 * 2- managerları getir gibi bi metot kullancaksak isLoadingManager= false 
 * gibi bir initial state kullanılabilir sanki
 */
const managerInitialState = {
    managerList: [],
    token: '',
    data: {},
    isLoadingFetchSaveManager: false,
    isSaveManager: false,
}

export const fetchSaveManager = createAsyncThunk (
    'manager/fetchSaveManager',
    async(payload) => {
        try{
         const result = await fetch(managerController.saveManager, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(payload)
         }).then(data=>data.json())  
         .then(data=>data);
         return result; 
        }catch(error){
            console.log('ERROR: manager/fetchSaveManager', error);
        }   
    }
);

const managerSlice = createSlice({
    name: 'manager',
    initialState: managerInitialState,
    reducers: {},
    extraReducers: (build)=>{
        build.addCase(fetchSaveManager.pending,(state)=>{
            state.isLoadingFetchSaveManager =true;
        });
        build.addCase(fetchSaveManager.fulfilled, (state,action)=>{
            state.isLoadingFetchSaveManager = false;
            if(action.payload.status ===null || action.payload.status!==200){
                alert('hata...: ' + action.payload.message);
            }else{
                console.log("gelen data...: ", action.payload);
                state.data = action.payload.data;
                state.isSaveManager= true;
            }
        });
        build.addCase(fetchSaveManager.rejected,(state)=>{
            state.isLoadingFetchSaveManager=false;
        }); 
    }
});

export default managerSlice.reducer;

