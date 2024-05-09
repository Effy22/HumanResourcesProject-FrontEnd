import { configureStore } from "@reduxjs/toolkit";
import {
    authSlice,
    leaveEmployeeSlice,
    leaveManagerSlice,
    managerSlice
} from './feautures';

const store = configureStore({
    reducer: {
        auth: authSlice,
        manager: managerSlice,
        leaveManager: leaveManagerSlice,
        leaveEmployee : leaveEmployeeSlice
    }
});

export default store;