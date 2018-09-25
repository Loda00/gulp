"use strict";

document.addEventListener('DOMContentLoaded', function (e) {
  function darEfecto(efecto) {
    var el = document.getElementsByClassName('cajainterna');
    console.log(el);
    el[0].className += " " + efecto;
    console.log(el);
  }

  function mostrar(e) {
    document.getElementsByClassName('cajaexterna')[0].style.display = "block"; // var w = document.getElementsByClassName('inicio')[0].innerHTML;
    // console.log(w)
    // document.getElementsByClassName('cajacentrada')[0].innerHTML = w;

    darEfecto("bounceIn");
  }

  function ocultar() {
    setTimeout(function () {
      document.getElementsByClassName('cajaexterna')[0].style.display = "none";
      document.getElementById('name').value = "";
      document.getElementById('lastname').value = "";
    }, 300);
  }

  document.querySelector('a.mostrarmodal').addEventListener('click', mostrar);
  document.querySelector('a.cerrarmodal').addEventListener('click', ocultar);
});
document.getElementsByClassName('submit')[0].addEventListener('click', function () {
  var name = document.getElementById('name').value;
  var lastname = document.getElementById('lastname').value;
  console.log("Te llamas ".concat(name, " ").concat(lastname));
}); // document.addEventListener('DOMContentLoaded', function () {
//     function mostrar() {
//         document.getElementsByClassName('cajaexterna')[0].style.display = "block";
//         document.getElementsByClassName('cajaexterna')[0].classList.add("bounceIn")
//         // document.getElementsByClassName('cerrarmodal')[0].innerHTML = '<h1>Hi</h1>'
//     }
//     function ocultar() {
//         setTimeout(function () {
//             document.getElementsByClassName('cajacentrada')[0].style.display = "none";
//         }, 200);
//     }
//     document.getElementsByClassName('mostrarmodal')[0].addEventListener('click', mostrar)
//     document.getElementsByClassName('close')[0].addEventListener('click', ocultar)
// });
// document.getElementsByClassName('close')[0].addEventListener('click', () => {
//     var x = document.getElementsByClassName('cerrarmodal')[0];
//     console.log(x.outerHTML)
// })
// document.getElementById('upPopup').addEventListener('click', function () {
//     var w = document.getElementsByClassName('inicio')[0].innerHTML;
//     console.log(w)
//     document.getElementsByClassName('cajacentrada')[0].innerHTML = w;
// });

/**** */
// let modulos = function () {
//     var popupShow = function () {
//         document.getElementsByClassName('cajaexterna')[0].style.display = "block";
//     }
//     var closePopup = function () {
//         setTimeout(function () {
//             document.getElementsByClassName('cajaexterna')[0].style.display = "none";
//         }, 100);
//     }
//     var savePopup = function () {
//     }
//     var initialize = {
//         show: function () {
//             document.querySelector('a.mostrarmodal').addEventListener('click', popupShow)
//             console.log('-----------------------')
//         },
//         fill: function () {
//             document.querySelector('a.cerrarmodal').addEventListener('click', closePopup)
//         }
//     }
//     return {
//         obj: initialize
//     }
// }();
// modulos.obj;
// document.addEventListener('DOMContentLoaded', modulos.show());
// document.addEventListener('DOMContentLoaded', modulos.fill());
// console.log('sadsa')

/*
HTML

<input type='text' class='inputClass' value=''>
<button class='btnSave' type='submit'>Guardar</button>

*/
// https://codepen.io/anon/pen/gdJBrZ
// https://codepen.io/pedromarin/pen/jZOxxr

var test1 = function test1() {
  var dom = {};
  var st = {
    inputText: '.inputClass',
    btnSave: '.btnSave'
  };

  var catchDom = function catchDom() {
    dom.inputText = $(st.inputText);
    dom.btnSave = $(st.btnSave);
  };

  var suscribeEvents = function suscribeEvents() {
    dom.btnSave.on('click', events.saveData);
  };

  var events = {
    saveData: function saveData(e) {
      var ele = e.target;
      fn.Mostrar();
    }
  };
  var fn = {
    Mostrar: function Mostrar() {
      console.log();
    }
  };

  var initialize = function initialize() {
    catchDom();
    suscribeEvents();
  };

  return {
    init: initialize
  };
};