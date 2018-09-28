"use strict";

var fn = function fn() {
  var fns = {};

  var add = function add(nameFn, Fn) {
    fns[nameFn] = Fn;
  };

  var run = function run(nameFn, args) {
    fns[nameFn](args);
  };

  return {
    add: add,
    run: run
  };
};

var ps = new fn();

var Modal = function Modal() {
  var st = {
    parent: '.external-box',
    btnShowModal: '.show-modal',
    btnCloseModal: '.close-modal',
    content: '.form-reg',
    container: '.center-box '
  };
  var dom = {};

  function catchDom() {
    dom.parent = $(st.parent);
    dom.btnShowModal = $(st.btnShowModal);
    dom.btnCloseModal = $(st.btnCloseModal, dom.parent);
    dom.content = $(st.content);
    dom.container = $(st.container);
  }

  function suscribeEvents() {
    dom.btnShowModal.on('click', events.showModal);
    dom.btnCloseModal.on('click', events.removeModal);
    $('.capa-hijo').on('click', events.removeModal);
  }

  var events = {
    showModal: function showModal() {
      fn.getForm();
    },
    removeModal: function removeModal(e) {
      console.log(e); // console.log(this)

      if (e.target !== this) return;
      dom.parent.addClass('hide');
    }
  };
  var fn = {
    getForm: function getForm() {
      var paragraph = $(dom.content).html();
      $(dom.container).html(paragraph);
      dom.parent.removeClass('hide');
      setTimeout(function () {
        ps.run('modal:init');
      }, 10);
    }
  };

  function init() {
    catchDom();
    suscribeEvents();
  }

  return {
    init: init
  };
};

var Login = function Login() {
  var st = {
    btnSubmit: '.submit',
    inputName: '.name',
    inputLastName: '.lastname',
    regUsers: []
  };
  var dom = {};

  function catchDOm() {
    dom.btnSubmit = $(st.btnSubmit);
    dom.inputName = $(st.inputName);
    dom.inputLastName = $(st.inputLastName);
  }

  function suscribeEvents() {
    dom.btnSubmit.on('click', events.getData);
  }

  var events = {
    getData: function getData(e) {
      var name = $(dom.inputName).val();
      var lastName = $(dom.inputLastName).val();
      st.regUsers.push({
        name: name,
        lastName: lastName
      });
      localStorage.setItem('users', JSON.stringify(st.regUsers));
      ps.run('login:init');
    }
  };
  var fn = {};

  function init() {
    catchDOm();
    suscribeEvents();
  }

  return {
    init: init,
    dom: dom
  };
};

var RegistredUsers = function RegistredUsers() {
  var st = {
    efectLoading: '.loading',
    formRegister: '.form-reg',
    html: "",
    listUsers: '.listUsers',
    container: '.center-box',
    content: '.userRegister'
  };
  var dom = {};

  function catchDom() {
    dom.efectLoading = $(st.efectLoading);
    dom.formRegister = $(st.formRegister);
    dom.listUsers = $(st.listUsers);
    dom.container = $(st.container);
  }

  function suscribeEvents() {
    $(document).ready(events.showLoading);
    setTimeout(function () {
      events.showListUsers();
    }, 1500);
  }

  var events = {
    showLoading: function showLoading() {
      $();
      $(dom.efectLoading).delay(1500).hide(1);
    },
    showListUsers: function showListUsers() {
      fn.getUsersRegister();
      fn.showUsersRegister();
    }
  };
  var fn = {
    clearPopup: function clearPopup() {
      $(dom.formRegister).remove();
    },
    getUsersRegister: function getUsersRegister() {
      var users = localStorage.getItem('users');
      console.log();
      JSON.parse(users).forEach(function (value, index) {
        var data = "<li> ".concat(value.name, " ").concat(value.lastName, "</li>");
        st.html += data;
      });
    },
    showUsersRegister: function showUsersRegister() {
      console.log(st.html);
      $(dom.listUsers).html(st.html);
    }
  };

  function init() {
    catchDom();
    suscribeEvents();
  }

  return {
    init: init
  };
};

var modal = new Modal();
var login = new Login();
var registredUsers = new RegistredUsers();
modal.init();
ps.add('modal:init', login.init);
ps.add('login:init', registredUsers.init);
$('.loading').delay(1000).hide(1); // "use strict";
// var Modal = function () {
//     let st = {
//         parent: '.external-box',
//         btnShowModal: '.show-modal',
//         btnCloseModal: '.close-modal',
//         content: '.form-login'
//     };
//     let dom = {};
//     function catchDom() {
//         dom.parent = $(st.parent);
//         dom.btnShowModal = $(st.btnShowModal);
//         dom.btnCloseModal = $(st.btnCloseModal, dom.parent);
//         dom.contentModal = $(st.content);
//     }
//     let suscribeEvents = function () {
//         dom.btnShowModal.on('click', events.handOpen);
//         dom.btnCloseModal.on('click', events.handClose);
//     }
//     let events = {
//         handOpen() {
//             dom.parent.show();
//             fn.handLoad()
//         },
//         handClose() {
//             dom.parent.hide();
//         }
//     }
//     let fn = {
//         handLoad() {
//             let form = dom.contentModal.html();
//             $('.center-box').html(form);
//         }
//     }
//     let init = function (st) {
//         //extends
//         //object.azain
//         catchDom();
//         suscribeEvents();
//     }
//     return {
//         init,
//         fn
//     }
// }
// let modal = new Modal()
// modal.init()
// console.log(modal.fn)
// let Modal = function () {
//     let st = {
//         showModal: '.show-modal',
//         closeModal: '.close-modal'
//     }
//     let DOM = {}
//     function catchDom() {
//         DOM.showModal = $(st.showModal);
//         DOM.closeModal = $(st.closeModal);
//     }
//     function handClick(arg) {
//         st.openModal = arg;
//     }
//     function handLoad(arg) {
//         st.fillModal = arg
//     }
//     function handClose(arg) {
//         st.closeModal = arg
//     }
//     function suscribeEvents() {
//         DOM.showModal.on('click', st.openModal)
//         DOM.closeModal.on('click', st.closeModal)
//     }
//     function suscribeEventsOnLoad() {
//         $(document).ready(st.fillModal)
//         suscribeEvents()
//     }
//     function init() {
//         catchDom()
//     }
//     return {
//         init,
//         open: handClick,
//         getForm: handLoad,
//         close: handClose,
//         exec: suscribeEvents,
//         load: suscribeEventsOnLoad
//     }
// }
// let modal = new Modal();
// modal.init();
// modal.open(() => {
//     $('.external-box').show();
//     modal.load()
// });
// modal.getForm(() => {
//     var form = $('.form-login').html();
//     $('.center-box').html(form);
// });
// modal.close(() => $('.external-box').hide())
// modal.exec();
// Button.click(() => {
//     Modal.content = Login.content
//     Modal.open(() => {
//         Login.suscribeEvents();
//     })
// });
// document.addEventListener('DOMContentLoaded', function (e) {
//     function darEfecto(efecto) {
//         var el = document.getElementsByClassName('cajainterna');
//         console.log(el)
//         el[0].className += " " +         // open: handClick,
// getForm: handLoad,
// close: handClose,
// exec: suscribeEvents,
// load: suscribeEventsOnLoadefecto;
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
// open: handClick,
// getForm: handLoad,
// close: handClose,
// exec: suscribeEvents,
// load: suscribeEventsOnLoad
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
//         alert('ss');        // open: handClick,
// getForm: handLoad,
// close: handClose,
// exec: suscribeEvents,
// load: suscribeEventsOnLoad
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