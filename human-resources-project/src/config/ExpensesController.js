import restApi from "./RestApis";

const expensesUrl = {
    addExpenses: restApi.employeeRequirementsUrl + '/add-expenses',
    findAllExpenses: restApi.employeeRequirementsUrl + '/find-all-expenses',
    approveExpenses: restApi.managerRequirementsUrl + '/approve-expenses',
    findAllPendingExpenses: restApi.managerRequirementsUrl + '/find-all-pending-expenses'

}

export default expensesUrl;