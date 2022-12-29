const TABLA = 'usuario';
const bcrypt = require('bcrypt');
const auth  = require('../../auth');

module.exports = function (dbinyectada) {
    let db = dbinyectada;
    if (!db) {
        db = require('../../db/mysql');
    }

    async function login(username, password) {
        const data = await db.query(TABLA, { username: username });
        return bcrypt.compare(password, data.password)
            .then(resultado => {
                if (resultado) {
                    //generar un token
                    return auth.asignarToken({...data});
                } else {
                    throw new Error('Información inválida');
                }
            }
            )
    }



    async function agregar(data) {
        const authData = {
            id: data.id,
        }
        if (data.username) {
            authData.username = data.username;
        }
        if (data.password) {
            authData.password = await bcrypt.hash(data.password.toString(), 5);
        }
        authData.idEmpleado = data.idEmpleado;
        return db.agregar(TABLA, authData);
    }



    return {
        agregar,
        login
    }
}
