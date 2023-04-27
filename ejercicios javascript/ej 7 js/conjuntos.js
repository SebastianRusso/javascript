// - Un nuevo Set con los nombres de tu familia

const array = ['pepe','marta','diego','marlon','sebas'];
const primerset = new Set(array);
console.log(primerset);

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

primerset.add("sebas");
console.log(primerset);

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)

primerset.add("Javascript");
console.log(primerset);