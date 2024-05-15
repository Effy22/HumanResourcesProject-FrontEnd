import leaveEmployeeUrl from '../../config/LeaveEmployeeController';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initLeaveEmployeeState ={
    token: '',
    data: {},
    activeMenuId: 0,
    allLeaveList : [], //tüm izinler listesi
    isLoadingLeaveRequest: false, //employeenin istediği izin loading'i
    isLoadingAllLeaveList: false,  //tüm izinlern listesinin loading'i
}

// FETCH CREATEASYNCTHUNK
// TODO: Bu çalışmazsa bakacağız authorization ekledim.
export const fetchFindAllMyLeaves =createAsyncThunk(
    'leaveEmployee/fetchFindAllMyLeaves',
    async(token) => {
        try{
            const result = await fetch(`${leaveEmployeeUrl.findAllMyLeaves}?token=${token}`, {            
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', 
            }
        }).then(data => data.json())
        .then(data => data);
        return result;
        }catch (error) {
            console.log('ERROR: leaveEmployee/fetchFindAllMyLeaves', error);
        }
    }
);

export const fetchRequestLeave =createAsyncThunk(
    'leaveEmployee/fetchRequestLeave',
    async(payload) => {
        try{
            const result= await fetch(leaveEmployeeUrl.requestLeave,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        }).then(data => data.json())
        .then(data => data);
        return result;
        }catch (error) {
            console.log('ERROR: leaveEmployee/fetchRequestLeave', error);
        }
    }
);

//CREATE SLICE
const leaveEmployeeSlice = createSlice({
    name: 'leaveEmployee',
    initialState: initLeaveEmployeeState,
    reducers: {
        setActiveMenuId(state,action) {
            state.activeMenuId=action.payload;
         }
    },
    extraReducers: (build) => {

        //request-leave
        build.addCase(fetchRequestLeave.pending, (state) => {state.isLoadingLeaveRequest=true});
        build.addCase(fetchRequestLeave.fulfilled,(state,action)=>{
            state.isLoadingLeaveRequest=false;
      
                alert("İzin Başarı ile oluşturuldu.");
            
        });
        build.addCase(fetchRequestLeave.rejected,(state)=>{state.isLoadingLeaveRequest=false;});

        //get-all-my-leaves
        build.addCase(fetchFindAllMyLeaves.pending, (state) => {state.isLoadingAllLeaveList=true;});
        build.addCase(fetchFindAllMyLeaves.fulfilled, (state,action) => {
            state.isLoadingAllLeaveList=false;
            if(action.payload && action.payload.data){
            state.allLeaveList = action.payload.data;
        }else {
            console.error("fetchFindAllMyLeaves.fulfilled: Geçersiz veya eksik payload");
        }
    });
        build.addCase(fetchFindAllMyLeaves.rejected, (state) => {state.isLoadingAllLeaveList=false;});
    }

});

export const {setActiveMenuId} = leaveEmployeeSlice.actions;
export default leaveEmployeeSlice.reducer;