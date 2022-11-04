/* const datos = [
    {
        id:1, titulo: "arr1"
    },
    {
        id:2, titulo: "arr2"
    },
    {
        id:3, titulo: "arr3"
    }
]; */
const datos=[];
// ---- Sincrono ----
const getdatos = () =>{    
    return datos;
}

// ---- simulando con setTimeOut AsynCrono ----
// ---- devuelve "undefined" ----
const getdatos2 = () =>{    
    setTimeout(() => {
        return datos;
    }, 1500);
}

// ---- Promises ----
// ---- objeto especial de javascript que
// ---- nos permite ejecutar un codigo y cuando este listo se devuelve algo.
const getdatos3 = () =>{    
    return new Promise((resolve, reject) =>{       
        setTimeout(() => {
            datos.push({id:4, titulo:"Guillermo"});            
            resolve(datos);
        }, 1500);
    });   
}

// ---- usando Async y await
const getdatos4 = () =>{    
    return new Promise((resolve, reject) =>{       
        if(datos.length===0){
            reject(new Error('No existen datos en el array'))
        }
        setTimeout(() => {
            datos.push({id:5, titulo:"Elias"});            
            resolve(datos);
        }, 1500);
    });   
}

console.table(getdatos());
console.table(getdatos2()); 
getdatos3()
    .then((datos)=> console.table(datos))
    .catch(err => console.table(err));

async function obtdatos(){
    try{
        const datos2 = await getdatos4();
        console.table(datos2);
    }
    catch(err){
        console.table(err.message);
    }
    
};    
obtdatos();