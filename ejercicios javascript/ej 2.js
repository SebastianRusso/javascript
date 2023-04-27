/*- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)*/

const alumno = {
    nombre: "seba",
    edad: 25,
    desarrollador: true,
    fechaNacimiento: new Date("july 10 1997"),
    libroFavorito: {
        titulo: "Inferno",
        autor: " Dan Brown ",
        fechaPubli: new Date("may 13 2014"),
        urlLibro: "https://www.google.com/search?client=opera-gx&q=inferno+dan+brown&sourceid=opera&ie=UTF-8&oe=UTF-8"

    }
}

console.log(alumno);



