// - factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break //

let unidades = 0;
let factorial = 1;

while (true) {
    console.log(unidades)
    unidades++
    factorial *= unidades;

    if (unidades === 10) {
        break;
    }

} console.log(factorial)
