const respuesta = require('./respuestas');

function errors(err, req, res, next) {
    console.error('[error]', err);

    const mensaje = err.message || 'Error interno';
    const estado = err.statusCode || 500;

    respuesta.error(req, res, mensaje, estado);
}
module.exports = errors;