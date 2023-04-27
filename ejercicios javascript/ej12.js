/*- Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números
    de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
- Ejecuta la depuración de VSCode para visualizar la ejecución de la función*/

function fibonacci(num) {
    let fibList = [1, 1];
    for (let i = 2; i < num; i++) {
        fibList[i] = fibList[i - 1] + fibList[i - 2];
    }
    return fibList.slice(0, num);
}


console.log(fibonacci(6));