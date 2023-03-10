const server = require('./src/app')

const PORT = 3100

server.listen(PORT || 3002, ()=> console.log('esta escuchando el puerto 3100'))