const ncov = require('coronavirus-api')
async function get() {
    console.log(await ncov.getNews());
    console.log(await ncov.getCountries());
    console.log(await ncov.getRussianSubjects());
}

get()