import { configureStore } from "@reduxjs/toolkit";
import {
    authSlice,
    companySlice,
    leaveEmployeeSlice,
    leaveManagerSlice,
    managerSlice
} from './feautures';

const store = configureStore({
    reducer: {
        auth: authSlice,
        manager: managerSlice,
        company: companySlice,
        leaveManager: leaveManagerSlice,
        leaveEmployee: leaveEmployeeSlice
    }
});

export default store;