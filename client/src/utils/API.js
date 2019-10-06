import axios from 'axios';
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
    }
}

// module.exports = service