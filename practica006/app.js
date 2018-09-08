
const archivo = require('./archivo');
const argv = require('yargs').argv;
const colors = require('colors');

console.log(argv);

let verbo = argv._[0];

switch(verbo){
    case "agregar":
        let alumno = argv.a || argv.alumno;
        archivo.agregarAlumno(alumno);
    break;

    default:
        console.log("No se reconoce el comando".red);
    break;
}
