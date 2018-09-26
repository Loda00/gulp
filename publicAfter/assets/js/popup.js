// document.addEventListener('DOMContentLoaded', function (e) {
//     function darEfecto(efecto) {
//         var el = document.getElementsByClassName('cajainterna');
//         console.log(el)
//         el[0].className += " " + efecto;
//         console.log(el)
//     }
//     function mostrar(e) {
//         document.getElementsByClassName('cajaexterna')[0].style.display = "block";
//         // var w = document.getElementsByClassName('inicio')[0].innerHTML;
//         // console.log(w)
//         // document.getElementsByClassName('cajacentrada')[0].innerHTML = w;
//         darEfecto("bounceIn");
//     }
//     function ocultar() {
//         setTimeout(function () {
//             document.getElementsByClassName('cajaexterna')[0].style.display = "none";
//             document.getElementById('name').value = ""
//             document.getElementById('lastname').value = ""
//         }, 300);
//     }
//     document.querySelector('a.mostrarmodal').addEventListener('click', mostrar)
//     document.querySelector('a.cerrarmodal').addEventListener('click', ocultar)
// });
// // https://codepen.io/anon/pen/gdJBrZ
// // https://codepen.io/pedromarin/pen/jZOxxr
// class Person {
//     nombre;
//     getNombre(){
//        return this.nombre; 
//     }
//     setNombre(name){
//         this.nombre = name;
//     }
// }
// let person = new Person()
// person.setn('xx')
// person.getnombre();
// Modal
// open
// content
// close
// Button
// click
// Login
// submit
// content
// Button.click(() => {
//     Modal.content = Login.content
//     Modal.open(() => {
//         Login.suscribeEvents();
//     })
// });
// const c = console.log
// let ShowModal = function () {
//     let st = {
//         cajaExterna: '.mostrarmodal'
//     }
//     let dom = {}
//     function catchDOm() {
//         dom.cE = $(st.cajaExterna)
//     }
//     function handClick(arg) {
//         st.fn = arg
//     }
//     function suscribEvents() {
//         dom.cE.on('click', st.fn)
//     }
//     function start() {
//         catchDOm()
//     }
//     return {
//         start,
//         handClick,
//         suscribEvents
//     }
// }
// let BindModal = function () {
//     let st = {
//         cerrarModal: '.cerrarmodal'
//     }
//     let dom = {}
//     function catchDom() {
//         dom.closeModal = $(st.cerrarModal)
//     }
//     function handLoad(arg) {
//         st.fn = arg
//     }
//     function handClose(arg) {
//         st.fnClose = arg
//     }
//     function suscribEventsDom() {
//         $(document).ready(st.fn)
//     }
//     function suscribEvents() {
//         dom.closeModal.on('click', st.fnClose)
//     }
//     function start() {
//         catchDom()
//     }
//     return {
//         start,
//         handLoad,
//         handClose,
//         suscribEventsDom,
//         suscribEvents
//     }
// }
// // console.log(12)
// let showM = new ShowModal()
// let bindM = new BindModal()
// bindM.start()
// bindM.handLoad(() => {
//     var paragraph = $('.inicio').html();
//     console.log('paragraph', paragraph);
//     console.log($(paragraph).find('.cerrarmodal'));
//     $('.cajacentrada').html(paragraph);
//     $(paragraph).find('.cerrarmodal').on('click', function () {
//         alert('ss');
//         $('.cajaexterna').hide()
//     })
//     //    bindM.suscribEvents()
// })
// bindM.handClose(() => {
//     $('.cajaexterna').hide()
// })
// showM.start()
// showM.handClick(() => {
//     $('.cajaexterna').show()
//     bindM.suscribEventsDom()
// })
// showM.suscribEvents()
// let saveForm = function () {
//     let st = {
//         submit: '.submit'
//     }
//     let dom = {}
//     function catchDom() {
//         dom.sF = $(st.submit)
//         c($(st.submit))
//     }
//     function handEvent(arg) {
//         st.fn = arg
//     }
//     function suscribEvents() {
//         dom.sF.on('click', st.fn)
//         c(st.fn)
//     }
//     function start() {
//         catchDom()
//     }
//     return {
//         start,
//         handEvent,
//         suscribEvents
//     }
// }
// let sForm = new saveForm();
// sForm.start()
// sForm.handEvent(() => {
//     let name = $('#name').val()
//     let lastName = $('#lastname').val()
//     console.log(`Su nombre es ${name} ${lastName}`)
// })
// sForm.suscribEvents()
"use strict";