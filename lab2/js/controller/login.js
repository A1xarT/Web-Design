import Model from '../model/Model.js';
import View from '../view/View.js';

if(localStorage.curUser)
    document.location.href = '../../../lab2/HomePage.html';

// Remember me script
const rmCheck = document.getElementById("rememberMe"),
    emailInput = document.getElementById("inputEmail");
if (localStorage.checkbox && localStorage.checkbox !== "") {
    rmCheck.setAttribute("checked", "checked");
    emailInput.value = localStorage.username;
} else {
    rmCheck.removeAttribute("checked");
    emailInput.value = "";
}

let model = new Model();
let view = new View();

view.bindLogin(handleLogin);

function handleLogin() {
    if (model.login()) {
        window.open('../../../lab2/HomePage.html');
        window.close();
    }
}