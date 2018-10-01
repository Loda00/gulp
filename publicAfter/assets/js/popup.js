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
    container: '.center-box',
    childrenBox: '.children-box',
    content: '.form-reg',
    btnShowModal: '.show-modal',
    btnCloseModal: '.close-modal'
  };
  var dom = {};

  function catchDom() {
    dom.parent = $(st.parent);
    dom.container = $(st.container);
    dom.content = $(st.content);
    dom.btnShowModal = $(st.btnShowModal);
    dom.btnCloseModal = $(st.btnCloseModal, dom.parent);
    dom.childrenBox = $(st.childrenBox, dom.parent);
  }

  function suscribeEvents() {
    dom.btnShowModal.on('click', events.showModal);
    dom.btnCloseModal.on('click', events.removeModal);
    dom.childrenBox.on('click', events.removeModal);
  }

  var events = {
    showModal: function showModal() {
      fn.getForm();
    },
    removeModal: function removeModal(e) {
      if (e.target !== this) return;
      dom.parent.addClass('hide');
    }
  };
  var fn = {
    getForm: function getForm() {
      var paragraph = $(dom.content).html();
      dom.container.html(paragraph);
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
    parent: '.external-box',
    btnSubmit: '.submit',
    loading: '.loading',
    inputName: '.name',
    inputLastName: '.lastname',
    regUsers: []
  };
  var dom = {};

  function catchDOm() {
    dom.parent = $(st.parent);
    dom.btnSubmit = $(st.btnSubmit);
    dom.loading = $(st.loading);
    dom.inputName = $(st.inputName);
    dom.inputLastName = $(st.inputLastName);
  }

  function suscribeEvents() {
    dom.btnSubmit.on('click', events.saveData);
  }

  var events = {
    saveData: function saveData(e) {
      var name = dom.inputName.val();
      var lastName = dom.inputLastName.val();
      st.regUsers.push({
        name: name,
        lastName: lastName
      });
      localStorage.setItem('users', JSON.stringify(st.regUsers));
      fn.showLoading();
      ps.run('login:init');
    }
  };
  var fn = {
    showLoading: function showLoading() {
      dom.loading.show();
    }
  };

  function init() {
    catchDOm();
    suscribeEvents();
  }

  return {
    init: init,
    dom: dom
  };
};

var Loading = function Loading() {
  var st = {
    efectLoading: '.efectLoading',
    formRegister: '.form-reg',
    listUsers: '.listUsers',
    container: '.center-box',
    content: '.userRegister'
  };
  var dom = {};

  function catchDom() {
    dom.efectLoading = $(st.efectLoading);
    dom.container = $(st.container);
  }

  function suscribeEvents() {
    $(document).ready(events.showLoading);
  }

  var events = {
    showLoading: function showLoading() {
      fn.cleanPopup();
      fn.getLoading();
      setTimeout(function () {
        ps.run('showUsers:init');
      }, 10);
    }
  };
  var fn = {
    getLoading: function getLoading() {
      var html = $(dom.efectLoading).html();
      dom.container.html(html);
    },
    cleanPopup: function cleanPopup() {
      dom.container.empty();
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

var ShowUsersRegistred = function ShowUsersRegistred() {
  var st = {
    loading: '.loading',
    content: '.userRegister',
    html: "",
    container: '.center-box'
  };
  var dom = {};

  function catchDom() {
    dom.loading = $(st.loading);
    dom.content = $(st.content);
    dom.container = $(st.container);
  }

  function suscribeEvents() {
    $(document).ready(events.closeLoading);
    setTimeout(function () {
      events.showRegister();
      events.getUsersRegister();
      events.setUserRegister();
    }, 810);
  }

  var events = {
    closeLoading: function closeLoading() {
      dom.loading.delay(800).hide(1);
      fn.cleanPopup();
    },
    getUsersRegister: function getUsersRegister() {
      var users = localStorage.getItem('users');
      fn.cleanArray();
      JSON.parse(users).forEach(function (value, index) {
        var data = "<li>".concat(value.name, " ").concat(value.lastName, "</li>");
        st.html += data;
      });
    },
    showRegister: function showRegister() {
      var html = $(dom.content).html().trim();
      dom.container.html(html);
    },
    setUserRegister: function setUserRegister() {
      dom.container.html(st.html);
    }
  };
  var fn = {
    cleanPopup: function cleanPopup() {
      setTimeout(function () {
        dom.container.empty();
      }, 800);
    },
    cleanArray: function cleanArray() {
      st.html = '';
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
var loading = new Loading();
var showUsersRegistred = new ShowUsersRegistred();
modal.init();
ps.add('modal:init', login.init);
ps.add('login:init', loading.init);
ps.add('showUsers:init', showUsersRegistred.init);