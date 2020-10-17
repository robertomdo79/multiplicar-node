// requires

const fs = require('fs');
const colors = require('colors');

// module.exports.crearArchivo

// let listarTabla = (base, limite = 10) => {

//     return new Promise((resolve, reject) => {

//         if( !Number(base) ){
//             reject(`El valor introducido ${base} no es un numero`);
//             return;
//         }

//         let data = '';

//         for(let i=1; i <= limite; i++) {
//             data += `${base} * ${i} = ${base * i}\n`;
//         }
        
//         if (limite>0) {
//             resolve(data);
//         } else {
//             reject('Limite debe ser mayor a cero')
//         }
        

//     });
// };

let listarTabla = (base, limite = 10) => {

    console.log('=================='.green);
    console.log(`Tabla de ${base}`.green);
    console.log('=================='.green);

    for(let i=1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
    
};


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if( !Number(base) ){
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for(let i=1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        
        const resp = new Uint8Array(Buffer.from('Hello Node.js'));
        
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
        
          if (err) 
                reject(err);
          else 
                resolve(`tabla-${base}-al-${limite}.txt`);
          
        });

    });
};

module.exports = {
    crearArchivo,
    listarTabla
};