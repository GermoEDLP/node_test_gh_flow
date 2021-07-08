const app = require('./app');
const morgan = require('morgan');

app.use(morgan('dev'));

app.listen(3000, ()=>{
    console.log('Servidor corriendo en puerto 3000');
});