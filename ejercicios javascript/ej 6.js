
//Una variable que contenga la lista de la compra (mínimo 5 elementos)
const lista = ["pan", "queso", "mortadela", "cocacola", "papas"];
console.log(lista);

//- Modifica la lista de la compra y añádele "Aceite de Girasol"
lista.push("aceite de girasol");
console.log(lista);

//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
lista.splice(5, 1);
console.log(lista);

//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [
    { pelicula: " Batman: el caballero de la noche ", director: " Christopher Nolan ", fecha: 2008 },
    { pelicula: " Avengers: Infinity War ", director: " Joe Russo ", fecha: 2018 },
    { pelicula: " Avengers: Endgame ", director: " Anthony Russo ", fecha: 2019 }

]
//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const año = peliculas.filter(obj => obj.fecha > 2010);
console.log(año);


console.log(peliculas);

//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const newdirector = peliculas.map(( valor => {
    return valor.director
}))
console.log(newdirector);

//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const newpeli = peliculas.map(( valor => {
    return valor.pelicula
}))
console.log(newpeli);

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const newlista1 = newdirector.concat(newpeli);
console.log(newlista1);

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const newlista = [...newdirector,...newpeli ];
console.log(newlista);

