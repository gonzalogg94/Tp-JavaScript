// Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

let numero=parseInt(prompt("ingrese un numero"));
if(numero%2==0){
    document.write("El numero elegido "+(numero)+" es divisible por 2 ")
}if(numero%3==0){
    document.write("El numero elegido "+(numero)+" es divisible por 3 ")
}if(numero%5==0){
    document.write("El numero elegido "+(numero)+" es divisible por 5 ")
}else if(numero%7==0){
    document.write("El numero elegido "+(numero)+" es divisible por 7 ")
}else{
    document.write("El numero elegido "+(numero)+" no es divisible por 2,3,5 o 7")
}