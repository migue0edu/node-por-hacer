const descripcion = {
  demand: true,
  alias: 'd',
  desc: 'Descripcion de la tarea por hacer.'
}
const completado = {
  demand: true,
  alias: 'c',
  desc: 'Marca si la tarea ya ha sido completada.',
  default: true
}

const argv = require('yargs')
                .command('crear','Crea una tarea por hacer.', {descripcion})
                .command('listar', 'Lista todas las tareas por hacer', {})
                .command('actualizar', 'Actualiza el estado de una tarea.', {descripcion, completado})
                .command('borrar','Elimina una tarea por hacer', {descripcion})
                .help()
                .argv;

module.exports = {
  argv
}
