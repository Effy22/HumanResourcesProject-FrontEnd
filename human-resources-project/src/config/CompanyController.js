import restApi from "./RestApis"

const companyUrl = {
    viewCompanies: restApi.companyUrl + '/get-all',
    viewCompaniesAppling: restApi.companyUrl + '/get-all-pending-companies',
    approveCompany: restApi.companyUrl + '/approve-company',
    rejectCompany: restApi.companyUrl + '/reject-company',
    updateCompany: restApi.companyUrl +'/update',
    getAllCompanyCount: restApi.companyUrl +'/get-all-company-count'

}

export default companyUrl;