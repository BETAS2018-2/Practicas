
let suma = (a, b) => {
    return new Promise((resolve, reject)=>{
        if(!Number(a)){
            reject("No es un número");
        } else {
            resolve(a + b);
        }
    });
}

let resta = async (a, b) =>{
    return a - b;
}

let operacion = async (a, b) =>{
    var res = await suma(a, b);
    res = await resta(res, a)
    console.log(res);
}


for (let a = 0; a < 10; a++) {
    operacion(a, 1000000);
}