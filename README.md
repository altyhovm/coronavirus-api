# coronavirus-api
Качаем:

```sh
$ npm i coronavirus-api
```
#
Подключаем либу к проекту:

```js 
const ncov = require('coronavirus-api')
```

Дальше просто. Есть 4 метода: getNews, getCountries, getСities, getRussianSubjects.

Думаю, по названию методов понятно какой за что отвечает.
#
Код ниже выведет ответ в формате JSON. 

```js 
async function get() {
    console.log(await ncov.getNews());
    console.log(await ncov.getCountries());
    console.log(await ncov.getСities());
    console.log(await ncov.getRussianSubjects());
}
get()
```
Немного мусорный код. Да. Но это просто пример. 

Используйте модуль в своих проектах и не болейте.
