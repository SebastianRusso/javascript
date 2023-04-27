/*Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga tu altura en centímetros (entero)

- Una variable que contenga tu altura en metros (número de coma flotante)

- Una variable que contenga tu peso en kilogramos (número de coma flotante)

- Una variable que contenga tu altura en metros redondeada hacia arriba

- Una variable que contenga tu peso en kilogramos redondeado hacia abajo

- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript*/ 

let alturaCm = 181;
let alturaM = 1.81;
let pesoKg = 99.8;
let alturaMRedondeada = Math.ceil(alturaM);
let pesoKgRedondeado = Math.floor(pesoKg);
let comparacion = Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER;

console.log(alturaMRedondeada);
console.log(pesoKgRedondeado);
console.log(comparacion);



