import { configureStore } from "@reduxjs/toolkit";
import {
    authSlice,
    managerSlice
} from './feautures';

const store = configureStore({
    reducer: {
        auth: authSlice,
        manager: managerSlice
    }
});

export default store;