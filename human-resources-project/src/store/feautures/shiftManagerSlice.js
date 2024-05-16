import shiftManagerUrl from "../../config/ShiftManagerController";
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initShiftManagerState = {
    token: '',
    data: {},
    activeMenuId: 0,
    allShiftList : [], //tüm izinler listesi
    isLoadingFetchFindAllShiftsOfEmployees: false, //employeenin istediği izin loading'i
    isGotAllShifts: false,
    isLoadingFetchAddShift: false,
    isAddedShift: false,
    isLoadingFetchFindShiftOfEmployee: false,
    isGotShiftOfEmployee: false,
}

export const FetchAddShift =createAsyncThunk(
    'shiftManager/FetchAddShift',
    async(payload) => {
        try{
            const result = await fetch(shiftManagerUrl.addShift,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload) 
            }).then(data => data.json())
            .then(data => data);
            return result;
        }catch (error) {
            console.log('ERROR: shiftManager/FetchAddShift', error);
        }  
    });
    


export const fetchFindShiftOfEmployee =createAsyncThunk(
    'shiftManager/fetchFindShiftOfEmployee',
    async(payload) => {
        try{
            const result = await fetch(`${shiftManagerUrl.findShiftOfEmployee}?token=${payload.token}&employeeId=${payload.employeeId}`, {            
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', 
            }
        }).then(data => data.json())
        .then(data => data);
        return result;
        }catch (error) {
            console.log('ERROR: shiftManager/fetchFindShiftOfEmployee', error);
        }
    });

export const fetchFindAllShiftsOfEmployees =createAsyncThunk(
    'shiftManager/fetchFindAllShiftsOfEmployees',
    async(token) => {
        try{
            const result = await fetch(`${shiftManagerUrl.findAllMyShifts}?token=${token}`, {            
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', 
            }
        }).then(data => data.json())
        .then(data => data);
        return result;
        }catch (error) {
            console.log('ERROR: shiftManager/fetchFindAllMyShifts', error);
        }
    });
    
const shiftManagerSlice = createSlice({
    name: 'shiftManager',
    initialState: initShiftManagerState,
    reducers: {
        setActiveMenuId(state,action) {
            state.activeMenuId=action.payload;
         }
    },
    extraReducers: (build)=>{
        //get-all-shifts-of-employees
        build.addCase(fetchFindAllShiftsOfEmployees.pending,(state)=>{
            state.isLoadingFetchFindAllShiftsOfEmployees =true;
        });
        build.addCase(fetchFindAllShiftsOfEmployees.fulfilled, (state,action)=>{
            state.isLoadingFetchFindAllShiftsOfEmployees = false;
            state.isGotAllShifts = true;
            if(action.payload && action.payload.data){
            state.allShiftList = action.payload.data;
            }else{
                console.log("ERROR: fetchFindAllShiftsOfEmployees.fulfilled");
            }
        });
        build.addCase(fetchFindAllShiftsOfEmployees.rejected, (state,action)=>{
            state.isLoadingFetchFindAllShiftsOfEmployees = false;
            state.isGotAllShifts = false;
        });

        //add-shift
        build.addCase(FetchAddShift.pending, (state) => {state.isLoadingFetchAddShift=true});
        build.addCase(FetchAddShift.fulfilled,(state,action)=>{
            state.isLoadingFetchAddShift=false;
            state.isAddedShift=true;
        });
        build.addCase(FetchAddShift.rejected,(state)=>{state.isLoadingFetchAddShift=false;});

        //find-shift-of-employee
        build.addCase(fetchFindShiftOfEmployee.pending,(state)=>{
            state.isLoadingFetchFindShiftOfEmployee =true;
        });
        build.addCase(fetchFindShiftOfEmployee.fulfilled, (state,action)=>{
            state.isLoadingFetchFindShiftOfEmployee = false;
            state.isGotShiftOfEmployee = true;
            if(action.payload && action.payload.data){
            state.data = action.payload.data;
            }else{
                console.log("ERROR: fetchFindShiftOfEmployee.fulfilled");
            }
        });
        build.addCase(fetchFindShiftOfEmployee.rejected, (state,action)=>{
            state.isLoadingFetchFindShiftOfEmployee = false;
            state.isGotShiftOfEmployee = false;
        });
    }
}
);

export const {setActiveMenuId} = shiftManagerSlice.actions;
export default shiftManagerSlice.reducer;

