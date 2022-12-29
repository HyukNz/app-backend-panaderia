const express = require('express');
const respuesta = require('../../../red/respuestas');
const controlador = require('./index');

const router = express.Router();


router.get('/login', login);
router.get('/', todos);
router.get('/:id', uno);
router.post('/', agregar);
router.put('/', eliminar);



async function login(req, res, next) {
    try {
        const TABLA = 'usuario';
        const db = require('../../../db/mysql');
        const data = req.body;
        let dataUser = await db.query(TABLA, { username: data.username.toLowerCase() });
        console.log("ESTOS DATOS TIENE DATAUSER");
        console.log(dataUser);
        if (dataUser === undefined) {
            dataUser = {
                username: ''
            }
        }
        console.log(dataUser);
        if (dataUser.username.length > 0) {
            const token = await controlador.login(req.body.username.toLowerCase(), req.body.password);
            respuesta.success(req, res, token, 200);
        } else {
            respuesta.success(req, res, 'Usuario Incorrecto', 200);
        }
        
    } catch (err) {
        next(err);
    }
};

async function todos(req, res, next) {
    try {
        const items = await controlador.todos();
        respuesta.success(req, res, items, 200);
    } catch (err) {
        next(err);
    }


};

async function uno(req, res, next) {
    try {
        const id = req.params.id;
        const items = await controlador.uno(id);
        respuesta.success(req, res, items, 200);
    } catch (err) {
        next(err);
    }
};


async function agregar(req, res, next) {
    try {
        const TABLA = 'usuario';
        const db = require('../../../db/mysql');
        const data = req.body;

        let dataUser = await db.query(TABLA, { username: data.username.toLowerCase() });


        if (dataUser === undefined) {
            dataUser = {
                id: data.id,
                username: '',
                password: data.password,
                idEmpleado: data.idEmpleado
            }
        }

        if (dataUser.username.length > 0) {
            mensaje = 'El usuario ya se encuentra registrado';
        } else {
            const items = await controlador.agregar(req.body);
            if (req.body.id == 0) {
                mensaje = 'item agregado satisfactoriamente';
            } else {
                mensaje = 'item actualizado satisfactoriamente';
            }
        }

        respuesta.success(req, res, mensaje, 201);
    } catch (err) {
        next(err);
    }
};

async function eliminar(req, res, next) {
    try {
        const items = await controlador.eliminar(req.body);
        respuesta.success(req, res, 'item eliminado satisfactoriamente', 200);
    } catch (err) {
        next(err);
    }
};

// async function login(req, res, next) {
//     try {
//         console.log(req.body);
//         const token = await controlador.login(req.body.username, req.body.password);
//         respuesta.success(req, res, token, 200);
//     } catch (err) {
//         next(err);
//     }
// };




module.exports = router;