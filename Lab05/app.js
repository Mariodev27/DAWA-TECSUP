
const express = require('express');
const jwt = require("jsonwebtoken");
const config = require('./public/scripts/config');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.all('/user',(req, res, next) => {
    console.log('Por aqui pasamos');
    next();
});


//********User*********//
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/public/register.html');
});

app.post('/singup', (req, res) => {

    console.log(`Post pagina de login ${req.body.username} `);
    console.log(`Post pagina de login ${req.body.password} `);
    
    if(`${req.body.username}` === 'Mario'
           && `${req.body.password}` === '27'){
            console.log('Nombre: ' + `${req.body.username}` + ', Password: ' + `${req.body.password}`);
            const user = {
                nombre : `${req.body.username}`,
                password: `${req.body.password}`
            }
            jwt.sign({user: user}, 'secretkey', {expiresIn:'3200s'}, (err, token) => {
                res.json({token: token});
                res.sendFile(__dirname + '/public/index.html');
            });
    }
    else{
            return res.status(401).json({
                auth: false,
                message: 'No token provided'
            });
    }
});

app.post('/singin', verifyToken, (req, res) => {

     jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err){
            res.sendStatus(403);
            res.sendFile(__dirname + '/public/error.html');
        }else{
            res.json({
                mensaje: "Post fue Creado",
                authData: authData
            });
            res.sendFile(__dirname + '/public/index.html');
        }
    });

});

// Authorization: Bearer <token>
function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        next();
    }
    else{
        res.status(401);
        res.sendFile(__dirname + '/public/error.html');
    }
}

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000,  http://localhost:3000/')
})