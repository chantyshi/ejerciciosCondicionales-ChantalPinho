let num1= 4
let num2= 5
if (num1 > num2){
    console.log('El numero ' + num1 + 'es mayor que el numero' + num2)
}

//2. Realizar un programa que dado 2 números imprima por consola si los numeros son
//iguales o si son diferentes.

if (num1 == num2){
    console.log('Los numeros son iguales')
}
else{
    console.log('Los numeros son diferentes')
}

//3. Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros
//es el mas grande o si son iguales.

if (num1 > num2){
console.log('El numero ' + num1 + ' es mayor al' + num2)
else if(num2 > num2){
    console.log('El numero '+ num2 + 'es mayor al' + num1)
}
else{
    console.log('Tenemos la misma edad')
}}

//4. Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el más
//chico.
let num3= 6
if(num1 < num2 && num1 < num3){
    console.log('El numero' + num1 + 'es el mas chico')
}

//Realizar un programa que dado 2 objetos representando personas con las propiedades
//nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual
//es la de mayor edad.

let persona1 = {
    nombre: 'Chantal',
    edad: 25,
    altura: 1.65,
}
let persona2 = {
    nombre: 'Martina',
    edad: 20,
    altura: 1.60,
}

if (persona1.altura > persona2.altura){
    console.log('La persona mas alta es' + persona1.nombre)}
    else if (persona1.altura < persona2.altura) {
        console.log('La persona mas alta es' + persona2.nombre)

    }



if (persona1.edad > persona2.edad){
    console.log('La persona mayor de edad es' + persona1.nombre)}
    else if (persona1.edad < persona2.edad) {
        console.log('La persona mayor de edad es' + persona2.nombre)

    }

    //6. Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión
//y permita determinar si estas capacitado para conducir. La persona deberá cumplir con
//una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como
//mínimo


persona1.nombre = prompt('Ingresa tu nombre')
persona1.edad = parseInt(prompt('Ingresa tu edad'))
persona1.altura = parseInt(prompt('Ingresa tu altura'))
let vision= parseInt(prompt('Ingresa tu rango de visión'))
if (persona1.edad >= 18 && persona1.altura >= 1.50 && vision >= 8){
    console.log('Esta capacitado para conducir')}
   else {console.log('No esta capacitado para conducir')}

// 7. Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip o normal), si posee entrada (si o no, s o n, true o false). 
//Las personas que posean tu mismo nombre tienen ingreso libre así como también los que posean un pase vip,mostrar un mensaje de bienvenida.
 //Si posee entrada preguntar si desea utilizarla, en caso afirmativo mostrar mismo mensaje de bienvenida. 
 //Y por último de no tener el mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso afirmativo solicitar dinero disponible, si posee $1000 o más,
 //mostrar mensaje de venta de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en caso contrario a no querer comprar, mostrar mensaje de despedida.


 let nombre = prompt('Ingresa tu nombre')
 let pase = prompt('Tenes pase VIP o normal?')
 let tieneEntrada = confirm('Tiene entrada?')







// Si tu nombre es CHANTAL || tenes PASE VIP= bienvenido

if (nombre == 'Chantal' || pase == 'Vip'){
    console.log('Bienvenido a la plataforma')
}

// O SI
else if(tieneEntrada == true){
    let deseaUtilizarEntrada = confirm('Desea utilizar su entrada?')//Si tenes ENTRADA Y la queres usar = bienvenido
    if(deseaUtilizarEntrada == true){
        console.log('Bienvenido a la plataforma')
        
    }
    else console.log('Hasta luego.') //Si no queres usar ENTRADA = ADIOs
}  




else if(nombre != 'Chantal' || pase != 'Vip' || tieneEntrada == false){ //si nombre != CHANTAL o no tenes pase VIP O ENTRADA ENTONCES
    
    let deseaComprarEntrada = confirm('Desea comprar una entrada?')  // QUIERE COMPRAR?
     if(deseaComprarEntrada == true){  //SI 
        let dinero = parseInt(prompt('Cuanto dinero tiene?'))
        if(dinero >= 1000){ //si DINERO > 1000 ENTONCES
            console.log('Compra Exitosa') //Compra exitosa
            console.log('Bienvenido a la plataforma')

        } else console.log('Compra fallida') //SI DINERO < 1000 ENTONCES
    }
    else console.log('Hasta luego') //QUIERE COMPRAR?/ NO/ MENSAJE DESPEDIDA
}


// 8. Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable llamada numeroIncognita y que permita en 3 intentos adivinar el número.
//  El usuario deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá guardar en una variable llamada numeroIngresado, 
//  y en cada intento deberás mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a intentarlo” o “el numero ingresado es menor, 
//  vuelve a intentarlo” o en caso de adivinar, un mensaje que diga: “Ganaste, haz adivinado el número.” 
// No te preocupes si usas mucho código repetido, mas adelante veraz como realizar este juego de manera más eficiente.

let numeroIncognita = 2
let numeroIngresado = parseInt(prompt('Ingrese un numero del 1 al 10'))// INGRESE UN NUMERO MAYOR A 1 Y MENOR A 10

