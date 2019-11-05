import axios from 'axios';
import CSAPI from '../utils/token-config';
// import config from './config'

export default  {
    
    testConnect: function(data) {
        return axios.get('/api/test', data);

    },

    runAuth: function(data) {
        console.log(data);
        return axios.put('/api/auth/', data)
        .then(result => {
            console.log(result.status + " || " + result.statusText );
            return result;
        });
    },

    getReport: function () {
        return axios.get('/api/report/')
        .then(result => {
            console.log(result)
            return result;
        })
    },

    tokenize: function(cardNum) {
        console.log('tokenizing: ' + cardNum);
        let reqBody = {
            "account": cardNum
        };
        return CSAPI.post('/tokenize', reqBody)
        .then(result => {
            console.log(result.data);
            return result;
        })
    },

    runVoid: function(retRef) {
        console.log('voiding: ' + retRef);
        return axios.put('/api/void/', retRef)
        .then(result => {
            console.log(result.status + " || " + result.statusText );
            return result;
        });
    }
}

// module.exports = service