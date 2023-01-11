
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
        const consulta = "SELECT * FROM EMPLEADO,USUARIO,ROL,CARGO WHERE ROL.id = USUARIO.IdRol AND USUARIO.IdEmpleado = EMPLEADO.id AND EMPLEADO.IdCargo = CARGO.id";             
        return db.mysql_query(consulta);
    }

    return {
        todos,
        uno,
        agregar,
        eliminar,
        getEmploys
    }
}