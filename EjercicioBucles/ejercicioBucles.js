// 1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de
// multiplicar (Los primeros 10 multiplos).


// let num1 = parseInt(prompt('introduzca un numero'))
// for (let i = 0; i < 11; i++) {
//  console.log(i* num1) 
// }


//2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
// acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.


//mientras *num* no sea 0
// let numeroIngresado = parseInt(prompt('Ingrese un numero'));


// while(numeroIngresado !== 0){
//     console.log('El numero ingresado es ' + numeroIngresado)
//     numeroIngresado = parseInt(prompt('Ingrese un numero'))
    

// }


//3. Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
//variable guardar un numero que este en el rango 1 - 100. La persona debera poder
//ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
//valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
//nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
//cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
//que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
//felicitaciones y decirle en cuantos intentos lo ha realizado.


// let numeroIngresado = parseInt(prompt('Ingrese un numero'))
// let numeroSecreto = 7
// let numeroIntentos = 0

// while(numeroIngresado !== numeroSecreto){
//     if(numeroIngresado < numeroSecreto){
//         console.log('El numero ingresado es menor')
//     } else{
//         console.log('El numero ingresado es mayor')
//     }
//     numeroIntentos++
//   numeroIngresado = parseInt(prompt('Ingrese un numero'))
// }



// console.log('Felicidades! lo lograste despues de ' + numeroIntentos + ' veces')

// 4. Realizar un programa que permita decir si un numero es primo. Un numero es primo
// si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
// Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
// como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
// numero ya no es primo




//5. Realizar un programa que permita dado un numero, mostrar todos sus divisores.
// numeroIngresado = parseInt(prompt('Ingrese un numero'))


// for(let i = 0; i < numeroIngresado; i++ )
// {
//     console.log(parseInt(numeroIngresado / i))
// }

// /6. Dado un array de 10 elementos, realizar un programa que recorra ese array y
// muestre un mensaje por consola con cada uno de los elementos del array.


let misMascotas = ['Zelda','Yogurt','Granola','Souvlaki','Blanca','Cuthu','Ciruelo','Valentina','Stalin','Manuel']

for(let props of misMascotas){
    console.log(props)
 }

// 7. Dado un array de 10 numeros, realizar un programa que muestre por consola el
// doble de cada uno de los elementos

// let diezNumeros = [1,2,3,4,5,6,7,8,9,10]
// for(let props of diezNumeros){
//     console.log(props * 2)
// }

// 8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
// objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
// que muestre un mensaje de presentacion por cada elemento del array.

// let padre = {
//     'Nombre': 'Ricardo',
//     'Apellido': 'Fuentes',
//     'Sexo': 'Masculino',
//     'Empleo': 'Tapicero',
// }

// let madre = {
//     'Nombre': 'Gloria',
//     'Apellido': 'Pinho',
//     'Sexo': 'Femenino',
//     'Empleo': 'Prof. de piano',
// }

// let hijo = {
//     'Nombre': 'Julian',
//     'Apellido': 'Pinho',
//     'Sexo': 'Masculino',
//     'Empleo': 'Administrativo',
// }
// let hija = {
//     'Nombre': 'Luisa',
//     'Apellido': 'Pinho',
//     'Sexo': 'Femenino',
//     'Empleo': 'Cocinera',
// }
// let hija2 = {
//     'Nombre': 'Natasha',
//     'Apellido': 'Pinho',
//     'Sexo': 'Femenino',
//     'Empleo': 'Estudiante',
// }

//  let grupoFamiliar = [padre,madre,hijo,hija,hija2]
//  for(let persona of grupoFamiliar){
//     console.log('Soy ' + persona.Nombre + ' y mi apellido es ' + persona.Apellido + '. Soy de sexo ' + persona.Sexo + ' y mi empleo es ser ' +  persona.Empleo)
// }

// // 9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo
// // muestre los numeros impares.


// let diezNumeros = [1,2,3,4,5,6,7,8,9,10]
//  for(let props of diezNumeros){
//     if(props % 2 == 1)
//      console.log(props)
// }

// // 10. Realizar un programa que permita la entrada de numeros y calcule la suma de los
// // numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
// // el usuario ingresa un 0.



// let numerosPares = 0 
// let numerosImpares = 0
// let ingresoNumeros = parseInt(prompt('Ingrese un numero'))

// while(ingresoNumeros !== 0){
//   if(ingresoNumeros % 2 == 0){
//    numerosPares += ingresoNumeros
//    console.log(numerosPares)
   
//   }else {
//    numerosImpares += ingresoNumeros
//    console.log(numerosImpares)


// }
// ingresoNumeros = parseInt(prompt('Ingrese un numero'))}
// console.log('Ingresó un 0')


// 11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
// numero mas grande.

// let diezNumeros = [4,5,255,230,512,64,27,48,29,10]
// let numeroMasGrande = diezNumeros[0]

//  for(let numero of diezNumeros){
//     if(numero > numeroMasGrande)
//      numeroMasGrande = numero
// }

// console.log(numeroMasGrande)

// // 12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
// // numero mas chico.

 let diezNumeros = [4,5,255,230,512,64,27,48,29,10]
 let numeroMasChico = diezNumeros[0]

 for(let numero of diezNumeros){
    if(numero < numeroMasGrande)
     numeroMasChico = numero
 }

console.log(numeroMasChico)

// 13. Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
// ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
// manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
// un empate. Caso contrario mostrar un mensaje con el nombre de la persona
// ganadora.

let jugador1 = prompt('Ingrese su nombre Jugador 1');
let jugador2 = prompt('Ingrese su nombre Jugador 2');

while (true) {
    let eleccionJugador1 = prompt(jugador1 + ', Piedra, Papel o Tijera?');
    let eleccionJugador2 = prompt(jugador2 + ', Piedra, Papel o Tijera?');

    if (eleccionJugador1 === eleccionJugador2) {
        console.log('Empate, continuen la partida');
    } else if (
        (eleccionJugador1 === 'piedra' && eleccionJugador2 === 'tijera') ||
        (eleccionJugador1 === 'papel' && eleccionJugador2 === 'piedra') ||
        (eleccionJugador1 === 'tijera' && eleccionJugador2 === 'papel')
    ) {
        console.log(jugador1 + ' gana!');
        break;
    } else {
        console.log(jugador2 + ' gana!');
        break;
    }
}



//14 No llegué a tiempo u.u
