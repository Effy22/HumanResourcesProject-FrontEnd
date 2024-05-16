import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import expensesUrl from "../../config/ExpensesController";
//import ExpensesType from '../../components/organisms/Employee/AddExpenses';


const initExpensesState = {
    data: {},
    token: '',
    activeMenuId: 0,
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
            console.log('Payload:', payload); 
            const result = await fetch(`${expensesUrl.addExpenses}?token=${payload.token}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'   
                },
                body: JSON.stringify({
                    amount: payload.amount,
                    description: payload.description,
                    token: payload.token,
                    expenseType: payload.expenseType  //enumu string olarak gönderecek,ExpensesType[payload.expenseType]  
                }) 
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
        async (token) => {
            console.log('find all token:', token); 
            const result=  await fetch(`${expensesUrl.findAllExpenses}?token=${token}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
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
            console.log('Payload:', payload); 
            const result = await fetch(`${expensesUrl.approveExpenses}?token=${payload.token}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: payload.expensesId,
                employeeId: payload.employeeId,
                token: payload.token
              })
        }).then(data=>data.json())
        .then(data=>data);
        return {  expensesId: payload.expensesId, result };
        }catch (error){
            console.log('ERROR: expenses/fetchApproveExpenses...: ', error);
        }
    }
);

export const fetchFindAllPendingExpenses = createAsyncThunk (  
    'expenses/fetchFindAllPendingExpenses', 
        async (token) => {
            const result=  await fetch(`${expensesUrl.findAllPendingExpenses}?token=${token}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data =>data.json())
        .then(data => data);
        return result;
    }
);



const expensesSlice =createSlice({
    name: 'expenses',
    initialState: initExpensesState,
    reducers:{
        setActiveMenuId(state,action) {
            state.activeMenuId=action.payload;
         }
    },
    extraReducers: (build) => {
        build.addCase(fetchAddExpenses.pending, (state) => {state.isLoadingAddExpenses=true;});
        build.addCase(fetchAddExpenses.fulfilled, (state,action) => {
            state.isLoadingAddExpenses=false;}
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
             state.pendingExpensesList = state.pendingExpensesList.filter(expenses => expenses.id !== expensesId);
            state.expensesList = [...state.expensesList, result]; 
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



export const {setActiveMenuId} = expensesSlice.actions;
export default expensesSlice.reducer;