// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let numero1=parseInt(prompt("ingrese un numero"));
let numero2=parseInt(prompt("ingrese un segundo numero"));
let numero3=parseInt(prompt("ingrese un tercer numero"));
if(numero1>numero2&&numero1>numero3){
    document.write("El primer numero ingresado: "+(numero1)+" es el numero de mayor valor")
}else if(numero2>numero3&&numero2>numero1){
    document.write("El segundo numero ingresado: "+(numero2)+" es el numero de mayor valor")
}else{
    document.write("El tercer valor ingresado "+(numero3)+" es el numero con mayor valor")
}