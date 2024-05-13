import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import expensesUrl from "../../config/ExpensesController";


const initExpensesState = {
    expensesList: [],
    pendingExpensesList:[],
    isLoadingAddExpenses: false,
    isLoadingFindAllExpenses: false,
    isLoadingApproveExpenses: false,
    isLoadingFindAllPendingExpenses: false
}

export const fetchAddExpenses = createAsyncThunk (
    'expenses/fetchAddExpenses', 
    async (payload) => {
        try {
            const result = await fetch(expensesUrl.addExpenses,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${payload.token}` 
                    
                },
                body: JSON.stringify(payload) 
            }).then(data => data.json()) 
            .then(data =>data);
            return result;
            
        } catch (error) {
            console.log('HATA fetchAddExpenses....: ', error); 
        }
    }
);

export const fetchFindAllExpenses = createAsyncThunk (  
    'expenses/fetchFindAllExpenses', 
        async (payload) => {
            const result=  await fetch(expensesUrl.findAllExpenses,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${payload.token}` 
            }
        }).then(data =>data.json())
        .then(data => data);
        return result;
    }
);

export const fetchApproveExpenses= createAsyncThunk (
    'expenses/fetchApproveExpenses', 
    async(payload) => {
        try{
            const result = await fetch(expensesUrl.approveExpenses,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${payload.token}` 
            },
            body: JSON.stringify(payload)
        }).then(data=>data.json())
        .then(data=>data);
        return { expensesId: payload, result };
        }catch (error){
            console.log('ERROR: expenses/fetchApproveExpenses...: ', error);
        }
    }
);

export const fetchFindAllPendingExpenses = createAsyncThunk (  
    'expenses/fetchFindAllPendingExpenses', 
        async (payload) => {
            const result=  await fetch(expensesUrl.findAllPendingExpenses,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${payload.token}` 
            }
        }).then(data =>data.json())
        .then(data => data);
        return result;
    }
);



const expensesSlice =createSlice({
    name: 'expenses',
    initialState: initExpensesState,
    reducers:{},
    extraReducers: (build) => {
        build.addCase(fetchAddExpenses.pending, (state) => {state.isLoadingAddExpenses=true;});
        build.addCase(fetchAddExpenses.fulfilled, (state,action) => {
            state.isLoadingAddExpenses=false;
            if(action.payload.data){
                alert("Expenses added successfully")}}
        );
        build.addCase(fetchAddExpenses.rejected, (state) => {state.isLoadingAddExpenses=false;});


        build.addCase(fetchFindAllExpenses.pending, (state) => {state.isLoadingFindAllExpenses=true;});
        build.addCase(fetchFindAllExpenses.fulfilled, (state,action) => {
            state.isLoadingFindAllExpenses=false;
            if(action.payload.status===200){
            state.expensesList=action.payload.data; }});
        build.addCase(fetchFindAllExpenses.rejected, (state) => {state.isLoadingFindAllExpenses=false;});

        build.addCase(fetchApproveExpenses.pending, (state) => {state.isLoadingApproveExpenses=true;});
        build.addCase(fetchApproveExpenses.fulfilled, (state,action) => {
            const { expensesId, result } = action.payload;
             state.isLoadingApproveExpenses=false;
             state.expensesList = state.expensesList.filter(expenses => expenses.id !== expensesId);
            state.expensesList = [...state.expensesList, result]; //todo: buraya bak eksik!
        });
        build.addCase(fetchApproveExpenses.rejected, (state) => {
            state.isLoadingApproveExpenses=false;});

        build.addCase(fetchFindAllPendingExpenses.pending, (state) => {state.isLoadingFindAllPendingExpenses=true;});
        build.addCase(fetchFindAllPendingExpenses.fulfilled, (state,action) => {
             state.isLoadingFindAllPendingExpenses=false;
            if(action.payload.status===200){
            state.pendingExpensesList=action.payload.data; }});
        build.addCase(fetchFindAllPendingExpenses.rejected, (state) => {state.isLoadingFindAllPendingExpenses=false;});
                
         
    }
});




export default expensesSlice.reducer;