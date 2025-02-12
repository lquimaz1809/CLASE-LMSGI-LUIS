// Object: Representa un objeto con propiedades
var persona1 = {
    nombre: 'Rocio',
    ciudad: 'Vera'
  };
  var persona2 = {
    nombre: 'Andres',
    ciudad: 'Huercal'
  };
  var persona3 = {
    nombre: 'Antonio',
    ciudad: 'Vera'
  };

  personas =[persona1,persona2,persona3]
  
  console.log("Objeto Persona:", persona);
  
  // Array: Representa una colección ordenada de valores
  var frutas = ['manzana', 'naranja', 'plátano'];
  
  console.log("Array de Frutas:", frutas);
  
  // Function: Representa una función reutilizable
  function saludar(nombre) {
    console.log("¡Hola, " + nombre + "!");
  }
  
  saludar("Andrea");
  
  // Date: Representa una fecha y hora específicas
  var fechaActual = new Date();
  
  console.log("Fecha Actual:", fechaActual);
  
  /* RegExp: Representa una expresión regular para buscar patrones
  /: Delimitadores de la expresión regular.
  java: Coincide literalmente con la cadena "java".
  (script)?: Grupo de captura opcional. Puede coincidir con "script" cero o una vez.
  i: Modificador de la expresión regular que hace que la coincidencia sea insensible a mayúsculas y minúsculas.
  Por lo tanto, esta expresión regular buscará "java" seguido opcionalmente por "script" en una cadena de texto, y la búsqueda no será sensible a mayúsculas y minúsculas. Esto significa que coincidirá con "java", "JavaScript" o "javaSCRIPT", entre otras posibles variaciones.*/
  var patron = /java(script)?/i;
  
  console.log("Expresión Regular:", patron);
  // Ejemplo de alcance de let y var
  var variableGlobalconVar="Variable Global con var"
  let variableGlobalconVar="Variable Global con let"
function ejemploAlcance() {
    if (true) {
        let variableLet = "Variable con alcance de bloque";
        var variableFuncionVar = "Variable con alcance de función";
        console.log(vatiablelet);
    }

    console.log(variableVar); // Salida: "Variable con alcance de función"
    // console.log(variableLet); // Esto causaría un error ya que variableLet está fuera del alcance de bloque
}

ejemploAlcance();