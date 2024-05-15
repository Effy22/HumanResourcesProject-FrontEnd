import shiftEmployeeUrl from "../../config/ShiftEmployeeController";
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initShiftEmployeeState = {
    token: '',
    data: {},
    activeMenuId: 0,
    allShiftList : [], //tüm izinler listesi
    isLoadingFetchFindAllMyShifts: false, //employeenin istediği izin loading'i
    isGotAllMyShifts: false,
}