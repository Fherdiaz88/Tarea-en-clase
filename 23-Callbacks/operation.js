"use strict";

//Declaracion de funcion
function operation(op, fnSum, fnRest){
let a = Number(prompt("Ingresar el valor de a"));
let b = Number(prompt("Ingresar el valor de b"));
if(op === "suma"){
    fnSum(a,b);
}else{
    fnRest(a,b);
}}

//Expresion de funcion 
let Sum= function(a,b){
    alert(a+b)
};

//Funcion flecha
let Rest=(a,b) => alert (a-b);

let op = prompt ("Ingrese operación");
operation(op, Sum, Rest)//-->Callbacks function