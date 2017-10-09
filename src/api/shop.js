import axios from 'axios';

export default {
    getFarmers: (cb) => {
        axios.get(' http://localhost:3100/api/farmers')
            .then(function(response) {
                cb(response.data);

            })
            .catch(function(error) {
                cb(error);
            })
    },
    getProducts: (cb) => {
        axios.get(' http://localhost:3100/api/products')
            .then(function(response) {
                cb(response.data);
            })
            .catch(function(error) {
                cb(error);
            })
    }
}