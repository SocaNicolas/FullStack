//ejercicio 165
document.getElementById("resultado").innerHTML= "hello world";
document.getElementById("resultado2").innerHTML = textoAnumero + "<br>" + numeroAtexto + "<br>" + boolAtexto ;

//Comprobación de tipos
// number
console.log(typeof 3);
// number
console.log(typeof NaN);
// number
console.log(typeof parseInt('hola'));
// string
console.log(typeof 'hola');
// boolean
console.log(typeof true);
// function
console.log(typeof function() {});
// object
console.log(typeof {foo: 'bar'});
// object
console.log(typeof ['a', 'b', 'c']);
// object
console.log(typeof new Date());
// object
console.log(typeof null);
// undefined
console.log(typeof undefined);
// undefined
console.log(typeof unknown);
//Operadores
// suma
let a = 2 + 3; 
// resta
let b = 2 - 3;
// multiplicación
let c = 2 * 3;
// división
let d = 2 / 3;
// módulo
let e = 2 % 3;
// incremento posterior
a++;
console.log(a);
// incremento anterior
++a;
// decremento posterior
a--;
// decremento anterior
--a;
let x1 = 4;
// y1 = 5; x1 = 5 (primero incrementa y luego asigna)
let y1 = ++x1;
let x2 = 4;
// y2 = 4; x2 = 5 (primero asigna y luego incrementa)
let y2 = x2++;

//Operadores de comparación
// true
console.log('2' == 2);
// false
console.log('2' === 2);
// true porque ambos valores representan un objeto vacío
console.log(null == undefined);
// false porque no son el mismo objeto
console.log(undefined === null);
// false
console.log('2' != 2);
// true
console.log('2' !== 2);
// true porque '2' es convertir a number
console.log('2' < 4);
// false
console.log(4 > 8);
// true
console.log(3 <= 3);
// true
console.log(3 >= 3);

//Operadores Lógicos: AND (&&), OR (||) y NOT (!)
// true
console.log(true && true);
// false
console.log(true && false);
// false
console.log(false && true);
// false
console.log(false && false);
// true
console.log(true || true);
// true
console.log(true || false);
// true
console.log(false || true);
// false
console.log(false || false);
// false
console.log(!true);
// true
console.log(!false);