import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import companyUrl from "../../config/CompanyController";

const initCompanyState = {
    companyList: [],
    companyApplingList: [],
    isLoadingViewCompanies: false,
    isLoadingViewCompaniesAppling: false,
    isLoadingApproveCompany: false,
    isLoadingRejectCompany:false,
    isLoadingUpdateCompany: false,
    isLoadingCompanyCount: false,
    activeMenuId: 0,
    data: {}
}

export const fetchViewCompanies =createAsyncThunk(
    'company/fetchViewCompanies',
    async() => {
        const result= await fetch(companyUrl.viewCompanies,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => data.json())
        .then(data => data);
        return result;
    });

export const fetchViewCompaniesAppling =createAsyncThunk(
    'company/fetchViewCompaniesAppling',
    async() => {
        const result= await fetch(companyUrl.viewCompaniesAppling,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => data.json())
        .then(data => data);
        return result;
    });

 export const fetchApproveCompany = createAsyncThunk(
        'company/fetchApproveCompany',
        async(payload) => {
            try{
                const result = await fetch(companyUrl.approveCompany,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(payload)
            }).then(data=>data.json())
            .then(data=>data);
            return result;
            }catch (error){
                console.log('ERROR: company/fetchApproveCompany...: ', error);
            }
        }
);

export const fetchRejectCompany = createAsyncThunk(
    'company/fetchRejectCompany',
    async(payload) => {
        try{
            const result = await fetch(companyUrl.rejectCompany,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(payload)
        }).then(data=>data.json())
        .then(data=>data);
        return result;
        }catch (error){
            console.log('ERROR: company/fetchRejectCompany...: ', error);
        }
    }
);

export const fetchUpdateCompany = createAsyncThunk(
    'company/fetchUpdateCompany',
    async(payload) => {
        try{
            const result = await fetch(companyUrl.updateCompany,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(payload)
        }).then(data=>data.json())
        .then(data=>data);
        return result;
        }catch (error){
            console.log('ERROR: company/fetchUpdateCompany...: ', error);
        }
    }
);

export const fetchCompanyCount =createAsyncThunk(
    'company/fetchCompanyCount',
    async() => {
        const result= await fetch(companyUrl.getAllCompanyCount,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => data.json())
        .then(data => data);
        return result;
    });


const companySlice = createSlice({
    name: 'company',
    initialState: initCompanyState,
    reducers:{
        setActiveMenuId(state,action) {
            state.activeMenuId=action.payload;
         }
    },

    extraReducers: (build) => {
        build.addCase(fetchViewCompanies.pending, (state) => {state.isLoadingViewCompanies=true;});
        build.addCase(fetchViewCompanies.fulfilled, (state,action) => {
            state.isLoadingViewCompanies=false;
            if(action.payload.status===200){
            state.companyList=action.payload.data;}}
        );
        build.addCase(fetchViewCompanies.rejected, (state) => {state.isLoadingViewCompanies=false;});


        build.addCase(fetchViewCompaniesAppling.pending, (state) => {state.isLoadingViewCompaniesAppling=true;});
        build.addCase(fetchViewCompaniesAppling.fulfilled, (state,action) => {
            state.isLoadingViewCompaniesAppling=false;
            if(action.payload.status===200){
            state.companyApplingList=action.payload.data; }});
        build.addCase(fetchViewCompaniesAppling.rejected, (state) => {state.isLoadingViewCompaniesAppling=false;});

        build.addCase(fetchApproveCompany.pending, (state) => {state.isLoadingApproveCompany=true;});
        build.addCase(fetchApproveCompany.fulfilled, (state,action) => {
            state.isLoadingApproveCompany=false;
            console.log(action.payload);});
        build.addCase(fetchApproveCompany.rejected, (state) => {state.isLoadingApproveCompany=false;});

        build.addCase(fetchRejectCompany.pending, (state) => {state.isLoadingRejectCompany=true;});
        build.addCase(fetchRejectCompany.fulfilled, (state,action) => {
            state.isLoadingRejectCompany=false;
            console.log(action.payload);});
        build.addCase(fetchRejectCompany.rejected, (state) => {state.isLoadingRejectCompany=false;});

        build.addCase(fetchUpdateCompany.pending, (state) => {state.isLoadingUpdateCompany=true;});
        build.addCase(fetchUpdateCompany.fulfilled, (state,action) => {
            state.isLoadingUpdateCompany=false;
            console.log(action.payload);});
        build.addCase(fetchUpdateCompany.rejected, (state) => {state.isLoadingUpdateCompany=false;});

        build.addCase(fetchCompanyCount.pending, (state) => {state.isLoadingCompanyCount=true;});
        build.addCase(fetchCompanyCount.fulfilled, (state,action) => {
            state.isLoadingCompanyCount=false;
            console.log(action.payload);});
        build.addCase(fetchCompanyCount.rejected, (state) => {state.isLoadingCompanyCount=false;});
    }
});



export const {setActiveMenuId} = companySlice.actions;
export default companySlice.reducer;

