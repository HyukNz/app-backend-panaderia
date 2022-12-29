const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config');

const antiguo_empleados = require('./modulos/antiguo_empleados/rutas');
const auth = require('./modulos/auth/rutas');


const clientes = require('./modulos/M1.Usuarios/clientes/rutas');
const cargos = require('./modulos/M1.Usuarios/cargos/rutas');
const roles = require('./modulos/M1.Usuarios/roles/rutas');
const empleados = require('./modulos/M1.Usuarios/empleados/rutas');
const usuarios = require('./modulos/M1.Usuarios/usuarios/rutas');


const error = require('./red/errors');

const app = express();

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

//middlewares
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//configuracion
app.set('port', config.app.port);

app.use('/api/antiguo_empleados', antiguo_empleados);
app.use('/api/auth', auth);
//rutas
app.use('/api/clientes', clientes);
app.use('/api/cargos', cargos);
app.use('/api/roles', roles);
app.use('/api/empleados', empleados);
app.use('/api/usuarios', usuarios);


app.use(error);


module.exports = app;