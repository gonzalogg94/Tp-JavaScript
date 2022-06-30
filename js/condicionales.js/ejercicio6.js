// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

let numero1=parseInt(prompt("ingrese un numero"));
let numero2=parseInt(prompt("ingrese un segundo numero"));
if(numero1>numero2){
    document.write("El primero numero ingresado: "+(numero1)+" es mayor al segundo numero");
} else{
    if(numero1<numero2){
        document.write("El segundo numero ingresado: "+(numero2)+" es mayor al primer numero");
    }else{
        document.write("Los dos numeros ingresados son iguales.")
    }
}


