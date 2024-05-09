import restApi from './RestApis';

const managerUrl = {
    saveManager: restApi.managerUrl + '/save-manager',
    addEmployee: restApi.managerUrl + '/add-employee',
    updateManager: restApi.managerUrl + '/update-manager',
}

export default managerUrl;