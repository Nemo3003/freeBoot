/**Primera parte:

Crear una función con tres parámetros que sean números que se suman entre sí.

Llamar a la función en el main y darle valores.

Segunda parte:

Crear una clase coche.

Dentro de la clase coche, una variable numérica que almacene el número de puertas que tiene.

Una función que incremente el número de puertas que tiene el coche.

Crear un objeto miCoche en el main y añadirle una puerta.

Mostrar el número de puertas que tiene el objeto. */
//Crear una función con tres parámetros que sean números que se suman entre sí.
function suma(num1, num2, num3) {
    return num1 + num2 + num3;
}
//Llamar a la función en el main y darle valores.
console.log(suma(1, 2, 3));
/**Crear una clase coche.

Dentro de la clase coche, una variable numérica que almacene el número de puertas que tiene.

Una función que incremente el número de puertas que tiene el coche.

Crear un objeto miCoche en el main y añadirle una puerta. */
var Coche = /** @class */ (function () {
    function Coche(numPuertas) {
        this.numPuertas = numPuertas;
    }
    Coche.prototype.incrementarPuertas = function () {
        this.numPuertas++;
    };
    return Coche;
}());
//Mostrar el número de puertas que tiene el objeto.
var miCoche = new Coche(2);
miCoche.incrementarPuertas();
console.log(miCoche.numPuertas);

