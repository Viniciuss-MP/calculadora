let display = document.getElementById('display');

function appendToDisplay(value) {
    // Verifica se o valor é 'C' para limpar o display completamente
    if (value === 'C') {
        clearDisplay();
    }
    // Verifica se o valor é '<' para apagar o último caractere do display
    else if (value === '<') {
        // Remove o último caractere do valor do display
        display.value = display.value.slice(0, -1);
    }
    // Se for '=', realiza o cálculo da expressão no display
    else if (value === '=') {
        calculate();
    }
    // Substitui 'x' por '*' para multiplicação e depois adiciona ao display
    else if (value === 'x') {
        display.value += '*';
    }
    // Caso contrário, adiciona o valor normalmente ao display
    else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = '';
    }
}
