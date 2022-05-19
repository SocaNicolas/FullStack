//IF
// let a = 4;
// let b = 4;
// if (a > b) {
//     console.log(`a (${a}) es mayor que b (${b})`);
// }
// else if (a < b) {
//     console.log(`b (${b}) es mayor que a (${a})`);
// }
// else if (a === b) {
//     console.log(`b (${b}) es igual y posee el mismo tipo que a (${a})`);
// }
// else {
//     console.log(`b (${b}) es igual pero solo en valor a (${a})`);
// }
let a = 1 , b = 2 , c = 3 , d = 4;
if (a+b > c+d){
    console.log(`ab(${a+b}) es mayor que bc(${b+c})`);
}
else if(a+b < c+d){
    console.log(`ab(${a+b}) es menor que bc(${b+c})`);
}
else{
    console.log("son iguales");
}
let angulo1 = 60 , angulo2 = 45 , anuglo3 = 75;
if(angulo1+angulo2+anuglo3 === 180){
    console.log("es un triangulo");
}
else{
    console.log("no es un triangulo");
}

let hora = 22;
if ((hora >= 9) && ( hora<=14)){
    console.log("estas en Sant Boi");
} 
else if((hora >= 15) && (hora <= 20)){
    console.log("estas en Castelldefels");
}
else{
    console.log("no estas en clase perro");
}
let x = 7;
if (x%2 === 0){
    console.log("el numero es par");
}
else{
    console.log("no es par");
}
let num1 = 1 , num2 = 2 , num3 = 3;
if ((num1 > num2) && (num1 > num3)){
    console.log(`${num1} es el numero mas grande`);
}
else if((num2 > num1) && (num2 > num3)){
    console.log(`${num2} es el numero mas grande`);
}
else{
    console.log(`${num3} es el numero mas grande`);
}

const i = 25;
if(i == 25) {
console.log("a");
}
else {
    console.log("b");
}