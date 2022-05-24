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
// Alejandro
console.log(persona[propiedad]);
