//const argv = require('yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
  case 'crear':
    porHacer.crear(argv.descripcion);
    porHacer.guardarDB();
    console.log(`Tarea creada: ${argv.descripcion}`);
    break;

  case 'listar': //Agregar clistado por estado.
      let listado = porHacer.getListado();
      for (let tarea of listado) {
        console.log('============Por Hacer==========='.green);
        console.log('> '.blue + tarea.descripcion.cyan);
        console.log('Estado: ', colors.yellow(tarea.completado));
        console.log('================================'.green);
        console.log('');
      }
      console.log('Mostar todas las tareas por hacer');
      break;

    case 'actualizar':
    let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
      console.log(actualizado);
      break;

    case 'borrar':
      let borrado = porHacer.borrar(argv.descripcion);
      console.log(borrado);
      break;

  default:
      console.log('Comando no es reconocido.')

}
