import { configureStore } from "@reduxjs/toolkit";
import {
    authSlice,
    companySlice,
    leaveEmployeeSlice,
    leaveManagerSlice,
    managerSlice,
    expensesSlice,
    employeeSlice,
    shiftEmployeeSlice,
    shiftManagerSlice

} from './feautures';

const store = configureStore({
    reducer: {
        auth: authSlice,
        manager: managerSlice,
        employee: employeeSlice,
        company: companySlice,
        leaveManager: leaveManagerSlice,
        leaveEmployee: leaveEmployeeSlice,
        expenses: expensesSlice,
        shiftEmployee: shiftEmployeeSlice,
        shiftManager:shiftManagerSlice
    }
});

export default store;