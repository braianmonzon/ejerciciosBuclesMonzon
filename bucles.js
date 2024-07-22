//1
// const numero = parseInt(prompt("Ingrese un numero:"))

// console.log(`Tabla de multiplicar del número ${numero}:`)

// for (let i = 1; i <= 10; i++) {
//   const resultado = numero * i;
//   console.log(`${numero} x ${i} = ${resultado}`)
// }


//2
// let suma = 0;
// let numero;

// console.log("Ingrese numeros para sumarlos. Ingrese 0 para terminar.")

// do {
//   numero = parseInt(prompt("Ingrese un numero:"))
//   if (numero !== 0) {
//     suma += numero;
//     console.log(`La suma actual es: ${suma}`)
//   }
// } while (numero !== 0);

// console.log(`La suma total es: ${suma}`)


//3
// const numeroSecreto = Math.floor(Math.random() * 100) + 1;
// let intentos = 0;

// console.log("adivina el numero")

// while (true) {
//   const numeroIngresado = parseInt(prompt("Ingresa un numero entre 1 y 100:"))

//   intentos++;

//   if (numeroIngresado === numeroSecreto) {
//     console.log(`¡Felicidades! diste con el numero secreto ${numeroSecreto} en ${intentos} intentos.`)
//     break;
//   } else if (numeroIngresado < numeroSecreto) {
//     console.log("El numero ingresado es menor.")
//   } else {
//     console.log("El numero ingresado es mayor.")
//   }
// }

//4
// function esPrimo(numero) {
//   if (numero < 2) {
//     return false;
//   }

//   if (numero === 2) {
//     return true;
//   }

//   for (let i = 2; i <= Math.floor(Math.sqrt(numero)); i++) {
//     if (numero % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// const numero = parseInt(prompt("Ingresa un numero:"))

// if (esPrimo(numero)) {
//   console.log(`El numero ${numero} es primo.`)
// } else {
//   console.log(`El numero ${numero} no es primo.`)
// }

//5
// function mostrarDivisores(numero) {
//   console.log(`Los divisores de ${numero} son:`)

//   for (let i = 1; i <= Math.floor(numero / 2); i++) {
//     if (numero % i === 0) {
//       console.log(i);
//     }
//   }
//   console.log(numero)
// }
// const numero = parseInt(prompt("Ingresa un numero:"))
// mostrarDivisores(numero)

//6
// const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// array.forEach(elemento => {
//   console.log(`El elemento del array es: ${elemento}`)
// })

//7
// const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// numeros.forEach(numero => {
//   const doble = numero * 2;
//   console.log(`El doble de ${numero} es: ${doble}`)
// })

//8
// const familia = [
//   {
//     nombre: "Braian",
//     edad: 30,
//     ocupacion: "Comerciante",
//     jovi: "Xbox"
//   },
//   {
//     nombre: "Ana",
//     edad: 29,
//     ocupacion: "Maestra",
//     jovi: "Dormir"
//   },
//   {
//     nombre: "Kiki",
//     edad: 15,
//     ocupacion: "Estudiante",
//     jovi: "Escuchar musica"
//   },
//   {
//     nombre: "Rose",
//     edad: 4,
//     ocupacion: "BEBE",
//     jovi: "Natacion"
//   },
//   {
//     nombre: "Momo",
//     edad: 6,
//     ocupacion: "Mascota",
//     jovi: "Morder"
//   }
// ]

// familia.forEach(miembro => {
//   console.log(`Hola, mi nombre es ${miembro.nombre}, tengo ${miembro.edad} años, soy ${miembro.ocupacion} y mi jovi es ${miembro.jovi}.`)
// })

//9
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// numeros.forEach(numero => {
//   if (numero % 2 !== 0) {
//     console.log(`El numero impar es: ${numero}`)
//   }
// })

//10
// let sumaPares = 0;
// let sumaImpares = 0;

// while (true) {
//   const numero = parseInt(prompt("Ingrese un numero (0 para salir):"))

//   if (numero === 0) {
//     break;
//   }

//   if (numero % 2 === 0) {
//     sumaPares += numero;
//   } else {
//     sumaImpares += numero;
//   }
// }

// console.log(`La suma de los numeros pares es: ${sumaPares}`)
// console.log(`La suma de los numeros impares es: ${sumaImpares}`)

//11
// const numeros = [999, 45, 62, 1, 22, 32, 19, 8, 98, 90]

// let numeroMasGrande = numeros[0]
// for (let i = 1; i < numeros.length; i++) {
//   if (numeros[i] > numeroMasGrande) {
//     numeroMasGrande = numeros[i]
//   }
// }

// console.log(`El numero mas grande es: ${numeroMasGrande}`)

//12
// const numeros = [1, 999, 0, 32, 22, 77, 777, 2, 88, 3]

// let numeroMasPequeno = numeros[0]
// for (let i = 1; i < numeros.length; i++) {
//   if (numeros[i] < numeroMasPequeno) {
//     numeroMasPequeno = numeros[i];
//   }
// }

// console.log(`El numero mas pequeño es: ${numeroMasPequeno}`)

//13
// function pedirMano(nombreJugador) {
//   let mano;
//   do {
//     mano = prompt(`${nombreJugador}, elige piedra, papel o tijera:`).toLowerCase()
//   } while (mano !== 'piedra' && mano !== 'papel' && mano !== 'tijera')
//   return mano;
// }

// function determinarGanador(mano1, mano2, nombre1, nombre2) {
//   if (mano1 === mano2) {
//     console.log("Empate")
//     return null;
//   } else if (
//     (mano1 === 'piedra' && mano2 === 'tijera') ||
//     (mano1 === 'papel' && mano2 === 'piedra') ||
//     (mano1 === 'tijera' && mano2 === 'papel')
//   ) {
//     console.log(`${nombre1} gana`)
//     return nombre1; 
//   } else {
//     console.log(`${nombre2} gana`)
//     return nombre2;
//   }
// }

// const nombre1 = prompt("Ingrese el nombre del jugador 1:")
// const nombre2 = prompt("Ingrese el nombre del jugador 2:")

// let ganador = null;
// while (ganador === null) {
//   const mano1 = pedirMano(nombre1)
//   const mano2 = pedirMano(nombre2)
//   ganador = determinarGanador(mano1, mano2, nombre1, nombre2)
// }

//14
// const altura = 5;

// for (let i = 1; i <= altura; i++) {
//   let fila = '';
//   for (let j = 1; j <= i; j++) {
//     fila += '*';
//   }
//   console.log(fila);
// }

//15
// const altura = 5;

// for (let i = altura; i >= 1; i--) {
//   let fila = '';
//   for (let j = 1; j <= i; j++) {
//     fila += '*';
//   }
//   console.log(fila);
// }

//16
// let numeros = [9, 16, 35, 79, 22, 99, 61, 44, 53, 87]

// for (let i = 0; i < numeros.length - 1; i++) {
//   for (let j = 0; j < numeros.length - i - 1; j++) {
//     if (numeros[j] > numeros[j + 1]) {
      
//       let temp = numeros[j];
//       numeros[j] = numeros[j + 1]
//       numeros[j + 1] = temp;
//     }
//   }
// }

// console.log(numeros)