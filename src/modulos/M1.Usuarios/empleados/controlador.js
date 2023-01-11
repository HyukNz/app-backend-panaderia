
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
        const consulta = 'ROL.id = USUARIO.IdRol AND USUARIO.IdEmpleado = EMPLEADO.id AND EMPLEADO.IdCargo = CARGO.id';             
        return db.mysql_query(TABLAS, consulta);
    }

    return {
        todos,
        uno,
        agregar,
        eliminar,
        getEmploys
    }
}