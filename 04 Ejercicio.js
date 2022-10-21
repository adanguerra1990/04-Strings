let nombre = "Adan"
let apellido = "Guerra"
// cadena de texto "estudiante" concatenando Nombre y tu Apellido con un espacio entre medias
let estudiante = nombre + " " + apellido;

console.log(estudiante);
console.log(estudiante.length);

let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);


//primera letra del Nombre
console.log(nombre.charAt(0));
// última letra del Apellido
console.log(apellido.charAt(5));

console.log(estudiante.trim().length);
// el Nombre está contenido en la variable "estudiante"?
console.log(estudiante.includes(nombre))