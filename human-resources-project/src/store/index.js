import { configureStore } from "@reduxjs/toolkit";
import {
    authSlice,
    companySlice,
    leaveEmployeeSlice,
    leaveManagerSlice,
    managerSlice,
    expensesSlice,
    employeeSlice
} from './feautures';

const store = configureStore({
    reducer: {
        auth: authSlice,
        manager: managerSlice,
        employee: employeeSlice,
        company: companySlice,
        leaveManager: leaveManagerSlice,
        leaveEmployee: leaveEmployeeSlice,
        expenses: expensesSlice
    }
});

export default store;