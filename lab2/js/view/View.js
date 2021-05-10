import LUser from '../model/LUser.js';

export default class View {

    bindLogin(handler) {
        let btn = document.getElementById('loginButton');
        btn.addEventListener('click', handler);
    }

    bindSignup(handler) {
        let btn = document.getElementById('signupButton');
        btn.addEventListener('click', handler);
    }

    bindAddContact(handler) {
        let btn = document.getElementById('addContactButton');
        btn.addEventListener('click', handler);
    }

    bindSortByName(handler) {
        let btn = document.getElementById('sortByNameButton');
        btn.addEventListener('click', handler);
    }

    bindSortByFavorite(handler) {
        let btn = document.getElementById('sortByFavoriteButton');
        btn.addEventListener('click', handler);
    }

    bindUpdate(handler) {
        let btn = document.getElementById('updateProfileB');
        btn.addEventListener('click', handler);
    }

    bindExit(handler) {
        let btn = document.getElementById('exitB');
        btn.addEventListener('click', handler);
    }

    bindButtonOnClick(buttonId, handler) {
        let btn = document.getElementById(buttonId);
        btn.addEventListener('click', handler);
    }

    loadProfile() {
        let user = LUser.findByMail(localStorage.curUser);
        document.getElementById('name').append(document.createTextNode(user.name));
        document.getElementById('email').append(document.createTextNode(user.email));
        document.getElementById('pass').append(document.createTextNode('********'));
        document.getElementById('date').append(document.createTextNode(user.date));
        document.getElementById('gender').append(document.createTextNode(user.gender));
    }

    loadHomePage() {
        let user = LUser.findByMail(localStorage.curUser);
        let tbody = document.getElementById('phoneBookTable')
        for (let i = 0; i < user.records.length; i++) {
            let tr = document.createElement('tr');
            // #
            let th = document.createElement('th');
            th.id = 'contact' + (i + 1);
            th.textContent = (i + 1).toString();
            tr.append(th);
            // Name
            let td = document.createElement('td');
            td.id = 'contactName' + (i + 1);
            td.append(user.records[i].name);
            // Delete-contact button
            let btn = document.createElement('button');
            btn.setAttribute('class', 'btn btn-sm btn-danger');
            btn.setAttribute('type', 'button');
            btn.setAttribute('style', 'float: right;');
            btn.textContent = 'Delete';
            btn.id = 'deleteContact' + (i + 1);
            td.append(btn);
            // Edit-name button
            btn = document.createElement('button');
            btn.setAttribute('class', 'btn btn-warning btn-sm');
            btn.setAttribute('type', 'button');
            btn.setAttribute('style', 'float: right;');
            btn.textContent = 'Edit';
            btn.id = 'editContactName' + (i + 1);
            td.append(btn);
            tr.append(td);
            // Numbers
            td = document.createElement('td');
            let form = document.createElement('form');
            let label = document.createElement('label');
            label.setAttribute('for', 'numbers');
            form.append(label);
            let select = document.createElement('select');
            select.id = 'numbers' + (i + 1);
            for (let j = 0; j < user.records[i].numbers.length; j++) {
                let option = document.createElement('option');
                option.value = user.records[i].numbers[j];
                option.textContent = user.records[i].numbers[j];
                select.append(option);
            }
            form.append(' ');
            form.append(select);
            td.append(form);
            tr.append(td);
            // Favorite
            td = document.createElement('td');
            td.setAttribute('class', 'checkbox');
            label = document.createElement('label');
            label.setAttribute('for', 'favCheck' + (i + 1));
            td.append(label);
            let input = document.createElement('input');
            input.id = 'favCheck' + (i + 1);
            input.setAttribute('type', 'checkbox');
            input.value = user.records[i].favorite;
            input.checked = user.records[i].favorite;
            td.append(' ');
            td.append(input);
            tr.append(td);
            // Numbers manage  menu
            td = document.createElement('td');
            td.setAttribute('class', 'controlButtons');
            btn = document.createElement('button');
            btn.setAttribute('class', 'btn btn-sm btn-primary controlButton');
            btn.textContent = 'Add';
            btn.id = 'addNumberButton' + (i + 1);
            td.append(btn);
            btn = document.createElement('button');
            btn.setAttribute('class', 'btn btn-sm btn-primary controlButton');
            btn.textContent = 'Edit';
            btn.id = 'editNumberButton' + (i + 1);
            td.append(' ');
            td.append(btn);
            btn = document.createElement('button');
            btn.setAttribute('class', 'btn btn-sm btn-danger controlButton');
            btn.textContent = 'Delete';
            btn.id = 'deleteNumberButton' + (i + 1);
            td.append(' ');
            td.append(btn);
            tr.append(td);

            tbody.append(tr);
        }
    }
}