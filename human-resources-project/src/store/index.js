import { configureStore } from "@reduxjs/toolkit";
import {
    authSlice,
    managerSlice,
    companySlice

} from './feautures';

const store = configureStore({
    reducer: {
        auth: authSlice,
        manager: managerSlice,
        company: companySlice
    }
});

export default store;