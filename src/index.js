const app = require('./app');

app.listen(app.get('DB_PORT'),() => {
    console.log('Servidor escuchando en el puerto', app.get('port'));
});