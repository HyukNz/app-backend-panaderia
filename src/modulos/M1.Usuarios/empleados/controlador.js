const db = require('../../../db/mysql');

const TABLA = 'EMPLEADO';

module.exports = function (dbinyectada) {
    let db = dbinyectada;
    if (!db) {
        db = require('../../../db/mysql');
    }

    function todos() {
        return db.todos(TABLA);
    }

    function uno(id) {
        return db.uno(TABLA, id);
    }

    function agregar(body) {


        return db.agregar(TABLA, body);
    }


    function eliminar(body) {
        return db.eliminar(TABLA, body);
    }



    function getEmploys() {
        const TABLAS = 'EMPLEADO,USUARIO,ROL,CARGO';
        const consulta = `SELECT * FROM ${TABLA} 
                          WHERE EMPLEADO.USUARIO_ID = USUARIO.ID
                          AND EMPLEADO.ROL_ID = ROL.ID 
                          AND EMPLEADO.CARGO_ID = CARGO.ID`;
        return db.query(TABLAS, consulta);
    }

    return {
        todos,
        uno,
        agregar,
        eliminar,
        getEmploys
    }
}