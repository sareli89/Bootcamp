let age = 20

if (age >= 18){
    console.log('Ya puedo votar 🗳')
}
console.log('continua program')


let coffee = true

if (coffee === true){
    console.log('Hoy tomare ☕️')
} else {
    console.log('Hoy tomare te 🍵')
}

console.log('Continua programa')


let number = 0
if (number === 0 ) {
    console.log('Es un numero neutral')
} else if (number > 0) {
    console.log('El numero es positivo')
}else{
    console.log("El numero es negativo")
}


let operation = prompt('Introduce la operacion que deseasar') //suma, resta, division, multiplicacion
let number1 = parseInt(prompt('Introduce un numero'))
let number2 = parseInt(prompt('Introduce un numero'))

switch (operation){
    case 'suma':
        console.log('La suma es:', number1 + number2)
        break
    case 'resta':
        console.log('La resta es:', number1 - number2)
        break
    case 'division':
        console.log('La division es:', number1 / number2)
        break
    case 'multiplicacion':
        console.log('La multiplicacion es:', number1 * number2)
        break
    default:
        console.log('Operacion no permitida.')
}

console.log('Sigue programa')

// Mostrar los numeros del 1 al 10 

let numbers = 0
for (numbers = 1; numbers < 11; numbers++){
    console.log(numbers)
}

let numbersInverse = 0

for (numbersInverse = 10; numbers2 = 0; numbers2--) {
   console.log(numbers2)
}

let numbers3 = 0 

for (numbers3 = 0; numbers3 <= 10; numbers3+=2) {
    console.log(numbers3)
}

