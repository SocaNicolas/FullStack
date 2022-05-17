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
document.write(a+b+c);
