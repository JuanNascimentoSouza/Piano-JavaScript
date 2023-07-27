const keys = document.querySelectorAll('.key');
const checkbox = document.querySelector('.checkbox__keys');
const switcher = document.querySelector('.switcher');
const keysSection = document.querySelector('.piano__keys');

const playNote = (note) => {
    const audio = new Audio(`../notes/${note}.wav`);
    audio.play();
}

const handleMouseDown = (key) => {
    playNote(key.getAttribute('data-note'));

    if (key.className.includes('black')) {
        key.classList.add('black--pressed');
        return;
    }

    key.style.background = '#ddd';
}

const handleMouseUp = (key) => {
    
    if (key.className.includes('black')) {
        key.classList.remove('black--pressed');
        return;
    }

    key.style.background = 'white';
    
}

keys.forEach((key) => {
    key.addEventListener('mousedown', () => handleMouseDown(key))
    key.addEventListener('mouseup', () => handleMouseUp(key))
});

checkbox.addEventListener('change', ({ target }) => {
    if (target.checked) {
        switcher.classList.add('switcher--active');
        keysSection.classList.remove('disabled-keys');
        return;
    }
    switcher.classList.remove('switcher--active');
    keysSection.classList.add('disabled-keys');
});

const keyDownMapper = {

    "a": () => handleMouseDown(keys[0]),
    "w": () => handleMouseDown(keys[1]),
    "s": () => handleMouseDown(keys[2]),
    "e": () => handleMouseDown(keys[3]),
    "d": () => handleMouseDown(keys[4]),
    "f": () => handleMouseDown(keys[5]),
    "t": () => handleMouseDown(keys[6]),
    "g": () => handleMouseDown(keys[7]),
    "y": () => handleMouseDown(keys[8]),
    "h": () => handleMouseDown(keys[9]),
    "u": () => handleMouseDown(keys[10]),
    "j": () => handleMouseDown(keys[11]),
    "k": () => handleMouseDown(keys[12]),
    "o": () => handleMouseDown(keys[13]),
    "l": () => handleMouseDown(keys[14]),
    "p": () => handleMouseDown(keys[15]),
    "ç": () => handleMouseDown(keys[16]),
    "~": () => handleMouseDown(keys[17]),
    "[": () => handleMouseDown(keys[18]),
    "]": () => handleMouseDown(keys[19]),
    ";": () => handleMouseDown(keys[20]),
    ".": () => handleMouseDown(keys[21]),
    ",": () => handleMouseDown(keys[22]),
    "m": () => handleMouseDown(keys[23]),
}

const keyUpMapper = {
    "a": () => handleMouseUp(keys[0]),
    "w": () => handleMouseUp(keys[1]),
    "s": () => handleMouseUp(keys[2]),
    "e": () => handleMouseUp(keys[3]),
    "d": () => handleMouseUp(keys[4]),
    "f": () => handleMouseUp(keys[5]),
    "t": () => handleMouseUp(keys[6]),
    "g": () => handleMouseUp(keys[7]),
    "y": () => handleMouseUp(keys[8]),
    "h": () => handleMouseUp(keys[9]),
    "u": () => handleMouseUp(keys[10]),
    "j": () => handleMouseUp(keys[11]),
    "k": () => handleMouseUp(keys[12]),
    "o": () => handleMouseUp(keys[13]),
    "l": () => handleMouseUp(keys[14]),
    "p": () => handleMouseUp(keys[15]),
    "ç": () => handleMouseUp(keys[16]),
    "~": () => handleMouseUp(keys[17]),
    "[": () => handleMouseUp(keys[18]),
    "~": () => handleMouseUp(keys[19]),
    ";": () => handleMouseUp(keys[20]),
    ".": () => handleMouseUp(keys[21]),
    ",": () => handleMouseUp(keys[22]),
    "m": () => handleMouseUp(keys[23]),
}

document.addEventListener('keydown', (event) => {
    event.preventDefault();
    keyDownMapper[event.key]()
});

document.addEventListener('keyup', (event) => {
    keyUpMapper[event.key]()
});