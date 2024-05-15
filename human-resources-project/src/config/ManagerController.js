import restApi from './RestApis';

const managerUrl = {
    saveManager: restApi.managerUrl + '/save-manager',
    updateManager: restApi.managerUrl + '/update-manager',
    findByToken: restApi.managerUrl + '/find-by-token',
}

export default managerUrl;