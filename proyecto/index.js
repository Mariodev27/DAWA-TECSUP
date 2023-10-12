//Ejercicio01
// var _ = require("underscore");
//Ejercicio02 & 03
var param_replacer = require('./lib/replace');

//Ejercicio03
if(typeof exports !== 'undefined'){
    if(typeof module !== 'undefined'){
        exports = module.exports = param_replacer;
    }
    exports.param_replacer = param_replacer;
} else{
    root.param_replacer = param_replacer;
}

//Ejercicio02
// var objetivo = "%hello% %world%! -- %world% %hello%!";
// var idioma ="es";
// var reemplazos = {
//     "en":{
//         "hello": "Hello",
//         "world": "World"
//     },
//     "es":{
//         "hello": "Hola",
//         "world": "Mundo"
//     }
// };

// var resultado = param_replacer.replace(objetivo, reemplazos[idioma]);

// console.log(resultado);


//Ejercicio01
// var lista=[1,2,3,4,5,6]; _.each(lista,function(item){
//     console.log(item);
// });

// var employeesCollection = [
//     {
//         "id":1,
//         "name":"Soni",
//         "designation":"SE",
//         "salary":25000
//     },
//     {
//         "id":2,
//         "name":"Rohit",
//         "designation":"SSE",
//         "salary":35000
//     },
//     {
//         "id":3,
//         "name":"Akanksha",
//         "designation":"Manager",
//         "salary":45000
//     },
//     {
//         "id":4,
//         "name":"Mohan",
//         "designation":"Accountant",
//         "salary":30000
//     },
//     {
//         "id":5,
//         "name":"Gita",
//         "designation":"SSE",
//         "salary":35000
//     }

// ];

// var cargos = _.map(employeesCollection, function(employee){
//     return {nombre: employee.name, cargo: employee.designation};
// });
// console.log(cargos);

// console.log(_.pluck(employeesCollection, "name"));

// //Ultima funcion
// var empleados_see = _.chain(employeesCollection)
//     .filter(function (employee){
//         return employee.designation === 'SSE';
//     })
//     .map(function (employee){
//         return {name: employee.name, id:employee.id};
//     })
//     .value();

//     console.log(empleados_see);