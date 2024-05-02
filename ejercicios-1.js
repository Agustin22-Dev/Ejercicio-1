//ejercicio 1

//const valor1=22
//const valor2=8
//suma= valor1+valor2
//console.log (suma)

//ejercicio 2
// var numeros= [51,2,10,22]
// console.log(Math.max(...numeros));
// console.log(Math.min(...numeros));
//ejercicio 3

// var palabra= "pepperoni"
// console.log("la palabra",palabra,"tiene",palabra.length,"caracteres")

//ejercicio 4
// let num1= 20
// if (num1%2 == 0) {
//     console.log ("su numero es par");
// }
// else {
//    console.log ("su numero no es par");
// }

//ejercicio 5
// var palabra="pepperoni"
// var numero= 5
// for(i=0;i<numero;i++){
//     if(i<numero){
//         console.log(palabra);
//     }
// }

//ejercicio 6
// const numero1=5
// const numero2=10
// var cadenanumeros ="6,7,8,9"
// var coma=","
// var arraycadena=cadenanumeros.split(coma)

// console.log("entre el numero",numero1,"y el numero",numero2,"hay una distancia de",arraycadena.length,"elementos")
// console.log("5[6-7-8-9]10")

//ejercicio 6 (prueba)
// const numero1=5
// const numero2=10
// console.log(`entre el numero ${numero1} y ${numero2} estan los siguientes numeros`);
// for(let i=numero1+1;i<numero2;i++){
//     console.log(i)
// }

//ejercicio 7 
// const num1=(5);
// const num2=(20);
// for(i=num1;i<num2;i++){
//     if(i%3===0){
//         console.log(`el numero ${i} es multiplo de 3`)
//     }
// }

//ejercicio 8
//     let numeros=100
//         for(let i=1;i<numeros;i++){
//         if(i % 2===0){

//             console.log("multiplo de 2",i)
//         }
//         if(i % 5===0){
//             console.log("multiplo de 5",i);
//         }
// }

//ejercicio 9
// let total=0
// let numeros= [1,2,3,4,5]
// for(let i of numeros) total+=i;
// console.log(total);

//ejercicio 10
// function sumaTodosPares(array) {
// var numeros_pares =[];
// var suma = 0;
// for (let i = 0; i < array.length; i++) {
//       if(array[i] % 2 === 0){
//         numeros_pares.push(array[i]);
//         suma = suma + array[i];   
//       }
         
// }
//  return suma;  
// }
// const numeros= [1,2,3,4,5,6,7,8] 
// console.log(sumaTodosPares(numeros))

//ejercicio 11
// function contador(palabra) {
//     let contadorLetras = palabra.split('').reduce((contador, letra) => {
//         contador[letra] = (contador[letra] || 0) + 1;
//         return contador;
//     }, {});


//     for (let letra in contadorLetras) {
//         console.log(`${letra} = ${contadorLetras[letra]}`);
//     }
// }

// contador("patata");

//ejercicio 12
// const persona = {
//     nombre: "",
//     sexo: "",
//     edad: 0
//   };
//   const listaPersonas = [
//     { nombre: "Juan", sexo: "hombre", edad: 25 },
//     { nombre: "María", sexo: "mujer", edad: 30 },
//     { nombre: "Carlos", sexo: "hombre", edad: 20 },
//     { nombre: "Ana", sexo: "mujer", edad: 35 }
//   ]
//   function promedioEdad(personas) {
//     const totalEdades = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
//     return totalEdades / personas.length;
//   }
//   function mujerMayorEdad(personas) {
//     const mujeres = personas.filter(persona => persona.sexo === "mujer");
//     const mayorEdad = mujeres.reduce((mayor, persona) => (persona.edad > mayor.edad ? persona : mayor), mujeres[0]);
//     return mayorEdad.nombre;
//   }
//   function hombreMenorEdad(personas) {
//     const hombres = personas.filter(persona => persona.sexo === "hombre");
//     const menorEdad = hombres.reduce((menor, persona) => (persona.edad < menor.edad ? persona : menor), hombres[0]);
//     return menorEdad.nombre;
//   }
//   function promedioEdadMujeres(personas) {
//     const mujeres = personas.filter(persona => persona.sexo === "mujer");
//     return promedioEdad(mujeres);
//   }
//   const promedioTotal = promedioEdad(listaPersonas);
//   const mujerMayor = mujerMayorEdad(listaPersonas);
//   const hombreMenor = hombreMenorEdad(listaPersonas);
//   const promedioMujeres = promedioEdadMujeres(listaPersonas);

//   console.log("Promedio de edad total:", promedioTotal);
//   console.log("Nombre de la mujer con mayor edad:", mujerMayor);
//   console.log("Nombre del hombre con menor edad:", hombreMenor);
//   console.log("Promedio de edad de las mujeres:", promedioMujeres);

//ejercicio 13
// function calcularPromedioEdad(personas) {
//     const totalEdades = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
//     return totalEdades / personas.length;
//   }


//   function obtenerMujerMayorEdad(personas) {
//     const mujeres = personas.filter(persona => persona.sexo === "mujer");
//     const mayorEdad = mujeres.reduce((mayor, persona) => (persona.edad > mayor.edad ? persona : mayor), mujeres[0]);
//     return mayorEdad.nombre;
//   }


//   function obtenerHombreMenorEdad(personas) {
//     const hombres = personas.filter(persona => persona.sexo === "hombre");
//     const menorEdad = hombres.reduce((menor, persona) => (persona.edad < menor.edad ? persona : menor), hombres[0]);
//     return menorEdad.nombre;
//   }


//   function calcularPromedioEdadMujeres(personas) {
//     const mujeres = personas.filter(persona => persona.sexo === "mujer");
//     return calcularPromedioEdad(mujeres);
//   }

//   const promedioTotal = calcularPromedioEdad(listaPersonas);
//   const mujerMayor = obtenerMujerMayorEdad(listaPersonas);
//   const hombreMenor = obtenerHombreMenorEdad(listaPersonas);
//   const promedioMujeres = calcularPromedioEdadMujeres(listaPersonas);

//   console.log("Promedio de edad total:", promedioTotal);
//   console.log("Nombre de la mujer con mayor edad:", mujerMayor);
//   console.log("Nombre del hombre con menor edad:", hombreMenor);
//   console.log("Promedio de edad de las mujeres:", promedioMujeres);

//ejercicio 14
// function obtenerDivisores(minimo, maximo, divisor) {
//     const divisores = [];
//     for (let i = minimo; i <= maximo; i++) {

//       if (i % divisor === 0) {

//         divisores.push(i);
//       }
//     }

//     return divisores;
//   }
//   const minimo = 1;
//   const maximo = 20;
//   const divisor = 3;
//   const listaDivisores = obtenerDivisores(minimo, maximo, divisor);
//   console.log("Divisores:", listaDivisores);