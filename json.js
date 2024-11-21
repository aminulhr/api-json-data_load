//stringify: js ar kono value ke json a convert korte use hoy
// parse: stringify koro kono value je normal js/js object a concert korte use hoy
const user = { id: 1, name: "rana", age: 23 };
console.log(user);
// js obj to json
const stringified = JSON.stringify(user);
console.log(stringified);
//json to normal js object
const parseFromJson = JSON.parse(stringified);
console.log(parseFromJson);
