const funcion1 =async()=>{
    const funcion2 =()=>{
        console.log("hola")
    }
    const funcion3 =()=>{
        console.log("adios")
    }
    async function llamar(){
        await funcion2();
    }
    llamar();
    funcion3();
}

funcion1()

