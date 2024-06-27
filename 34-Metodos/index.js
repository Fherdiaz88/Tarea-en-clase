"use strict";

let students=[];
//Agregar los primeros 5 nombres de la lista

students.push("Junior", "Carlos", "Sergio", "Darwin", "Ian");
//Agregar al inicio
students.unshift("Mateo");
//Eliminar el ultimo 
students.pop();
//Eliminar el primero
students.shift();
//Agregar al indice 2-3
students.splice(2,"Mateo");
//Metodo encontrar a Mateo
let itemFind = students.find(item=> item==="Mateo");


let ages=[16,18,20,25,30];
let agesFilter= ages.filter(n=> n <20);
let agesChanged = ages.map(item=> item/2);
let reverseAges=ages.reverse();
alert(agesChange);


let subjects= "Piensa, Metodologia, Matematicas, Bd, Programacion, Tics";
let subjectsArr= subjects.split(´,´);
let subjectsExists=subjectsArr.includes("Piensa");
alert(subjects);