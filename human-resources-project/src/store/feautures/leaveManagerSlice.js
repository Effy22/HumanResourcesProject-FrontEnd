import leaveManagerUrl from '../../config/LeaveManagerController';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initLeaveManagerState ={
    token: '',
    data: {},
    activeMenuId: 0,
    pendingLeaveList : [], //bekleyen izinler listesi
    allLeaveList: [], //manager'da gözüken tüm izinler
    isLoadingLeaveAdd: false, //izin eklemenin loading'i
    isLoadingLeaveApproval: false, //izin onaylamanın loading'i
    isLoadingLeaveReject: false, //izin reddetmenin loading'i
    isLoadingPendingLeaveList: false, //izin eklemenin loading'i
    isLoadingAllLeaveList: false,  //tüm izinlern listesinin loading'i
}
// FETCH CREATEASYNCTHUNK
export const fetchAddLeave = createAsyncThunk(
    'leaveManager,fetchAddLeave',
    async (payload)=>{
        try {
         const result = await fetch(leaveManagerUrl.addLeave,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload) // {özellikler}
         }).then(data=> data.json()) // string 
         .then(data=>data);
         return result;
        } catch (error) {
            console.log('HATA fetchAddLeave....: ', error);
        }
    }
);

export const fetchApproveLeave = createAsyncThunk(
    'leaveManager/fetchApproveLeave',
    async (payload)=>{
        try{
            const result = await fetch(leaveManagerUrl.approveLeave,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(data=>data.json())
        .then(data=>data);
        return result;
        }catch(error){
            console.log('ERROR: leaveManager/fetchApproveLeave', error);
        }   
    }
);

export const fetchRejectLeave = createAsyncThunk(
    'leaveManager/fetchRejectLeave',
    async (payload)=>{
        try{
            const result = await fetch(leaveManagerUrl.rejectLeave,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(data=>data.json())
        .then(data=>data);
        return result;
        }catch(error){
            console.log('ERROR: leaveManager/fetchRejectLeave', error);
        }    
    }
);

export const fetchGetAllLeavesOfEmployee = createAsyncThunk(
    'leaveManager/fetchGetAllLeavesOfEmployee',
    async ()=>{
        try{
             const result = await fetch(leaveManagerUrl.getAllLeavesOfEmployee,{
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data=>data.json())
        .then(data=>data);
        return result;
        }catch(error){
            console.log('ERROR: leaveManager/fetchGetAllLeavesOfEmployee', error);
        } 
      
    }
);

export const fetchGetAllPendingLeavesOfEmployees = createAsyncThunk(
    'leaveManager/fetchGetAllPendingLeavesOfEmployees',
    async ()=>{
        try{
            const result = await fetch(leaveManagerUrl.getAllPendingLeavesOfEmployees,{
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data=>data.json())
        .then(data=>data);
        return result;
        }catch(error){
            console.log('ERROR: leaveManager/fetchGetAllPendingLeavesOfEmployees', error);
        } 
       
    }
);

//CREATE SLICE
const leaveManagerSlice = createSlice({
    name: 'leaveManager',
    initialState: initLeaveManagerState,
    reducers: {
        setActiveMenuId(state,action) {
            state.activeMenuId=action.payload;
         }
    },
    extraReducers: (build) => {
        //add-leave
        build.addCase(fetchAddLeave.pending, (state) => {state.isLoadingLeaveAdd=true});
        build.addCase(fetchAddLeave.fulfilled,(state,action)=>{
            state.isLoadingLeaveAdd=false;
        });
        build.addCase(fetchAddLeave.rejected,(state)=>{state.isLoadingLeaveAdd=false;});
        //approve-leave
        build.addCase(fetchApproveLeave.pending, (state) => {state.isLoadingLeaveApproval=true;});
        build.addCase(fetchApproveLeave.fulfilled, (state,action) => {
            state.isLoadingLeaveApproval=false;
            console.log(action.payload);});
        build.addCase(fetchApproveLeave.rejected, (state) => {state.isLoadingLeaveApproval=false;});

        //reject-leave
        build.addCase(fetchRejectLeave.pending, (state) => {state.isLoadingLeaveReject=true;});
        build.addCase(fetchRejectLeave.fulfilled, (state,action) => {
            state.isLoadingLeaveReject=false;
            console.log(action.payload);});
        build.addCase(fetchRejectLeave.rejected, (state) => {state.isLoadingLeaveReject=false;});

        //get-all-leaves-for-employee
        build.addCase(fetchGetAllLeavesOfEmployee.pending, (state) => {state.isLoadingAllLeaveList=true;});
        build.addCase(fetchGetAllLeavesOfEmployee.fulfilled, (state,action) => {
            state.isLoadingAllLeaveList=false;
            state.allLeaveList = action.payload.data;}
        );
        build.addCase(fetchGetAllLeavesOfEmployee.rejected, (state) => {state.isLoadingAllLeaveList=false;});

         //get-all-pending-leaves-for-employee
         build.addCase(fetchGetAllPendingLeavesOfEmployees.pending, (state) => {state.isLoadingPendingLeaveList=true;});
         build.addCase(fetchGetAllPendingLeavesOfEmployees.fulfilled, (state,action) => {
             state.isLoadingPendingLeaveList=false;
             state.pendingLeaveList = action.payload.data;}
         );
         build.addCase(fetchGetAllPendingLeavesOfEmployees.rejected, (state) => {state.isLoadingPendingLeaveList=false;});
    }
});

export const {setActiveMenuId} = leaveManagerSlice.actions;
export default leaveManagerSlice.reducer;