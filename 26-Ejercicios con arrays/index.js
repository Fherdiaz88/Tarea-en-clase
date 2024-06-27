"use strict";

//Escribir una funcion que reciba un array
//y retorne la suma de sus elementos

let array=[1,2,3,4,5,6];

function sumArray(array){
    let sum=0;
    //inicio--------condicion----incremento
    for(let i=0; i < array.length; i++){
        //imprime indice alert(i)
        //imprime elemento array[i]
        sum = sum + i;
    }
    //operaciones
    return sum;
}

let numbers = [1,2,3,4,5,6];
let result = sumArray(numbers);
alert(result);