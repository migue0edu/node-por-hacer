const fs = require('fs');

let listadoPorHacer= [];

const guardarDB = () => {
  let data = JSON.stringify(listadoPorHacer);

  fs.writeFile(`./db/data.json`, data, (err) =>{
    if(err){
      throw new Error('Error al escribir el archivo', err)
    }else{
      console.log('Datos guardados');
    }
  });
}

const cargarDB = () => {
  try {
    listadoPorHacer = require('../db/data.json');
  } catch (e) {
    listadoPorHacer = [];
  } finally {

  }

}

const crear = (descripcion) => {
  cargarDB();
  let porHacer = {
    descripcion,
    completado: false
  }
  listadoPorHacer.push(porHacer);
  return porHacer;
}

const getListado = () => {
  cargarDB();
  return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
  cargarDB();
  let index = listadoPorHacer.findIndex( tarea => {
    return tarea.descripcion === descripcion;
  });
  if(index >= 0){
    listadoPorHacer[index].completado = completado;
    guardarDB();
    return true;
  }
  return false;
}

const borrar = (descripcion) => {
  cargarDB();
  const longitudArr = listadoPorHacer.length;
  listadoPorHacer = listadoPorHacer.filter(elemento => elemento.descripcion !== descripcion);
  console.log(longitudArr, listadoPorHacer.length);
  if(longitudArr === listadoPorHacer.length){
    return false;
  }
  guardarDB();
  return true;
}

module.exports = {
  crear,
  guardarDB,
  getListado,
  actualizar,
  borrar
}
