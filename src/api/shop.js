import axios from 'axios';

export default {
    getFarmers: (cb) => {
        axios.get('https://radiant-ravine-52401.herokuapp.com/api/farmers')
            .then(function(response) {
                cb(response.data);

            })
            .catch(function(error) {
                cb(error);
            })
    },
    getProducts: (cb) => {
        axios.get('https://radiant-ravine-52401.herokuapp.com/api/products')
            .then(function(response) {
                cb(response.data);
            })
            .catch(function(error) {
                cb(error);
            })
    }
}