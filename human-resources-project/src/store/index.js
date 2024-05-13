import { configureStore } from "@reduxjs/toolkit";
import {
    authSlice,
    companySlice,
    leaveEmployeeSlice,
    leaveManagerSlice,
    managerSlice,
    expensesSlice
} from './feautures';

const store = configureStore({
    reducer: {
        auth: authSlice,
        manager: managerSlice,
        company: companySlice,
        leaveManager: leaveManagerSlice,
        leaveEmployee: leaveEmployeeSlice,
        expenses: expensesSlice
    }
});

export default store;