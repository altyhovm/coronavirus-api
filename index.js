const axios = require('axios');
var ncov = {
    getNews: async function() {
        let res = await axios.get('https://coronavirus-monitor.ru/api/v1/statistics/get-news');
        return res.data.data;
    },
    getCountries: async function() {
        let res = await axios.get('https://coronavirus-monitor.ru/api/v1/statistics/get-countries');
        return res.data.data;
    },
    getRussianSubjects: async function() {
        let res = await axios.get('https://coronavirus-monitor.ru/api/v1/statistics/get-russian-subjects');
        return res.data.data;
    }
}
module.exports = ncov;