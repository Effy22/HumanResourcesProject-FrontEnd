import employeeController from "../../config/EmployeeController";
import { createAsyncThunk, createSlice, isAction } from "@reduxjs/toolkit";


const employeeInitialState = {
    employeeList: [],
    token: '',
    data: {},
    isLoadingFetchUpdateEmployee: false,
    isUpdateEmployee: false,
    isLoadingFetchManagerAdminUpdateEmployee: false,
    isManagerAdminUpdateEmployee: false,
    isLoadingFetchEmployeeList: false,
    isGotEmployeeList: false,
    isLoadingFetchUpdateSalaryEmployee: false,
    isUpdateSalaryEmployee: false,
    isLoadingFetchActivateEmployee: false,
    isActivateEmployee: false,
    isLoadingFetchDeactivateEmployee: false,
    isDeactivateEmployee: false,

}

export const fetchUpdateEmployee = createAsyncThunk (
    'employee/fetchUpdateEmployee',
    async(payload) => {
        try{
         const result = await fetch(employeeController.updateEmployee, {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(payload)
         }).then(data=>data.json())  
         .then(data=>data);
         return result; 
        }catch(error){
            console.log('ERROR: employee/fetchUpdateEmployee', error);
        }   
    }
);

export const fetchManagerAdminUpdateEmployee = createAsyncThunk (
    'employee/fetchManagerAdminUpdateEmployee',
    async(payload) => {
        try{
         const result = await fetch(employeeController.managerAdminUpdateEmployee, {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(payload)
         }).then(data=>data.json())  
         .then(data=>data);
         return result; 
        }catch(error){
            console.log('ERROR: employee/fetchManagerAdminUpdateEmployee', error);
        }   
    }
);

export const fetchEmployeeList = createAsyncThunk (
    'employee/fetchGetEmployeeList',
    async() => {
        try{
         const result = await fetch(employeeController.getEmployees, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            },
         }).then(data=>data.json())  
         .then(data=>data);
         return result; 
        }catch(error){
            console.log('ERROR: employee/fetchEmployeeList', error);
        }   
    }
);

export const fetchUpdateSalaryEmployee = createAsyncThunk (
    'employee/fetchUpdateSalaryEmployee',
    async(payload) => {
        try{
         const result = await fetch(employeeController.updateSalaryEmployee, {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(payload)
         }).then(data=>data.json())  
         .then(data=>data);
         return result; 
        }catch(error){
            console.log('ERROR: employee/fetchUpdateSalaryEmployee', error);
        }   
    }
);

export const fetchActivateEmployee = createAsyncThunk (
    'employee/fetchActivateEmployee',
    async(payload) => {
        try{
         const result = await fetch(employeeController.activateEmployee, {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(payload)
         }).then(data=>data.json())  
         .then(data=>data);
         return result; 
        }catch(error){
            console.log('ERROR: employee/fetchActivateEmployee', error);
        }   
    }
);

export const fetchDeactivateEmployee = createAsyncThunk (
    'employee/fetchDeactivateEmployee',
    async(payload) => {
        try{
         const result = await fetch(employeeController.deactivateEmployee, {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(payload)
         }).then(data=>data.json())  
         .then(data=>data);
         return result; 
        }catch(error){
            console.log('ERROR: employee/fetchDeactivateEmployee', error);
        }   
    }
);

export const fetchFindByIdEmployee = createAsyncThunk (
    'employee/fetchFindByIdEmployee',
    async(payload) => {
        try{
         const result = await fetch(employeeController.findByIdEmployee, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            },
         }).then(data=>data.json())  
         .then(data=>data);
         return result; 
        }catch(error){
            console.log('ERROR: employee/fetchFindByIdEmployee', error);
        }   
    }
);



const employeeSlice = createSlice({
    name: 'employee',
    initialState: employeeInitialState,
    reducers: {},
    extraReducers: (build)=>{
        //update-employee
        build.addCase(fetchUpdateEmployee.pending,(state)=>{
            state.isLoadingFetchUpdateEmployee =true;
        });
        build.addCase(fetchUpdateEmployee.fulfilled, (state,action)=>{
            state.isLoadingFetchUpdateEmployee = false;
           
                console.log("gelen data...: ", action.payload);
                state.data = action.payload.data;
                state.isUpdateEmployee= true;
        });
        build.addCase(fetchUpdateEmployee.rejected,(state)=>{
            state.isLoadingFetchUpdateEmployee=false;
        });

        //manager-admin-update-employee
        build.addCase(fetchManagerAdminUpdateEmployee.pending,(state)=>{
            state.isLoadingFetchManagerAdminUpdateEmployee =true;
        });
        build.addCase(fetchManagerAdminUpdateEmployee.fulfilled, (state,action)=>{
            state.isLoadingFetchManagerAdminUpdateEmployee = false;
           
                console.log("gelen data...: ", action.payload);
                state.data = action.payload.data;
                state.isManagerAdminUpdateEmployee= true;
        });
        build.addCase(fetchManagerAdminUpdateEmployee.rejected,(state)=>{
            state.isLoadingFetchManagerAdminUpdateEmployee=false;
        });

        //get-employee-list
        build.addCase(fetchEmployeeList.pending,(state)=>{
            state.isLoadingFetchEmployeeList = true;
        });
        build.addCase(fetchEmployeeList.fulfilled, (state,action)=>{
            state.isLoadingFetchEmployeeList = false;
            state.employeeList = action.payload.data;
            state.isGotEmployeeList = true;
        });
        build.addCase(fetchEmployeeList.rejected,(state)=>{
            state.isLoadingFetchEmployeeList=false;
        });

        //update-salary-employee
        build.addCase(fetchUpdateSalaryEmployee.pending,(state)=>{
            state.isLoadingFetchUpdateSalaryEmployee =true;            
        });
        build.addCase(fetchUpdateSalaryEmployee.fulfilled, (state,action)=>{
            state.isLoadingFetchUpdateSalaryEmployee = false;
           
                console.log("gelen data...: ", action.payload);
                state.data = action.payload.data;
                state.isUpdateSalaryEmployee= true;
        });
        build.addCase(fetchUpdateSalaryEmployee.rejected,(state)=>{
            state.isLoadingFetchUpdateSalaryEmployee=false;
        });

        //activate-employee
        build.addCase(fetchActivateEmployee.pending,(state)=>{
            state.isLoadingFetchActivateEmployee =true;
        });
        build.addCase(fetchActivateEmployee.fulfilled, (state,action)=>{
            state.isLoadingFetchActivateEmployee = false;
           
                console.log("gelen data...: ", action.payload);
                state.data = action.payload.data;
                state.isActivateEmployee= true;
        });
        build.addCase(fetchActivateEmployee.rejected,(state)=>{
            state.isLoadingFetchActivateEmployee=false;
        });

        //deactivate-employee
        build.addCase(fetchDeactivateEmployee.pending,(state)=>{
            state.isLoadingFetchDeactivateEmployee =true;
        });
        build.addCase(fetchDeactivateEmployee.fulfilled, (state,action)=>{
            state.isLoadingFetchDeactivateEmployee = false;
           
                console.log("gelen data...: ", action.payload);
                state.data = action.payload.data;
                state.isDeactivateEmployee= true;
        });
        build.addCase(fetchDeactivateEmployee.rejected,(state)=>{
            state.isLoadingFetchDeactivateEmployee=false;
        });



    }
})

export default employeeSlice.reducer;