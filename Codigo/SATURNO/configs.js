const themes = {
    light: {
        background: 'rgb(110, 182, 206)',
        text: 'black',
    },
    dark: {
        background: 'black',
        text: 'orange',
    },
    green: {
        background: 'green',
        text: 'orange',
    },
    pink: {
        background: 'pink',
        text: 'orange',
    },
    red: {
        background: 'red',
        text: 'black',
    },
};

function setTheme(newTheme) {
    const themeColors = themes[newTheme]; //Seleciona o tema para aplicar

    Object.keys(themeColors).map(function(key) {
        document.getElementsByTagName('html')[0].style.setProperty(`--${key}`, themeColors[key]); //Altera as variáveis no css
    });

    localStorage.setItem('theme', newTheme);
}

const theme = localStorage.getItem('theme');
if (theme) {
    setTheme(theme);
}

//--Mudança de temas--
const darkModeToggle = document.querySelector('input[name=theme]');
darkModeToggle.addEventListener('change', function({target}) {
    setTheme(target.checked ? 'dark' : 'light');
});

const greenModeToggle = document.querySelector('input[name=theme2]');
greenModeToggle.addEventListener('change', function({target}) {
    setTheme(target.checked ? 'green' : 'light');
});

const pinkModeToggle = document.querySelector('input[name=theme3]');
pinkModeToggle.addEventListener('change', function({target}) {
    setTheme(target.checked ? 'pink' : 'light');
});

const redModeToggle = document.querySelector('input[name=theme4]');
redModeToggle.addEventListener('change', function({target}) {
    setTheme(target.checked ? 'red' : 'light');
});
//--//

//--Mudança de ícones--
var contador0 = 1;
function mudaIconeNot() {
    contador0++;
    if (contador0 % 2 == 0) {
        let bt = document.getElementById('pressNot');
        bt.classList.remove('fa-toggle-off');
        bt.classList.add('fa-toggle-on');
        window.alert('Notificações ativadas!');
    }
    else {
        let bt = document.getElementById('pressNot');
        bt.classList.remove('fa-toggle-on');
        bt.classList.add('fa-toggle-off');
        window.alert('Notificações desativadas!');
    }
}


var contador2 = 1;
function mudaIconeDM() {
    contador2++;

    if (contador2 % 2 == 0) {
        let bt = document.getElementById('pressDM');
        bt.classList.remove('fa-toggle-off');
        bt.classList.add('fa-toggle-on');
    }
    else {
        let bt = document.getElementById('pressDM');
        bt.classList.remove('fa-toggle-on');
        bt.classList.add('fa-toggle-off');
    }
}

if (localStorage.getItem('theme') == 'dark') {
    let bt = document.getElementById('pressDM');
    bt.classList.remove('fa-toggle-off');
    bt.classList.add('fa-toggle-on');
}


var contador3 = 1;
function mudaIconeGM() {
    contador3++;
    if (contador3 % 2 == 0) {
        let bt = document.getElementById('pressGM');
        bt.classList.remove('fa-toggle-off');
        bt.classList.add('fa-toggle-on');
    }
    else {
        let bt = document.getElementById('pressGM');
        bt.classList.remove('fa-toggle-on');
        bt.classList.add('fa-toggle-off');
    }
}

if (localStorage.getItem('theme') == 'green') {
    let bt = document.getElementById('pressGM');
    bt.classList.remove('fa-toggle-off');
    bt.classList.add('fa-toggle-on');
}

var contador4 = 1;
function mudaIconePM() {
    contador4++;
    if (contador4 % 2 == 0) {
        let bt = document.getElementById('pressPM');
        bt.classList.remove('fa-toggle-off');
        bt.classList.add('fa-toggle-on');
    }
    else {
        let bt = document.getElementById('pressPM');
        bt.classList.remove('fa-toggle-on');
        bt.classList.add('fa-toggle-off');
    }
}

if (localStorage.getItem('theme') == 'pink') {
    let bt = document.getElementById('pressPM');
    bt.classList.remove('fa-toggle-off');
    bt.classList.add('fa-toggle-on');
}

var contador5 = 1;
function mudaIconeRM() {
    contador5++;
    if (contador5 % 2 == 0) {
        let bt = document.getElementById('pressRM');
        bt.classList.remove('fa-toggle-off');
        bt.classList.add('fa-toggle-on');
    }
    else {
        let bt = document.getElementById('pressRM');
        bt.classList.remove('fa-toggle-on');
        bt.classList.add('fa-toggle-off');
    }
}

if (localStorage.getItem('theme') == 'red') {
    let bt = document.getElementById('pressRM');
    bt.classList.remove('fa-toggle-off');
    bt.classList.add('fa-toggle-on');
}
//--//