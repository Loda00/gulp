document.addEventListener('DOMContentLoaded', function (e) {

    function darEfecto(efecto) {
        el = document.getElementsByClassName('cajainterna');
        console.log(el)
        el[0].className += " " + efecto;
        console.log(el)
    }
    function mostrar(e) {
        document.getElementsByClassName('cajaexterna')[0].style.display = "block";
        darEfecto("bounceIn");
    }
    function ocultar() {
        setTimeout(function () {
            document.getElementsByClassName('cajaexterna')[0].style.display = "none";
        }, 5);
    }
    document.querySelector('a.mostrarmodal').addEventListener('click', mostrar)
    document.querySelector('a.cerrarmodal').addEventListener('click', ocultar)
});