const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config');

const antiguo_empleados = require('./modulos/antiguo_empleados/rutas');
const auth = require('./modulos/auth/rutas');


// MODULO 1 - USUARIOS
// const clientes = require('./modulos/M1.Usuarios/clientes/rutas');
const cargos = require('./modulos/M1.Usuarios/cargos/rutas');
const roles = require('./modulos/M1.Usuarios/roles/rutas');
const empleados = require('./modulos/M1.Usuarios/empleados/rutas');
const usuarios = require('./modulos/M1.Usuarios/usuarios/rutas');


// MODULO 2 - VENTAS
const clientes = require('./modulos/M2.Ventas/cliente/rutas');
const detalleventas = require('./modulos/M2.Ventas/detalleventa/rutas');
const notaentregas = require('./modulos/M2.Ventas/notaentrega/rutas');
const pedidos = require('./modulos/M2.Ventas/pedido/rutas');
const productos = require('./modulos/M2.Ventas/producto/rutas');


// MODULO 3 - INVENTARIOS
const detallecompras = require('./modulos/M3.Inventario/detallecompra/rutas');
const materiasprima = require('./modulos/M3.Inventario/materiaprima/rutas');
const notacompras = require('./modulos/M3.Inventario/notacompra/rutas');
const proveedores = require('./modulos/M3.Inventario/proveedor/rutas');
const unidadesmedida = require('./modulos/M3.Inventario/unidadmedida/rutas');


// MODULO 4 - PROCESOS
const empleadomaquinas = require('./modulos/M4.Procesos/empleadomaquina/rutas');
const empleadoprocesos = require('./modulos/M4.Procesos/empleadoproceso/rutas');
const ingredientes = require('./modulos/M4.Procesos/ingredientes/rutas');
const maquinas = require('./modulos/M4.Procesos/maquinas/rutas');
const procesoprodutos = require('./modulos/M4.Procesos/procesoproducto/rutas');
const procesos = require('./modulos/M4.Procesos/procesos/rutas');
const recetas = require('./modulos/M4.Procesos/recetas/rutas');





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

//rutas modulo 1 - usuarios
app.use('/api/cargos', cargos);
app.use('/api/roles', roles);
app.use('/api/empleados', empleados);
app.use('/api/usuarios', usuarios);

//rutas modulo 2 - ventas
app.use('/api/clientes', clientes);
app.use('/api/detalleventas', detalleventas);
app.use('/api/notaentregas', notaentregas);
app.use('/api/pedidos', pedidos);
app.use('/api/productos', productos);


//rutas modulo 3 - inventarios
app.use('/api/detallecompras', detallecompras);
app.use('/api/materiasprima', materiasprima);
app.use('/api/notacompras', notacompras);
app.use('/api/proveedores', proveedores);
app.use('/api/unidadesmedida', unidadesmedida);

//rutas modulo 4 - procesos
app.use('/api/empleadomaquinas', empleadomaquinas);
app.use('/api/empleadoprocesos', empleadoprocesos);
app.use('/api/ingredientes', ingredientes);
app.use('/api/maquinas', maquinas);
app.use('/api/procesoprodutos', procesoprodutos);
app.use('/api/procesos', procesos);
app.use('/api/recetas', recetas);


app.use(error);


module.exports = app;