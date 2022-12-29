const TABLA = 'empleado';
const auth = require('../auth');



module.exports = function (dbinyectada) {
    let db = dbinyectada;
    if (!db) {
        db = require('../../db/mysql');
    }

    function todos() {
        return db.todos(TABLA);
    }

    function uno(id) {
        return db.uno(TABLA, id);
    }

    async function agregar(body) {
        const empleado = {
           
            nombre: body.nombre,
            apellido: body.apellido,
            ci: body.ci,
            direccion: body.direccion,
            sexo: body.sexo,
            fechaNacimiento: body.fechaNacimiento,
            idCargo: body.idCargo
        }

        const respuesta = await db.agregar(TABLA, empleado);
        let insertId = respuesta.insertId;
        // var insertId = 0;
        // if (body.id == 0) {
        //     insertId = respuesta.insertId;
        // } else {
        //     insertId = body.id;
        // }

        let respuesta2 = '';
        if (body.username || body.password) {
            respuesta2 = await auth.agregar( {
               
                username: body.username,
                password: body.password,
                idEmpleado: insertId
            });
        }
        console.log('TESTING');
        console.log(respuesta2);
        return respuesta2
    }


    function eliminar(body) {
        return db.eliminar(TABLA, body);
    }




    return {
        todos,
        uno,
        agregar,
        eliminar
    }
}
