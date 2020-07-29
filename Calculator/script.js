var exp = '', number, decimal, equal, operator, allowSR = true;
var textview = document.forms['myForm']['textview'];

function insertNum(num) {
    if (equal) {
        exp = num;
        textview.value = exp;
        number = true;
        equal = false;
    }
    else {
        exp = textview.value + num;
        textview.value = exp;
        number = true;
    }
    if (operator) decimal = false;
}

function insertOp(op) {
    textview.value = exp + op;
    operator = true;
    equal = false;
    allowSR = false;
}

function clean() {
    exp = '';
    textview.value = exp;
    decimal = false;
}

function back() {
    exp = textview.value;
    exp = exp.substring(0, exp.length - 1);
    textview.value = exp;
}

function equalTo() {
    if (exp) {
        exp = eval(exp);
        textview.value = exp;
        equal = true;
        decimal = false;
        number = false;
        allowSR = true;
    }
}

function themeSwitcher() {
    var dark = document.getElementById("dark");
    var mo = document.getElementById("mode");
    if (mo.getAttribute('href') == 'light.css') {
        mo.href = 'dark.css';
        dark.innerHTML = 'Light Mode';
    }
    else {
        mo.href = 'light.css';
        dark.innerHTML = 'Dark Mode';
    }
}