if(numeroIngresado == numeroIncognita){
    console.log('Ganaste, haz adivinado el numero')} //ADIVINO A LA PRIMERA
    //PERO SI PUEDE FALLAR:
    else if(numeroIngresado > numeroIncognita){
        console.log('El numero ingresado es mayor, vuelve a intentarlo')
    } else{
        console.log('El numero ingresado es menor, vuelve a intentarlo')
    }

            //AUN TIENE DOS INTENTOS, INTENTO NUMERO 2:
    numeroIngresado = parseInt(prompt('Ingrese un numero del 1 al 10'))
    if(numeroIngresado == numeroIncognita){
        console.log('Ganaste, haz adivinado el numero')} 
   
        else if(numeroIngresado > numeroIncognita){
            console.log('El numero ingresado es mayor, vuelve a intentarlo')
        } else{
            console.log('El numero ingresado es menor, vuelve a intentarlo')
        }

        //INTENTO 3
        numeroIngresado = parseInt(prompt('Ingrese un numero del 1 al 10'))
        if(numeroIngresado == numeroIncognita){
            console.log('Ganaste, haz adivinado el numero')} 
        else{
                console.log('Lo siento, te quedaste sin intentos')
            }


          //9. Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años), 
            // adolescente (13 a 18 años), 
            // un mayor joven (19 a 45 años) o un anciano (mas de 45 años), 
            // y en caso de ingresar una edad mayor a 100 mostrar un mensaje preguntando si en realidad tiene esa edad.
    
let edad = parseInt(prompt('Ingrese su edad'))

if(edad >=0 && edad <= 12){
    console.log('Eres un infante')
} 
else if(edad >=13 && edad <= 18){
console.log('Eres un adolescente')}
else if(edad >=19 && edad <= 45){
    console.log('Eres un mayor joven')}
else if( edad >= 45 && edad <= 100)
{console.log('Eres un anciano')}
else if(edad >= 100){
    console.log('Realmente tienes esa edad?')
}
    

// 10. Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2 jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado.
//  En caso de algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho trampa.

let jugador1 = prompt('Jugador 1: Piedra papel o tijeras?')
let jugador2 = prompt('Jugador 2: Piedra papel o tijeras?')

if(jugador1 === 'Papel' && jugador2 === 'Piedra' || jugador1 === 'Piedra' && jugador2 === 'Tijera' || jugador1 === 'Tijera' && jugador2 === 'Papel'){
    console.log('El jugador 1 gana!')}
    else if
        (jugador2 === 'Papel' && jugador1 === 'Piedra' || jugador2 === 'Piedra' && jugador1 === 'Tijera' || jugador2 === 'Tijera' && jugador1 === 'Papel'){ 
        console.log('El jugador 2 gana!')}
    else if (jugador1 === jugador2 ){
        console.log('Empate!')
    }else {
       console.log('Ingreso incorrecto! Esta haciendo trampa')
    }

    // 11. Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar por pantalla los siguientes mensajes según las opciones: 
    // Blanco o Negro: Falta de color, Verde: El color de la naturaleza, 
    // Azul: El color del agua, Amarillo: El color del sol, 
    // Rojo: El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor: Excelente elección, no lo teníamos pensado.

let color = prompt('Ingrese un color')

switch(color){
    case 'Blanco':
        console.log('Falta de color')
        break;
        case 'Negro':
            console.log('Falta de color')
            break;
            case 'Verde':
console.log('El color de la naturaleza')
break;
case 'Azul':
    console.log('El color del agua')
    break;
    case 'Amarillo':
    console.log('El color del sol')
    break;
    case 'Rojo':
        console.log('El color de la tierra')
        break;
      default:
            console.log('Excelente elección, no lo teníamos pensado'
            )
}


// 12. Realizar un programa que permita el ingreso de 2 valores numéricos y una operación. 
// Según sea la operación ingresada (suma, resta, multiplicación, división) 
// el programa deberá mostrar en pantalla un mensaje junto con el resultado. 
// En caso de haber elegido división realizar la operación siempre que sea posible o mostrar un mensaje de ERROR si el divisor ingresado fue 0.

let num1= parseInt(prompt('Ingrese un valor numérico'))
let num2= parseInt(prompt('Ingrese el segundo valor numérico'))
let operacion = prompt('Elige el tipo de operación')

if(operacion === 'Sumar'){
    console.log(num1 + num2)
}
else if(operacion === 'Restar'){
    console.log(num1 - num2)
}
else if(operacion === 'Multiplicar'){
    console.log(num1 * num2)
}
else if(operacion === 'Dividir'){
    console.log(num1 / num2)
    if( num2 === 0 )
    console.log('ERR0R')
}


// 13. Crear un programa que permita ingresar todos los datos de tu documento nacional de identidad, 
// mostrar por pantalla un mensaje que imprima todos los datos ingresados y pregunte si están correctos los mismos. 
// En caso afirmativo, crear un objeto llamado dni con todos los datos ingresados y mostrarlos por consola con console.table() mas un mensaje de registro exitoso, 
// en caso de que la persona rechace confirmar los datos, mostrar un mensaje que diga: vuelva a intentarlo en 1 mes.
    
let numeroDNI = parseInt(prompt('Ingrese su numero DNI'))
let nombre = prompt('Ingrese su nombre')
let apellido = prompt('Ingrese su apellido')
let fechaNacimiento = prompt('Ingrese su fecha nacimiento')
let sexo = prompt('Ingrese su sexo')
let nacionalidad = prompt('Ingrese su nacionalidad')

console.log('Numero DNI: ' + numeroDNI + ', ' +
'Nombre: ' + nombre + ', ' +
'Apellido: ' + apellido + ', ' +
'Fecha de nacimiento: ' + fechaNacimiento + ', ' +
'Sexo: ' + sexo + ', ' +
'Nacionalidad: ' + nacionalidad)
let datosCorrectos = confirm('Los datos ingresados son correctos?')
if(datosCorrectos == true){
    let DNI = {
    'Numero de DNI': numeroDNI,
    'Nombre': nombre,
    'Apellido': apellido,
    'Fecha de nacimiento': fechaNacimiento,
    'Sexo': sexo,
    'Nacionalidad': nacionalidad,
    };
console.table(DNI)
console.log('Sus datos han sido registrados correctamente')
    
}
else{
    console.log('vuelva a intentarlo en 1 mes.')

}