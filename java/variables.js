// kebap-case (no permitido en JavaScript)
// const last-name = 'Doe';
// snake_case (recomendado en otros lenguajes como Python)
const last_name = 'last_name';
// PascalCase (recomendado en JavaScript para las clases)
const LastName = 'LastName';
// camelCase (recomendado en JavaScript para las variables y funciones)
const lastName = 'lastName';
// document.write(last_name);
// document.write(LastName);
const person = 'John Doe', carName = 'Volvo', price = 200;
//es lo mismo que ponerlo separado
let x; //creo una variable
x = 5; //le doy un valor a la variable
// Infinity
const variable1 = 1/0;
// NaN las comas en java son puntos 
const variable2 = parseFloat('prueba');
// undefined
// console.log(variable4);
// error
// console.log(variable_nodeclarada);
const variable3 = null; //variable de valor nuelo
// true
console.log(null == undefined);
// false
console.log(null === undefined );
var alert1 = 5;
// permitido
var alert1 = '';
let alert2 = 5;
// no permitido porque ya se declaró antes
// let alert2 = 5;
alert2 = 7; //asi si se puede volver a declarar la variable de un "let"
const pi = 3.14;
// error
// pi = 3;
const numero0 = 1;
const numero1 = 20.1;
// 32
const numero2 = 3.2e1;//e= exponencial
// 300
const numero3 = 3e2;
// hexadecimal
const numero4 = 0x1f;
// binario
const numero5 = 0b1010;
// octal
const numero6 = 0o744;
// otra forma de declarar una variable de tipo numérico
const numero7 = Number(2);// es lo mismo que const numero7=2
const boolean1 = true;// verdadero o falso
const boolean2 = false;
//preferentemente comillas simples, pero dependera del contenido
const str1 = "Hola 'a' todos";//entre dobles usar simples
const str3 = 'Hola "a" todos';//entre simples usar dobles
const str5 = '"';
const str4 = '"';
//string
const str2 = 'hola';
// 4
console.log(str2.length);
let a=1, b=2, c=3;
console.log(a+b+c);
c = 13;
document.write(a+b+c);
//stringOF buscar las letras en las posiciones
const str = 'hola';
// 3
console.log(str.indexOf('a'));
// 1
console.log(str.indexOf('ol'));
// -1
console.log(str.indexOf('r'));
const str_3 = 'hola';
// 'ol'
console.log(str_3.substring(1, 3));//ultima posicion no incluida
// 'ola'
console.log(str_3.substring(1));
//charAt
const str_4 = 'hola';
// h
console.log(str_4.charAt(0));
// a
console.log(str_4.charAt(3));
//
console.log(str_4.charAt(4));
// h
console.log(str_4[0]);
// a
console.log(str_4[3]);
// undefined
console.log(str_4[4]);
//Array []
const array1 = [];
const array2 = [20, 3, 8];
const array3 = ['Carmen', 'Juan'];
// otra forma de declarar arrays
const array4 = new Array(20, 3, 8);
const array5 = new Array(null, undefined, '', 8);
const array7 = new Array('Carmen', 'Juan');
const array8 = new Array('Carmen', 'Juan');
// 2
console.log(array8[0].length);
//ejercicio
const semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabdao", "domingo"];
semana.length = 4;
console.log(semana[2]);
console.log(semana.length);
//array tamaño
const array9 = new Array('Carmen', 'Juan');
array9[3] = 'Alejandro';//asignar un nuevo valor a Arrey
// [ 'Carmen', 'Juan', <1 empty item>, 'Alejandro' ]
console.log(array9);
//La longitud de un array puede modificarse
const array10 = new Array('Carmen', 'Juan');
array10.length = 1;
// [ 'Carmen' ]
console.log(array10);
//Date
const date1 = new Date();
// Sun Apr 22 2018 12:37:06 GMT+0200 (Hora de verano romance)
console.log(date1);
// milisegundos en formato Unix
const milisegundos = new Date().getTime();
console.log(milisegundos);
// fecha creada a partir del número de milisegundos en formato Unix
const date2 = new Date(milisegundos);
console.log(date2);
//Conversión de tipos
// 2
const A = parseInt('2');
// 2
const B = +'2';
// NaN
const C = +'d';
// 2
const D = Number('2');



