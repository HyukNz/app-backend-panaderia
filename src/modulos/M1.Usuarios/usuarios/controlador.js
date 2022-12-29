const TABLA = 'usuario';
const bcrypt = require('bcrypt');
const auth = require('../../../auth');

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

    async function agregar(data) {
        const authData = {
            id: data.id,
            idEmpleado: data.idEmpleado
        }
        if (data.username) {
            authData.username = data.username.toLowerCase();
        }
        if (data.password) {
            authData.password = await bcrypt.hash(data.password.toString(), 5);
        }
       
        return db.agregar(TABLA, authData);
    }



    async function login(username, password) {
        const data = await db.query(TABLA, { username: username });

        return bcrypt.compare(password, data.password)
            .then(resultado => {
                if (resultado) {
                    //generar un token
                    return auth.asignarToken({ ...data });
                } else {
                    throw new Error('Información inválida');
                }
            }
            )
    }







    // try {
    //     const authData = {
    //         id: body.id,
    //     }
    //     if (body.username) {
    //         authData.username = body.username;
    //     }

    //     const dataUser = await db.query(TABLA, { username: body.username });
    //     if (dataUser.username.length > 0) {
    //         throw new Error('El usuario ya existe');
    //     }
    //     console.log('ESA WEA PASO');
    // } catch (error) {

    //     return error.message;
    // }



    // }
    // if (body.password) {
    //     authData.password = await bcrypt.hash(body.password.toString(), 5);
    // }

    // authData.idEmpleado = body.idEmpleado;

    //  return db.agregar(TABLA, body);



    function eliminar(body) {
        return db.eliminar(TABLA, body);
    }




    return {
        todos,
        uno,
        agregar,
        eliminar,
        login
    }
}
