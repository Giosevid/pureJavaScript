var funciones = [];

for (let index = 0; index < 10; index++) {
  //funciones.push( function(){console.log(index)})
  funciones.push( (function(valor){
    return function() {
      console.log(valor)
    }
  })(index)
  )
}

funciones.forEach(function (func) {
  func()
})