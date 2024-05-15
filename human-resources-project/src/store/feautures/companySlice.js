import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import companyUrl from "../../config/CompanyController";

const initCompanyState = {
    data: {},
    token: '',
    activeMenuId: 0,
    companyList: [],
    companyApplingList: [],
    updateList: [],
    isLoadingViewCompanies: false,
    isLoadingViewCompaniesAppling: false,
    isLoadingApproveCompany: false,
    isLoadingRejectCompany:false,
    isLoadingUpdateCompany: false,
    isLoadingCompanyCount: false  
}


export const fetchViewCompanies =createAsyncThunk(
    'company/fetchViewCompanies',
    async(token) => {
        try{
            const result= await fetch(`${companyUrl.viewCompanies}?token=${token}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await result.json();
        if (!result.ok) {
            throw new Error(data.message || 'Failed to fetch list');
        }
        return data;
        }catch (error) {
            console.error('Fetch view companies failed:', error);
            throw error;
        }    
    });

export const fetchViewCompaniesAppling =createAsyncThunk(
    'company/fetchViewCompaniesAppling',
    async(token) => {
        const result= await fetch(`${companyUrl.viewCompaniesAppling}?token=${token}`,{
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
                const result = await fetch(`${companyUrl.approveCompany}?token=${payload.token}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            }).then(data=>data.json())
            .then(data=>data);
            return { companyId: payload, result };
            }catch (error){
                console.log('ERROR: company/fetchApproveCompany...: ', error);
            }
        }
);

export const fetchRejectCompany = createAsyncThunk(
    'company/fetchRejectCompany',
    async(payload) => {
        try{
            const result = await fetch(`${companyUrl.rejectCompany}?token=${payload.token}`,{
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
            const result = await fetch(`${companyUrl.updateCompany}?token=${payload.token}`,{
            method: 'PUT',
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
    async(payload) => {
        const result= await fetch(companyUrl.getAllCompanyCount,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${payload.token}` 
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
            const { companyId, result } = action.payload;
             state.isLoadingApproveCompany=false;
             state.companyApplingList = state.companyApplingList.filter(company => company.id !== companyId);
              state.companyList = [...state.companyList, result];
            if(action.payload.status===200){
                //state.companyApplingList=action.payload.data; //bunu ekledim doğru mu?
                //state.companyList=action.payload.data; // ve bu doğru mu? listelerde approve olunca güncellensin istedim.
            }
    
        
        });
            
        build.addCase(fetchApproveCompany.rejected, (state) => {
            state.isLoadingApproveCompany=false;});

        build.addCase(fetchRejectCompany.pending, (state) => {state.isLoadingRejectCompany=true;});
        build.addCase(fetchRejectCompany.fulfilled, (state,action) => {
            const { companyId } = action.payload;
            state.isLoadingRejectCompany=false;
            state.companyApplingList = state.companyApplingList.filter(company => company.id !== companyId);
            console.log(action.payload);});
        build.addCase(fetchRejectCompany.rejected, (state) => {state.isLoadingRejectCompany=false;});

        build.addCase(fetchUpdateCompany.pending, (state) => {state.isLoadingUpdateCompany=true;});
        build.addCase(fetchUpdateCompany.fulfilled, (state,action) => {
            state.isLoadingUpdateCompany=false;
            console.log(action.payload);
            const updatedCompany = action.payload;

             // Şirket bilgilerini güncelleme
            state.companyList = state.companyList.map(company => {
                if (company.id === updatedCompany.id) {
                    return updatedCompany;
                 }
                 return company;
             });
             // Güncelleme listesini güncelleme
        state.updateList = [...state.updateList, updatedCompany];
        });
            
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

