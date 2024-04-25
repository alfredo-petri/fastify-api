"use strict";
var array = [2, 3, 5, 7, 11, 13, 18, 34, 62, 61, 100];
let pares = [];
for (let i = 0; i <= array.length; i++) {
    if (array[i] % 2 === 0) {
        pares.push(array[i]);
    }
}
console.log(pares);
let entregasImportantes = array.filter((numero) => {
    return numero % 2 === 0;
});
console.log(entregasImportantes);
