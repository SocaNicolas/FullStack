const objeto = {
    name: 'Rebecca',
    diHola: () => {
    console.log('hola');
    }
};
objeto.diHola();
//
const coche = {};
coche.contenido = 20;
coche.adelante = () => {
    console.log('Arrancando...');
    };
coche.adelante();
//
const Persona = function(name) {
    this.name = name;
};
const yo = new Persona('alejandro');
// alejandro
console.log(yo.name);
//
const persona = {
    nombre: 'Alejandro',
    'lugar de residencia': 'Madrid'
};
// Alejandro
console.log(persona.nombre);
// Alejandro
console.log(persona['nombre']);
// error
// console.log(persona.lugar de residencia);
// en este caso son obligatorios los corchetes
persona['lugar de residencia'] = 'Sevilla';
// Sevilla
console.log(persona['lugar de residencia']);
const propiedad = 'nombre';
// undefined porque busca la variable propiedad dentro del objeto persona
console.log(persona.propiedad);
// Alejandro /casualidad /poco comun/ no usar
console.log(persona[propiedad]);
//Anidacion de elementos 
const persona2 = {
    nombre: 'Carmen',
    apellidos: 'González',
    datos: {
    direccion: 'Sevilla'
    }
};
// Sevilla
console.log(persona2.datos.direccion);
// undefined
console.log(persona2.datos.otrodato);
//
const coche1 = { marca: 'Ford', modelo: 'Focus' };
const coche2 = { marca: 'Ford', modelo: 'Focus' };
// devuelve false porque no comparten referencia
console.log(coche1 == coche2);
// devuelve false porque no comparten referencia
console.log(coche1 === coche2);
// devuelve true porque el valor es el mismo y son de tipo string
console.log(coche1.modelo === coche2.modelo);
const coche3 = coche1;
// devuelve true porque comparten referencia
console.log(coche1 === coche3);
//
const x = {
    peras: 3,
    fresas: 20
};
console.log(x);
delete x.fresas;
console.log(x);
//
const y = {
    peras: 3,
    fresas: 20,
    // no se debe utilizar aquí la sintaxis de la función de flecha porque this en ese caso apuntaría al objeto global
    contar: function () {
    console.log(this.peras + this.fresas);
    }
};
// se guarda en un array el nombre de todas las propiedades del objeto y
const nombresPropiedades = Object.keys(y);
// ["peras", "fresas", "contar"]
console.log(nombresPropiedades);
// true
console.log(nombresPropiedades.includes('fresas'));
// true
console.log('fresas' in y);
//
// creación de un objeto vacío
const alejandro = {};
// agregando un método nuevo
alejandro.saludar = () => {
console.log('Hola');
};
//
const z = {
    peras: 3,
    fresas: 20
};
for (let key in z) {
    // peras y fresas (en distintas líneas)
    console.log(key);
    // string y string (en distintas líneas)
    console.log(typeof(key));
    // 3 y 20 (en distintas líneas)
    console.log(z[key]);
    // undefined y undefined porque busca la propiedad z.key (2 veces) y no existe
    console.log(z.key);
}
//
const w = {
    peras: 3,
    fresas: 20
};
// claves es un array
const claves = Object.keys(w);
// ["peras", "fresas"]
console.log(claves);
// bucle for...of para recorrer un array
for (let key of claves) {
    // peras y fresas (en distintas líneas)
    console.log(key);
    // 3 y 20 (en distintas líneas)
    console.log(w[key]);
}
// bucle for...in para recorrer un array
for (let i in claves) {
    // 0 y 1 (en distintas líneas)
    console.log(i);
    // peras y fresas (en distintas líneas)
    console.log(claves[i])
    // 3 y 20 (en distintas líneas)
    console.log(w[claves[i]]);
}
//
// obligatorio utilizar function para posteriomente crear objetos con new
const Person = function(name) {
    // atributo público porque está declarado con this
    this.name = name || '';
    // atributo privado porque está declarado con const
    const lastname = 'González';
    // atributo privado porque está declarado con const
    const myName = this.name;
    // método privado porque está declarado con const
    const fullName = () => {
        return myName + ' ' + lastname;
    };
    // método público porque está declarado con this
    this.introduce = () => {
    return 'Hola, mi nombre es ' + fullName();
    };
};
const oscar = new Person('Óscar');
// Óscar
console.log(oscar.name);
// Hola, mi nombre es Óscar González
console.log(oscar.introduce());
// undefined porque el atributo es privado
console.log(oscar.lastname);
// error porque el método no privado y no se puede acceder a él (es undefined) e invocara undefined genera un error
// console.log(oscar.fullName());
const objeto1 = {
    nombre: 'Alejandro',
    // función clásica de JavaScript sin function (opción recomendada)
    mostrarNombre() {
    console.log(this.nombre);
    }
}
// Alejandro
objeto1.mostrarNombre();
//
const objeto2 = {
    nombre: 'Alejandro',
    // función clásica de JavaScript con function
    mostrarNombre: function() {
    console.log(this.nombre);
    }
}
// Alejandro
objeto2.mostrarNombre();
// no sale el nombre
const objeto3 = {
    nombre: 'Alejandro',
    // función cde flecha
    mostrarNombre: () => {
    console.log(this.nombre);
    }
}
// undefined
objeto3.mostrarNombre();
//ejercicios
