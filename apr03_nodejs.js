const os = require('os');
const fs = require('fs'); // ---- permite interactuar con archivos ----

// ---- Modulos CORE --- de NodeJs
console.table(os.platform());
console.table(os.release());
console.log('memoria libre:', os.freemem(), 'bytes');
console.log('memoria total:', os.totalmem(), 'bytes');

// ---- Modulo FileSystem ---- de NodeJS 
fs.writeFileSync('./Apoyo/texto.txt', 'linea 1', function(err){
    if(err){
        console.table(err);
    }
    console.log('Archivo Creado');
});
