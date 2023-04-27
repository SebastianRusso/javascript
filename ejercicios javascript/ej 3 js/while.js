
// - factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while  //

let i = 0;
let max = 10;
let factorial = 1;

while (i < max) {
    console.log(i);
    i++;
    factorial *= i;
}

console.log(factorial)