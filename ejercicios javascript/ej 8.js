//- Una función sin parámetros que devuelva siempre "true"

function verdad() {
    return true;
}
console.log(verdad());

//- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

async function promesa() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log("Hola soy una promesa");
}
console.log(promesa());

//- Una función generadora de índices pares automáticos

function* generarId() {
    let id = 0;
    while (true) {
        id += 2
        yield id
        if (id === 30) {
            return id
        }
    }
}

const gen = generarId();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);