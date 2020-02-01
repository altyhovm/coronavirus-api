const ncov = require('./index')
async function get() {
    console.log(await ncov.getNews());
    console.log(await ncov.getCountries());
    console.log(await ncov.getСities());
    console.log(await ncov.getRussianSubjects());
}

get()
