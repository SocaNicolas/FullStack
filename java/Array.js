let numeros = [ 1,2,3,4,5,6 ];
for (let i = 0; i < numeros.length; i++) {
    console.log (numeros[i]);
}
//For Of
for (let numero of numeros) {
    console.log (numero);
}
//ejercicio 2
let colores = ["rojo", "azul", "verde"];
for (const color of colores) {
    console.log(color);
}
//ejercicio 3
let colores3 = [];
for (const color of colores) {
    colores3.push(color);
}
//4
let ele = ["mar", "rio","sol"];
let ele2 = ["oceano","rio","nubes"];
let contador = 0;
let repetidos = [];
for (let element of ele) {
    for (const element1 of ele2) {
        if (element == element1) {
            contador++;
            repetidos.push(element1);
        }
    }
}
console.log(`El numero de repeticiones es ${contador}`);
console.log(`Hay ${contador} elementos repetidos y son ${repetidos}`);
//ejercicio 5
let cons = [0,1,2,3,4,5,6,7,8,9];
let cons2 = cons.slice(1,4);
console.log(cons2);
