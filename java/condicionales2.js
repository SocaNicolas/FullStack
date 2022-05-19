// Switch
const A = 4;
switch (A) {
case 1:
console.log('El valor de a es 1');
break;
case 2:
console.log('El valor de a es 2');
break;
case 3,4:
console.log('El valor de a es 3 ó 4');
break;
default:
console.log('El valor de a es desconocido');
}
// For
for (let i = 0; i < 5; i++) {
    // 0, 1, 2, 3, 4 (en distintas líneas)
    console.log(i);
}
const array = ['En', 'un', 'lugar', 'de', 'la', 'mancha'];
const len = array.length;
for (let i = 0; i < len; i++) {
    // En, un, lugar, de, la, mancha (en distintas líneas)
    console.log(array[i]);
}
//ejercicio 8
for (let num=0; num<51; num++){
    console.log(num);
}
//ejercicio 9
for(i=0;i<11;i++){
    console.log("5x" + i + "=" + 5*i );
}
//ejercicio 10
var y = prompt("Escribe una palabra:", "Escribe aqui");
for( i=0; i<10; i++ ){
    document.write(y + "<br>");
}
//ejercicio 11
var nume = prompt("Escribe un numero", "Escriba aqui");
for (let i = nume; nume > -1; --nume) {
    document.write(nume + "<br>");
}