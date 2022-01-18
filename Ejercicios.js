//-------------------Declarando una funcion----------------------------------
function agregar(arr, num) {
    let resultado = [];
  
    for (let i = 0; i < arr.length; i++) {
      resultado.push(arr[i]);
    }
  
    resultado.push(num);
  
    return resultado;
}

//------------------------------Ejercicio 3----------------------------------
/*
  Pedir al usuario ingresar el precio de un artículo por pantalla. Mostrar por consola un mensaje con la siguiente información
- Valor original del artículo
- Valor del descuento aplicado al artículo (24%)
- Valor final del artículo al restar el valor del descuento
*/
function aplicarDescuento(precio=prompt("Ingresa el valor de tu articulo")){
    const descuento = (precio * 24) / 100;
    const precioFinal = precio - descuento;
    console.log(`Valor del artículo: $${precio}`);
    console.log(`Valor del descuento: $${descuento}`);
    console.log(`Valor final: $${precioFinal}`);
    return precioFinal;
}
//  console.log(aplicarDescuento());

//---------------------------------Ejercicio 4----------------------------------
/*
El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.
El BMI se calcula con la siguiente fórmula:
peso / altura^2
Escribe un programa que le pida al usuario su peso y su altura para calcular su BMI e imprima la frase "Tu BMI es X".
*/
function calcularBMI(peso = prompt("Ingrese su peso"),altura = prompt("Igrese su altura")){
    const BMI = peso / (altura**2);
    console.log(`Su peso es: ${peso}kg`);
    console.log(`Su altura es: ${altura}cm`)
    console.log(`Su MBI es: ${BMI}`);
    return BMI;
}
// console.log(calcularBMI());

//-----------------------------------Ejercicio 5--------------------------------
/* 
Pedir al usuario ingresar n datos por consola. Después de que el usuario ingrese todos los datos, el programa debe mostrar por consola
el resultado de elevar al cuadrado cada número ingresado por el usuario.
*/
function llenarArray(){
  let cantidadValores = prompt("Ingrese la cantidad de numeros que desea procesar");
  const dato = [];
  const resultado = [];
  for (let i = 0; i < cantidadValores; i++){
    dato.push(prompt("Ingresa un numero"));
    const cuadrado = dato[i]**2;
    resultado.push(cuadrado);
  }
  console.log("Sus datos ingresados fueron: ",dato);
  console.log("El cuadrado de los datos ingresados son: ",resultado);
  return resultado;
}

//================================PRUEBA TECNICA====================================

//------------------------Ejercicio 1-----------------------------------------------
/*Calcula los impuestos
Escribe una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos. Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retorna 0.

Ejemplos:

calcularImpuestos(18, 1000) // retorna 400
calcularImpuestos(40, 10000) // retorna 4000
calcularImpuestos(17, 5000) // retorna 0*/
//--------------------------------------------------------------------------------------------

function calcularImpuestos(){
  let edad = prompt("Ingrese su edad");
  let ingresos = prompt("Ingrese sus ingresos");
  if(edad >= 18 && ingresos >= 1000){
    const retornar = (ingresos * 40) / 100;
    console.log("Tiene que pagar de impuesto: ", retornar);
    return retornar;
  }else {
    console.log("Aun no tiene que pagar impuestos");
    return 0;
  }
}
//calcularImpuestos();
  
//--------------------------------Ejercicio 2--------------------------------------------------------
/*Cuenta los asteriscos
Escribe una función llamada asteriscos que reciba un string str y retorne el número de asteriscos que hay en str.

Ejemplos:

asteriscos("H*o*l*a") // retorna 3
asteriscos("Hola")  // retorna 0 */
//--------------------------------------------------------------------------------------------------
let str = "";
function asteriscos(str){
  let contar = 0;
  for(i = 0; i < str.length; i++){
    if (str[i] === "*"){
      contar = contar + 1;
    }
  }
  console.log("hay: "+contar+"*");
  return contar;
}

//----------------------------------Ejercicio 3 -----------------------------------------------------------
/* Duplica cada elemento
Escribe una función llamada duplicar que reciba un arreglo de números como parámetro y retorne un nuevo arreglo con cada elemento duplicado (multiplicado por dos).

Ejemplos:

duplicar([3, 12, 45, 7]) // retorna [6, 24, 90, 14]
duplicar([8, 5]) // retorna [16, 10] */
//--------------------------------------------------------------------------------------------------------
function duplicar(datos){
  let resultados = [];
  for (let i = 0; i < datos.length; i++){
      const porDos = (datos[i]*2);
      resultados.push(porDos);
  }
  console.log("Los números originales son: "+ datos);
  console.log("El valor multiplicado por 2 es: " + resultados);
  return resultados;
}
