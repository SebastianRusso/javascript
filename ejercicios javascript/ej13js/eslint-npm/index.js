/*Crea un nuevo proyecto de Node

- Instala la dependencia ESLint (https://www.npmjs.com/package/eslint)

- Duplica el archivo del ejercicio de la sesión 04-Textos

- Utiliza los tres estilos de comillas de forma alterna (comillas simples, dobles, 1)

- Crea el fichero .eslintrc.json

- Cambia la configuración de ESLint para que la versión ecmaVersion sea "latest"

- Cambia la configuración de ESLint para que muestre un error cada vez que las comillas no sean dobles

- Crea un script en el package.json para corregir automáticamente todos los errores

- Ejecuta el script a través del terminal */

let nombre = "sebastian"
let Apellido = "russ"
let estudiante = ` el "nombre" del 'estudiante' es ${nombre} y el apellido es ${Apellido} `
console.log(estudiante)
console.log(estudiante.toUpperCase())
console.log(estudiante.toLowerCase())
console.log(estudiante.length)
console.log(estudiante.charAt(4))
console.log(estudiante.charAt(50))
console.log(estudiante.trim().length)
console.log(estudiante.replace(/ /g,"#"))
console.log(estudiante.includes("nombre"))




