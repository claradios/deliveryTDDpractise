const ENDPOINT = 'http://5de7d1bfb1ad690014a4e835.mockapi.io/api/food';
const errorMsg = 'error';

function callApi() {
    return fetch(ENDPOINT)
    .then( res => res.json())
    .catch(err => errorMsg);          
}

export {callApi, ENDPOINT, errorMsg };