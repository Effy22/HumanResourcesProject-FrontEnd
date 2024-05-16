import shiftEmployeeUrl from "../../config/ShiftEmployeeController";
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initShiftEmployeeState = {
    token: '',
    data: {},
    activeMenuId: 0,
    myShiftList : [], //tüm izinler listesi
    isLoadingFetchFindAllMyShifts: false, //employeenin istediği izin loading'i
    isGotAllMyShifts: false,
}

export const fetchFindAllMyShifts =createAsyncThunk(
    'shiftEmployee/fetchFindAllMyShifts',
    async(token) => {
        try{
            const result = await fetch(`${shiftEmployeeUrl.findAllMyShifts}?token=${token}`, {            
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', 
            }
        }).then(data => data.json())
        .then(data => data);
        return result;
        }catch (error) {
            console.log('ERROR: shiftEmployee/fetchFindAllMyShifts', error);
        }
    }
);

const shiftEmployeeSlice = createSlice({
    name: 'shiftEmployee',
    initialState: initShiftEmployeeState,
    reducers: {
        setActiveMenuId(state,action) {
            state.activeMenuId=action.payload;
         }
    },
    extraReducers: (build)=>{
        build.addCase(fetchFindAllMyShifts.pending,(state)=>{
            state.isLoadingFetchFindAllMyShifts =true;
        });
        build.addCase(fetchFindAllMyShifts.fulfilled, (state,action)=>{
            state.isLoadingFetchFindAllMyShifts = false;
            state.isGotAllMyShifts = true;
            if(action.payload && action.payload.data){
            state.myShiftList = action.payload.data;
            }else{
                console.log("ERROR: fetchFindAllMyShifts.fulfilled");
            }
        });
        build.addCase(fetchFindAllMyShifts.rejected, (state,action)=>{
            state.isLoadingFetchFindAllMyShifts = false;
            state.isGotAllMyShifts = false;
        });
    }
});

export const {setActiveMenuId} = shiftEmployeeSlice.actions;
export default shiftEmployeeSlice.reducer;