const display = document.getElementById('display');

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        handleInput(button.textContent);
    });
});

document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (key === 'Enter') {
        handleInput('=');
    } else if (key === 'Backspace') {
        handleInput('C');
    } else if (/[\d\+\-\*\/\.\(\)]/.test(key)) {
        handleInput(key);
    }
});

function handleInput(input) {
    if (input === 'C') {
        display.value = '';
    } else if (input === '=') {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = 'Erro';
        }
    } else {
        display.value += input;
    }
}
