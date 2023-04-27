//Crea un archivo llamado objetos.js que contenga las siguientes líneas

//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const yo = {nombre: "seba", apellido: "ese", edad : 30 , desarrollador: true };


//- Una variable que obtenga tu edad a partir del objeto anterior

const edad = yo.edad;
console.log(edad);

//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

const amigo = { nombre: "pepe", apellido: "zota", edad : 31 , desarrollador: false}
const amigo2 = { nombre: "pepa", apellido: "reina", edad : 28 , desarrollador: false} 

const lista = [].concat(yo, amigo, amigo2);
console.log(lista);

//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

lista.sort((a,b) => b.edad - a.edad );
console.log(lista);