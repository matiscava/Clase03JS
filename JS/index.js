let i=1,numero=0, palabra, repeticion;
palabra=prompt ("Ingrese una palabra: ");
repeticion=parseInt(prompt('Ingrese la cantidad de veces que quiere que se repita'));
for (i==1;i<=repeticion;i++){
    console.log (i+") "+palabra);
}

numero=parseInt(prompt('Ingrese un número del 1 al 10 para poder continuar'));
console.log("El numero es: "+numero);
variable=0;

while (variable==0){
if (numero >=1 && numero<=10){
    console.log ('El numero esta entre el 1 y el 10');
    break;
} else {
    console.error ('El numero NO esta entre el 1 y el 10');
    numero=parseInt(prompt('Ingrese un número del 1 al 10 para poder continuar'));
    console.log("El numero es: "+numero);
};
 };
