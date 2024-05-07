import restApi from "./RestApis"

const companyUrl = {
    approveCompany: restApi.companyUrl + '/approve-manager',
    rejectCompany: restApi.companyUrl + '/reject-manager'

}

export default companyUrl;