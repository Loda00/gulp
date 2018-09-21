const c = console.log;
let obj = {
    nombre: "Jhon",
    empresa: "Grupo el Comercio",
    texto: function () {
        console.log(`${this.nombre} trabaja en el ${this.empresa}`);
    }
}

// obj.texto();

let car = (function (colorCar) {
    let color = colorCar;

    return {

        advance: function () {
            console.log(`The car ${color} is advance`);
        },

        back: function () {
            c(`The car ${color} is back`);
        }

    }
})('Yellow');



// car.advance();
// car.back();

// (() => {
//     c(`WDF`);
// })();


// var miFuncionAnonima = function () {
//     c("Hola mundo!");
// };


// var miFuncionAnonima = (function (mensaje) {
//     c(mensaje);
// })("Hola mundo");


((a, b) => {
    return c(a + b)

})(1, 3);

var fun = function (a, b) {
    return c(a + b)
}(10, 4);

class x {
    constructor(monitor, cpu, teclado, mouse) {
        this.monitor = monitor;
        this.cpu = cpu;
        this.teclado = teclado;
        this.mouse = mouse;
    }
}