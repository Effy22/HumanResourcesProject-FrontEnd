import managerController from "../../config/ManagerController";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const managerInitialState = {
    managerList: [],
    token: '',
    data: {},
    isLoadingFetchSaveManager: false,
    isLoadingAddEmployee: false,
    isSaveManager: false,
    isAddEmployee: false,
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

export const fetchAddEmployee = createAsyncThunk (
    'manager/fetchAddEmployee',
    async(payload) => {
        try{
         const result = await fetch(managerController.addEmployee, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(payload)
         }).then(data=>data.json())  
         .then(data=>data);
         return result; 
        }catch(error){
            console.log('ERROR: manager/fetchAddEmployee', error);
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

        //add-employee
        build.addCase(fetchAddEmployee.pending,(state)=>{
            state.isLoadingAddEmployee =true;
        });
        build.addCase(fetchAddEmployee.fulfilled, (state,action)=>{
            state.isLoadingAddEmployee = false;
          
                console.log("gelen data...: ", action.payload);

                state.isAddEmployee= true;
            
        });
        build.addCase(fetchAddEmployee.rejected,(state)=>{
            state.isLoadingAddEmployee=false;
        }); 
    }
});

export default managerSlice.reducer;

