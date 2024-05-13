import restApi from './RestApis';

const managerUrl = {
    saveManager: restApi.managerUrl + '/save-manager',
    updateManager: restApi.managerUrl + '/update-manager'
}

export default managerUrl;