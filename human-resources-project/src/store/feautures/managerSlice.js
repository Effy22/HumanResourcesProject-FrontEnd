import managerUrl from "../../config/ManagerController";
import managerController from "../../config/ManagerController";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const managerInitialState = {
    managerList: [],
    token: '',
    data: {},
    isLoadingFetchSaveManager: false,
    isLoadingFindByToken: false,
    isFoundByToken: false,
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
            header:JSON.stringify(payload)
         }).then(data=>data.json())  
         .then(data=>data);
         return result; 
        }catch(error){
            console.log('ERROR: manager/fetchSaveManager', error);
        }   
    }
);


export const fetchFindByToken = createAsyncThunk(
    'manager/fetchFindByToken',
    async (token) => { // Tokeni işlevinize ekleyin
        try {
            const result = await fetch(`${managerUrl.findByToken}?token=${token}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(data => data.json())
            .then(data => data);
            return result;
        } catch(error) {
            console.log('ERROR: manager/fetchFindByToken', error);
        }
    }
);


const managerSlice = createSlice({
    name: 'manager',
    initialState: managerInitialState,
    reducers: {},
    extraReducers: (build)=>{
        //save-manager
        build.addCase(fetchSaveManager.pending,(state)=>{
            state.isLoadingFetchSaveManager =true;
        });
        build.addCase(fetchSaveManager.fulfilled, (state,action)=>{
            state.isLoadingFetchSaveManager = false;
           
                console.log("gelen data...: ", action.payload);
                state.data = action.payload.data;
                state.isSaveManager= true;
        
        });
        build.addCase(fetchSaveManager.rejected,(state)=>{
            state.isLoadingFetchSaveManager=false;
        }); 

        //find-by-token
        
        build.addCase(fetchFindByToken.pending,(state)=>{
            state.isLoadingFindByToken =true;
        });
        build.addCase(fetchFindByToken.fulfilled, (state,action)=>{
            state.isLoadingFindByToken = false;
                console.log("gelen data...: ", action.payload);
                state.data = action.payload.data;
                state.isFoundByToken= true;
        
        });
        build.addCase(fetchFindByToken.rejected,(state)=>{
            state.isLoadingFindByToken=false;
        }); 

    
    }
});

export default managerSlice.reducer;

