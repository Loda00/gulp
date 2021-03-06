var fn = function () {
    let fns = {}
    let add = (nameFn, Fn) => {
        fns[nameFn] = Fn;
    }
    let run = (nameFn, args) => {
        fns[nameFn](args)
    }
    return {
        add, run
    }
}

let ps = new fn();
let Modal = function () {
    let st = {
        parent: '.external-box',
        container: '.center-box',
        childrenBox: '.children-box',
        content: '.form-reg',
        btnShowModal: '.show-modal',
        btnCloseModal: '.close-modal',
    }

    let dom = {}

    function catchDom() {
        dom.parent = $(st.parent);
        dom.container = $(st.container);
        dom.content = $(st.content);
        dom.btnShowModal = $(st.btnShowModal);
        dom.btnCloseModal = $(st.btnCloseModal, dom.parent);
        dom.childrenBox = $(st.childrenBox, dom.parent);
    }

    function suscribeEvents() {
        dom.btnShowModal.on('click', events.showModal)
        dom.btnCloseModal.on('click', events.removeModal)
        dom.childrenBox.on('click', events.removeModal)
    }

    let events = {
        showModal() {
            fn.getForm();
        },
        removeModal(e) {
            if (e.target !== this)
                return;
            dom.parent.addClass('hide')
        }
    }

    let fn = {
        getForm() {
            let paragraph = dom.content.html();
            dom.container.html(paragraph);
            dom.parent.removeClass('hide')
            setTimeout(function () {
                ps.run('login:init')
            }, 10)
        }
    }

    function init() {
        catchDom();
        suscribeEvents();
    }

    return {
        init
    }
}

let Login = function () {
    let st = {
        parent: '.external-box',
        btnSubmit: '.submit',
        loading: '.loading',
        inputName: '.name',
        inputLastName: '.lastname',
        regUsers: []
    }

    let dom = {}

    function catchDOm() {
        dom.parent = $(st.parent);
        dom.btnSubmit = $(st.btnSubmit);
        dom.loading = $(st.loading);
        dom.inputName = $(st.inputName);
        dom.inputLastName = $(st.inputLastName);
    }

    function suscribeEvents() {
        dom.btnSubmit.on('click', events.saveData)
    }

    let events = {
        saveData(e) {
            let name = dom.inputName.val();
            let lastName = dom.inputLastName.val();

            st.regUsers.push({ name, lastName });
            localStorage.setItem('users', JSON.stringify(st.regUsers));
            fn.showLoading();
            ps.run('loading:init');
        }
    }

    let fn = {
        showLoading() {
            dom.loading.show();
        }
    }

    function init() {
        catchDOm();
        suscribeEvents();
    }

    return {
        init,
        dom
    }
}

let Loading = function () {
    let st = {
        efectLoading: '.efectLoading',
        formRegister: '.form-reg',
        listUsers: '.listUsers',
        container: '.center-box',
        content: '.userRegister'
    }

    let dom = {}

    function catchDom() {
        dom.efectLoading = $(st.efectLoading)
        dom.container = $(st.container)
    }

    function suscribeEvents() {
        $(document).ready(events.showLoading);
    }

    let events = {
        showLoading() {
            fn.cleanPopup();
            fn.getLoading();
            setTimeout(() => {
                ps.run('showUsers:init')
            }, 10);
        },
    }

    let fn = {

        getLoading() {
            let html = $(dom.efectLoading).html()
            dom.container.html(html)
        },
        cleanPopup() {
            dom.container.empty();
        }
    }

    function init() {
        catchDom();
        suscribeEvents();
    }
    return {
        init
    }
}


let ShowUsersRegistred = function () {
    let st = {
        loading: '.loading',
        content: '.user-Register',
        listUsers: '.list-Users',
        // btnNewUser: '.new-User',
        html: "",
        container: '.center-box'
    }

    let dom = {}

    function catchDom() {
        dom.loading = $(st.loading);
        dom.content = $(st.content);
        dom.container = $(st.container);
        dom.listUsers = $(st.listUsers);
        // dom.btnNewUser = $(st.btnNewUser);
    };;

    function suscribeEvents() {
        $(document).ready(events.closeLoading)
        setTimeout(() => {
            events.getUsersRegister();
            events.setUserRegister();
            events.showRegister();
            /* INSTANCIA DE ULTIMA FUNCION */
            ps.run('addUser:init');
        }, 810);
    }

    let events = {
        closeLoading() {
            dom.loading.delay(800).hide(1);
            setTimeout(() => {
                fn.cleanPopup();
            }, 800);
        },
        getUsersRegister() {
            let users = localStorage.getItem('users');;
            fn.cleanArray();
            JSON.parse(users).forEach((value, index) => {
                let data = `<li>${value.name} ${value.lastName}</li>`
                st.html += data;
            })
        },
        showRegister() {
            let paragraph = $(dom.content).html().trim();
            dom.container.html(paragraph);
        },
        setUserRegister() {
            dom.listUsers.html(st.html);
        },
    }

    let fn = {
        cleanPopup() {
            dom.container.empty();
        },
        cleanArray() {
            st.html = '';
        }
    }

    function init() {
        catchDom();
        suscribeEvents();
    }

    return {
        init
    }
}

let AddUser = function () {
    let st = {
        btnnewUser: '.new-User',
        parent: 'dom.parent',
        content: '.form-reg',
        container: '.center-box',
    }

    let dom = {}

    function catchDom() {
        dom.btnnewUser = $(st.btnnewUser);
        dom.content = $(st.content);
        dom.parent = $(st.parent);
        dom.container = $(st.container);
    }

    function suscribeEvents() {
        console.log(dom.btnnewUser)
        dom.btnnewUser.on('click', events.newUser);
    }

    let events = {
        newUser() {
            fn.cleanPopup();
            let paragraph = $(dom.content).html();
            dom.container.html(paragraph);
            dom.parent.removeClass('hide');
            setTimeout(function () {
                ps.run('login:init');
            }, 10)
        }
    }

    let fn = {
        cleanPopup() {
            dom.container.empty();
        }
    }

    function init() {
        catchDom();
        suscribeEvents();
    }

    return {
        init
    }
}

let modal = new Modal();
let login = new Login();
let loading = new Loading();
let showUsersRegistred = new ShowUsersRegistred();
let addUser = new AddUser();
modal.init()
ps.add('login:init', login.init);
ps.add('loading:init', loading.init);
ps.add('showUsers:init', showUsersRegistred.init);
ps.add('addUser:init', addUser.init);
console.log('1221')


