"use strict";

let array=[1,2,,3,4,5,6,7,8,9,0,12,24];

function par(array){
    let sum=0;
    for(let i=0; i < array.length;i++){
        if(array[i]%2===0){
            sum = sum + array[i];
        }
    }
        return sum;
}
let result = par(array);
alert("La suma de los numeros pares es = " + result);