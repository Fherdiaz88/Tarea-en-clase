"use strict";

let nums=[4,6,3,7,1];
//aplicar for tradicional y for of para mostrar los elementos
//En un for mostrar indice y elemento usando backstreet
for (let item of nums) {
    alert(item);
}

for (let i= 0; i < nums.length; i++) {
    alert("indice: ${i} +elemento: ${i}");
}

nums.forEach(alert)