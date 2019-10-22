const saludo ="Hola"

console.log( saludo.repeat(2))

const espacios = 12

const nombres = ["Giosevid", "Ramon", "Giovanni"]
const telefonos = ["0001155", "5558877", "7774411"]

for (i in nombres){
  let dif = espacios - nombres[i].length
  console.log( nombres[i] + " ".repeat(dif) + '| ' + telefonos[i] )
}