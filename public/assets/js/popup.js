document.addEventListener('DOMContentLoaded', function (e) {

    function mostrar(e) {
        document.getElementsByClassName('cajaexterna')[0].style.display = "block";

    }
    function ocultar() {
        setTimeout(function () {
            document.getElementsByClassName('cajaexterna')[0].style.display = "none";
        }, 5);
    }
    document.querySelector('a.mostrarmodal').addEventListener('click', mostrar)
    document.querySelector('a.cerrarmodal').addEventListener('click', ocultar)
});

// https://codepen.io/anon/pen/gdJBrZ
// https://codepen.io/pedromarin/pen/jZOxxr