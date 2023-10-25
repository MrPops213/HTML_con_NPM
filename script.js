const sumar = (num1, num2) => num1 + num2
const restar = (num1, num2) => num1 - num2
const multi = (num1, num2) => num1 * num2
const div = (num1, num2) => num1 / num2

const n1 = 1
const n2 = 2
console.log(sumar(n1, n2));
console.log(restar(n1, n2));
console.log(multi(n1, n2));
console.log(div(n1, n2));

const Ian = {
    nombre:"Ian",
    apellidos: "Barcenas Moreno",
    edad:20,
    altura:1.80,
    pasatiempos:["leer","fumar", "Videojuegos"],
    egresado: false,
    contacto: {
        telefono:"4434378540",
        facebook: "Ian Barcenas",
        github : "MrPops213"
    }
}

console.log(Ian.nombre);

for (const keys in Ian){
 console.log(keys);
 console.log();
}

fetch("https://catfact.ninja/fact")
.then(res => res.json)
.then(data => {console.log(data);})