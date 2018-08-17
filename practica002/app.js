let alumnos = [
    {
        id: 1,
        nombre: "Miguel",
        cal: 10
    },
    {
        id: 2,
        nombre: "Antonio",
        cal: 5
    },
    {
        id: 3,
        nombre: "Juan",
        cal: 3
    }
];


let getCalificacion = (id, callback) =>{
    let calificacion = alumnos.find(calificaciones => calificaciones.id === id);

    if(!calificacion){
        callback(`La calificación con el id ${id} no ha sido encontrada`, null);
    } else {
        callback(null ,calificacion)
    }
}


getCalificacion(1, (err, calificacion)=>{
    if (err) return console.log(err);
    console.log(calificacion);
});