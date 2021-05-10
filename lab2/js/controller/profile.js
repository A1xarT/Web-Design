import Model from '../model/Model.js';
import View from '../view/View.js';

if (!localStorage.curUser)
    document.location.href = '../../../lab2/LogIn.html';

let model = new Model();
let view = new View();

view.loadProfile();
view.bindUpdate(handleUpdate);
view.bindExit(handleExit);

function handleUpdate() {
    if (model.updateProfile())
        window.location.reload();
}

function handleExit() {
    model.exit();
}
