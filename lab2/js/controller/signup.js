import Model from '../model/Model.js';
import View from '../view/View.js';

if(localStorage.curUser)
    document.location.href = '../../../lab2/HomePage.html';

let model = new Model();
let view = new View();

view.bindSignup(handleSignup);

function handleSignup() {
    if (model.signup())
        document.location.href = '../../../lab2/AboutApp.html';
}