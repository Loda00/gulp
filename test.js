// const c = console.log;
// let obj = {
//     nombre: "Jhon",
//     empresa: "Grupo el Comercio",
//     texto: function () {
//         console.log(`${this.nombre} trabaja en el ${this.empresa}`);
//     }
// }

// // obj.texto();

// let car = (function (colorCar) {
//     let color = colorCar;

//     return {

//         advance: function () {
//             console.log(`The car ${color} is advance`);
//         },

//         back: function () {
//             c(`The car ${color} is back`);
//         }

//     }
// })('Yellow');



// // car.advance();
// // car.back();

// // (() => {
// //     c(`WDF`);
// // })();


// // var miFuncionAnonima = function () {
// //     c("Hola mundo!");
// // };


// // var miFuncionAnonima = (function (mensaje) {
// //     c(mensaje);
// // })("Hola mundo");


// ((a, b) => {
//     return c(a + b)

// })(1, 3);

// var fun = function (a, b) {
//     return c(a + b)
// }(10, 4);

// class x {
//     constructor(monitor, cpu, teclado, mouse) {
//         this.monitor = monitor;
//         this.cpu = cpu;
//         this.teclado = teclado;
//         this.mouse = mouse;
//     }
// }


function EventChannel() {
    list = {};
}

EventChannel.prototype = {

    constructor: EventChannel,

    subscribe: function (name, callback) {

        if (!list[name])
            list[name] = [];

        list[name].push({ callback: callback });

    },
    unsubscribe: function (name) {
        if (list[name])
            delete list[name];
    },
    broadcast: function (name) {

        for (var i in list) {

            if (i === name) {
                var args = Array.prototype.slice.call(arguments);
                args.splice(0, 1);
                for (var j = 0; j < list[name].length; j++) {
                    list[name][j].callback.apply(this, args);
                    let x = list
                    console.log(x);
                }
            }
        }
    }
};


var channel = new EventChannel();

channel.subscribe('Jhon', function () {
    console.log('Entró ...');
});

channel.broadcast('Jhon');


function wea() {
    console.log(this.name);
}

let obj1 = {
    name: "Jhon",
    method: wea
}
let obj2 = {
    name: "Leslie",
    method: wea
}

// obj1.method()

// obj2.method()

function test1(callaback) {
    setTimeout(function () {
        callaback();
    }, 1000);
}

let all = {
    nombre: "Leslie",
    cansarce: function () {
        console.log(`${this.nombre} se ha cansado de esperar`)
    }
}

all.cansarce.call(all)

var repuesto = (function () {
    return {
        ask: "Aros"
    }
})();

var carro = (function (repuesto) {

    var saludo = "nuevo";

    var proceso = function () {
        return `El carro ${saludo} necesita el respuesto ${repuesto.ask}`
    }

    return {
        val: function () {
            console.log(proceso());
        }
    }
})(repuesto);

var x = (function (nombre) {
    var saludo = "Hola";

    var process = function () {
        return `El carro ${saludo} necesita el respuesto ${nombre}`
    }
    return {
        x: function () {
            console.log(process());
        }
    }
})("Jhon");

var preso = function () {
    var miNombre = "Juan";
    var miDelito = "ad";
    var sentencia = "sda";

    return {
        nombre: function () {
            return miNombre
        },
        miSentencia: function () {
            return sentencia
        },
        setSentencia: function (misentencia) {
            return sentencia = misentencia
        },
        setNombre: function (nombre) {
            return miNombre = nombre
        }
    }
}();

var game = function () {
    var goles = 0;

    return {
        golesAnotados: function (puntaje) {
            let x = puntaje + goles
            return goles = x;
        },
        golesTotal: function () {
            if (goles == 0)
                console.log(`Lleva ${goles} gol`)
            else
                console.log(`Lleva ${goles} goles`)
        }
    }

}();

document.addEventListener('DOMContentLoaded', function (e) {

    function darEfecto(efecto) {
        el = document.getElementsByClassName('cajainterna')[0];
        console.log(el)
        el.classNAme
    }
    function mostrar(e) {
        document.getElementsByClassName('cajaexterna')[0].style.dislay = "block";
        console.log(document.getElementsByClassName('cajaexterna')[0])
        darEfecto("bounceIn");
    }
    function ocultar() {
        setTimeout(function () {
            document.getElementsByClassName('cajaexterna').removeClass("bounceIn");
        }, 5);
    }
    document.querySelectorAll('a.mostrarmodal').addEventListener('click', mostrar)
    document.querySelectorAll('a.cerrarmodal').addEventListener('click', ocultar)
});


var getBrowserInfo = function () {
    var ua = navigator.userAgent, tem,
        M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
    return M.join(' ');
};

console.log(getBrowserInfo());
