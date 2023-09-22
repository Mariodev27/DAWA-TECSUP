/* 1era Parte */

const http = require('http');

var servidor = http.createServer((req, res) => {
    res.status = 303;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

servidor.listen(3000, () =>{
    console.log('server on port 3000....!!!');
	
}); 

// 2da Parte hacer 1 y 2 de la lista en la carpeta //

// /*

/*const express = require ('express');
const app = express();

app.get('/', (req, res) => { 
    res.send('Peticion GET Recibida.......!!!');
});

app.post('/about', (req, res) => { 
    res.send('Peticion POST Recibida');
});

app.put('/contact', (req, res) => { 
    res.send('Peticion Actualizacion Recibida');
});

app.delete('/test', (req, res) => { 
    res.send('<h1>Peticion de Eliminacion Recibida</h1>');
});

app.listen(3000, () => {
    console.log('Server on port 3000');
});

 */


// 3era Parte hacer montar NODEMON //
 /*

const express = require ('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Peticion GET Recibida</h1>');
});

app.post('/user', (req, res) => { 
    res.send('<h1>Peticion POST Recibida para ser</h1>');
});

app.post('/about', (req, res) => { 
    res.send('<h1>Peticion POST Recibida para about</h1>');
});

app.put('/contact', (req, res) => { 
    res.send('<h1>Peticion Actualizacion Recibida para contact</h1>');
});

app.delete('/test', (req, res) => { 
    res.send('<h1>Peticion de Eliminacion Recibida</h1>');
});

app.listen(3000, () => {
    console.log('Server on port 3000');
});

 */

// 4ta Parte hacer montar NODEMON //

/*

const express = require ('express');
const app = express();

app.get('/', (req, res) => { 
    res.send('Peticion GET Recibida');
});

app.post('/user', (req, res) => { 
    res.send('Peticion POST Recibida para ser');
});

app.post('/about', (req, res) => { 
    res.send('Peticion POST Recibida para about');
});

app.put('/contact', (req, res) => { 
    res.send('Peticion Actualizacion Recibida');
});

app.delete('/test', (req, res) => { 
    res.send('<h1>Peticion de Eliminacion Recibida</h1>');
});

app.listen(3000, () => {
    console.log('Server on port 3000');
});

*/

// 5ta Parte probar desde POSTMAN ver 6 en lista//

 /*

const express = require ('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => { 
    res.send('Peticion GET Recibida');
});

app.get('/user', (req, res) => { 
    res.json({
        username: 'Jacko',
        lastname: 'Paredes'
    });
});

app.post('/user', (req, res) => { 
    console.log(req.body);
    res.send('Peticion POST Recibida');
});

app.post('/about', (req, res) => { 
    res.send('Peticion POST Recibida para about');
});

app.put('/contact', (req, res) => { 
    res.send('Peticion Actualizacion Recibida');
});

app.delete('/test', (req, res) => { 
    res.send('<h1>Peticion de Eliminacion Recibida</h1>');
});

app.listen(3000, () => {
    console.log('Server on port 3000');
});

 */

// 6ta Parte probar pasar parametro desde POSTMAN ver 7 en lista//

 /*

const express = require ('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => { 
    res.status(200).send('Peticion GET Recibida');
});

app.get('/user', (req, res) => { 
    res.json({
        username: 'Jacko',
        lastname: 'Paredes'
    });
});

app.post('/user:id', (req, res) => { 
    console.log(req.body);
	console.log(req.params);
    res.send('Peticion POST Recibida');
});

app.post('/about', (req, res) => { 
    res.send('Peticion POST Recibida para about');
});

app.put('/contact', (req, res) => { 
    res.send('Peticion Actualizacion Recibida');
});

app.put('/user:userId', (req, res) => { 
    res.send(`Usuario ${req.params.userId} Actualizado`);
});

app.delete('/test', (req, res) => { 
    res.send('<h1>Peticion de Eliminacion Recibida</h1>');
});

app.delete('/user/:userId', (req, res) => { 
    res.send(`Usuario ${req.params.userId} Eliminado`);
});

app.listen(3000, () => {
    console.log('Server on port 3000');
});

 */

// 7ta Parte probar app.all//

 /*

const express = require ('express');
const app = express();

app.use(express.json());

app.all('/user', (req, res, next) => { 
    console.log('Por Aqui Paso');
    //next();
});

app.get('/', (req, res) => { 
    res.send('Peticion GET Recibida');
});

app.get('/user', (req, res) => { 
    res.json({
        username: 'Jacko',
        lastname: 'Paredes'
    });
});

app.post('/user:id', (req, res) => { 
    console.log(req.body);
	console.log(req.params);
    res.send('Peticion POST Recibida');
});

app.post('/about', (req, res) => { 
    res.send('Peticion POST Recibida para about');
});

app.put('/contact', (req, res) => { 
    res.send('Peticion Actualizacion Recibida');
});

app.put('/user:id', (req, res) => { 
    res.send(`Usuario ${req.params.userId} Actualizado`);
});

app.delete('/test', (req, res) => { 
    res.send('<h1>Peticion de Eliminacion Recibida</h1>');
});

app.delete('/user/:userId', (req, res) => { 
    res.send(`Usuario ${req.params.userId} Eliminado`);
});

app.listen(3000, () => {
    console.log('Server on port 3000');
});

 */

// 8va Parte parsear un JSON//

// /*

const str = '[{ "name": "Jose Perez", "edad": 42 },' +
           '{ "name": "Carlos Díaz", "edad": 24 },' +
           '{ "name": "Peter Mamani", "edad": 35 }]';

const obj = JSON.parse(str);

const express = require ('express');
const app = express();

app.use(express.json());

app.all('/user', (req, res, next) => { 
    console.log('Por Aqui Paso');
    next();
});

app.get('/', (req, res) => { 
    for (var i = 0; i < obj.length; i++) {
        console.log('Nombre: ' + obj[i].name + ', Edad:' + obj[i].edad);
      }
	res.send('Parseo JSON correcto');
});

app.get('/user', (req, res) => { 
    res.json({
        username: 'Jacko',
        lastname: 'Paredes'
    });
});

app.post('/user:id', (req, res) => { 
    console.log(req.body);
	console.log(req.params);
    res.send('Peticion POST Recibida');
});

app.post('/about', (req, res) => { 
    res.send('Peticion POST Recibida para about');
});

app.put('/contact', (req, res) => { 
    res.send('Peticion Actualizacion Recibida');
});

app.put('/user:id', (req, res) => { 
    res.send(`Usuario ${req.params.userId} Actualizado`);
});

app.delete('/test', (req, res) => { 
    res.send('<h1>Peticion de Eliminacion Recibida</h1>');
});

app.delete('/user/:userId', (req, res) => { 
    res.send(`Usuario ${req.params.userId} Eliminado`);
});

app.listen(3000, () => {
    console.log('Server on port 3000');
});

// */