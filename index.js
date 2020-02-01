const axios = require('axios');
var ncov = {
    getNews: async function() {
        const res = await axios.get('https://coronavirus-monitor.ru/api/v1/statistics/get-news');
        return res.data.data;
    },
    getCountries: async function() {
        const res = await axios.get('https://coronavirus-monitor.ru/api/v1/statistics/get-countries');
        return res.data.data;
    },
    getСities: async function() {
        const res = await axios.get('https://coronavirus-monitor.ru/api/v1/statistics/get-cities');
        return res.data.data;
    },
    getRussianSubjects: async function() {
        const res = await axios.get('https://coronavirus-monitor.ru/api/v1/statistics/get-russian-subjects');
        return res.data.data;
    }
}
module.exports = ncov;
