const saludo = "Hola mundo";

console.log( saludo.substr(0,1) === "H")

//ES6
//startsWith
console.log( saludo.startsWith("Hola"))
console.log( saludo.startsWith("mu", 5))

//endsWith
console.log( saludo.endsWith("mundo"))

//includes
console.log( saludo.indexOf("m"))
console.log( saludo.includes("m"))
console.log( saludo.includes("m", 6))