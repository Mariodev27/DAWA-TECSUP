//Ejercicio01
// function diasHastaNavidad() {
//     const fechaActual = new Date();
//     const navidad = new Date(fechaActual.getFullYear(), 11, 25); 
  
//     const diferenciaEnMilisegundos = navidad - fechaActual;
  
//     const diasHastaNavidad = Math.ceil(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));
  
//     return diasHastaNavidad;
//   }
  
//   const diasRestantes = diasHastaNavidad();
//   console.log(`Días hasta Navidad: ${diasRestantes}`);
  
//Ejercicio02
// function calcularEdad(fechaNacimiento) {
//     const fechaNacimientoObj = new Date(fechaNacimiento);
//     const fechaActual = new Date();
  
//     const edad = fechaActual.getFullYear() - fechaNacimientoObj.getFullYear();
  
//     if (fechaActual.getMonth() < fechaNacimientoObj.getMonth() || (fechaActual.getMonth() === fechaNacimientoObj.getMonth() && fechaActual.getDate() < fechaNacimientoObj.getDate())) {
//       edad--;
//     }
  
//     return edad;
//   }

//   const fechaNacimiento = '2003-07-27'; 
//   const edad = calcularEdad(fechaNacimiento);
//   console.log(`La edad es ${edad} años.`);


//Ejercicio03
const fun = require('./lib/functions');

let form = {
    "name":{
        "value":"Mario",
        "required": true,
        "type": "text"
    },
    "lastname":{
        "value":"Santisteban",
        "required": false,
        "type": "text"
    },
    "birthday":{
        "value":"2003-07-27",
        "required": true,
        "type": "date"
    },
    "email":{
        "value":"mario.santisteban@tecsup.edu.pe",
        "required": true,
        "type": "email"
    },
    "age":{
        "value":20,
        "required": true,
        "type": "number"
    }
}

console.log(fun.validateForm(form));