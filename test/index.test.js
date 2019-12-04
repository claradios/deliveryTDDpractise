import { apiFoodFix } from './fixtures/apiFoodFix.js';
import { callApi, ENDPOINT, errorMsg } from '../js/service.js';

// function callApi() {
//     return fetch(ENDPOINT).then(res => res.json())
// }


describe('testing api', () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    it('calls restaurant api', () => {
        fetch.mockResponseOnce(JSON.stringify(apiFoodFix))
        //assert on the response
        callApi().then(res => {
            expect(res).toEqual(apiFoodFix)
        })

        //assert on the times called and arguments given to fetch
        expect(fetch.mock.calls.length).toEqual(1)
        expect(fetch.mock.calls[0][0]).toEqual(ENDPOINT)
    });

    test('throw error', () => {
        fetch.mockReject(errorMsg)
        callApi();
        expect(fetch).toEqual(errorMsg)
        
    })
});

describe('callApi', () => {
  
})