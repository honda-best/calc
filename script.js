let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');
inputWindow.value = '0';


document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '0';
})

document.getElementById('btn_sqr').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    inputWindow.value = Math.sqrt(lastOperand);
    inputWindow.value = result;
})

document.getElementById('btn_plus').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
})

document.getElementById('btn_minus').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'minus';
    inputWindow.value = '';
})

document.getElementById('btn_umn').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'umn';
    inputWindow.value = '';
})

document.getElementById('btn_del').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'del';
    inputWindow.value = '';
})

document.getElementById('btn_res').addEventListener('click', function () {
    if (operation === 'sum') { 
        const result = lastOperand + parseFloat(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if (operation === 'minus') { 
        const result = lastOperand - parseFloat(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if (operation === 'umn') { 
        const result = lastOperand * parseFloat(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    if (operation === 'del') { 
        const result = lastOperand / parseFloat(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    
})

document.getElementById('btn_dot').addEventListener('click', function () {
    inputWindow.value += '.';
})

document.getElementById('btn_1').addEventListener('click', function () {
    if (inputWindow.value == 0) {
        inputWindow.value = inputWindow.value.substr(1);
    }
    inputWindow.value += '1'; 
})

document.getElementById('btn_2').addEventListener('click', function () {
    if (inputWindow.value == 0) {
        inputWindow.value = inputWindow.value.substr(1);
    }
    inputWindow.value += '2';
})

document.getElementById('btn_3').addEventListener('click', function () {
    if (inputWindow.value == 0) {
        inputWindow.value = inputWindow.value.substr(1);
    }
    inputWindow.value += '3';
})

document.getElementById('btn_4').addEventListener('click', function () {
    if (inputWindow.value == 0) {
        inputWindow.value = inputWindow.value.substr(1);
    }
    inputWindow.value += '4';
})

document.getElementById('btn_5').addEventListener('click', function () {
    if (inputWindow.value == 0) {
        inputWindow.value = inputWindow.value.substr(1);
    }
    inputWindow.value += '5';
})

document.getElementById('btn_6').addEventListener('click', function () {
    if (inputWindow.value == 0) {
        inputWindow.value = inputWindow.value.substr(1);
    }
    inputWindow.value += '6';
})

document.getElementById('btn_7').addEventListener('click', function () {
    if (inputWindow.value == 0) {
        inputWindow.value = inputWindow.value.substr(1);
    }
    inputWindow.value += '7';
})

document.getElementById('btn_8').addEventListener('click', function () {
    if (inputWindow.value == 0) {
        inputWindow.value = inputWindow.value.substr(1);
    }
    inputWindow.value += '8';
})

document.getElementById('btn_9').addEventListener('click', function () {
    if (inputWindow.value == 0) {
        inputWindow.value = inputWindow.value.substr(1);
    }
    inputWindow.value += '9';
})

document.getElementById('btn_0').addEventListener('click', function () {
    inputWindow.value += '0';
})