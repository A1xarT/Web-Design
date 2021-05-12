import Model from '../model/Model.js';
import View from '../view/View.js';
import LUser from '../model/LUser.js';

if (!localStorage.curUser)
    document.location.href = '../../../lab2/LogIn.html';

let model = new Model();
let view = new View();

view.loadHomePage(LUser.findByMail(localStorage.curUser));
view.bindAddContact(handleAddContact);
view.bindSortByName(handleSortByName);
view.bindSortByFavorite(handleSortByFavorite);

function handleAddContact() {
    if (model.addContact()) {
        window.location.reload();
    }
}

function handleSortByName() {
    model.sortByName();
    window.location.reload();
}

function handleSortByFavorite() {
    model.sortByFavorite();
    window.location.reload();
}

let user = LUser.findByMail(localStorage.curUser);
for (let i = 0; i < user.records.length; i++) {
    view.bindButtonOnClick('editContactName' + (i + 1), function () {
        let newName = prompt('Enter new contact name:');
        if (newName) {
            user.records[i].name = newName;
            user.saveChanges();
            window.location.reload();
        }
    });
    view.bindButtonOnClick('deleteContact' + (i + 1), function () {
        let deleteConfirm = confirm('Are you sure you want to delete whole contact ' + user.records[i].name + '?');
        if (deleteConfirm) {
            user.records.splice(i, 1);
            user.saveChanges();
            window.location.reload();
        }
    });
    view.bindButtonOnClick('favCheck' + (i + 1), function () {
        user.records[i].favorite = document.getElementById('favCheck' + (i + 1)).checked;
        user.saveChanges();
    });
    view.bindButtonOnClick('addNumberButton' + (i + 1), function () {
        let newNumber = prompt('Enter new number to add:');
        if (newNumber) {
            user.records[i].numbers.push(newNumber);
            user.saveChanges();
            window.location.reload();
        }
    });
    view.bindButtonOnClick('editNumberButton' + (i + 1), function () {
        let el = document.getElementById('numbers' + (i + 1));
        let newNumber = prompt('Enter new number:');
        if (newNumber) {
            user.records[i].numbers[el.selectedIndex] = newNumber;
            user.saveChanges();
            window.location.reload();
        }
    });
    view.bindButtonOnClick('deleteNumberButton' + (i + 1), function () {
        let el = document.getElementById('numbers' + (i + 1));
        let deleteConfirm = confirm('Are you sure you want to delete number ' + el.options[el.selectedIndex].value + '?');
        if (deleteConfirm) {
            user.records[i].numbers.splice(el.selectedIndex, 1);
            user.saveChanges();
            window.location.reload();
        }
    });
}
