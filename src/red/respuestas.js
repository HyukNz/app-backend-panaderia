exports.success = function(req, res, message, status){
    const statusCode = status || 200;
    const mensajeOK = message || '';
    res.status(statusCode).send({
        error: false,
        status: statusCode,
        body: mensajeOK
    });
}

exports.error = function(req, res, message, status){
    const statusCode = status || 500;
    const mensajeError = message || 'Error Interno de Servidor';
    res.status(statusCode).send({
        error: true,
        status: statusCode,
        body: mensajeError
    });
}