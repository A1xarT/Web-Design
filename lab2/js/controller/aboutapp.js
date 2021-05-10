import Model from '../model/Model.js';
import View from '../view/View.js';

if (!localStorage.curUser)
    document.location.href = '../../../lab2/LogIn.html';

let model = new Model();
let view = new View();