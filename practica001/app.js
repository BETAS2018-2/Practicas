

console.log("Primer paso");

setTimeout(()=>{
    console.log("Segundo Paso");
}, 3000);

setTimeout(() => {
    console.log("Tercer paso");
}, 0);

setTimeout(() => {
    console.log("Cuarto Paso");
}, 0);

console.log("Paso Final");

