/* Estructura if (SI ocurre algo hago tal cosa)

if(codicion logica){
    todo el codigo que quiero realizar si la respuesta es "true" o si se cumple la condicion logica    
}else{
    Aqui todo el codigo que quiero hacer si no se cumple la condicion
}

*/

let numero1 = parseInt(prompt("ingrese un primer numero"));
let numero2 = parseInt(prompt("ingrese un segundo numero"));
if (numero1 > numero2) {
  document.write("El primer numero es el mayor " + numero1);
} else {
  // document.write("el primer numero no es el mayor");
  if (numero1 == numero2) {
    document.write("Ambos numeros son iguales");
  } else {
    document.write("El segundo numero es el mayor: " + numero2);
  }
}
