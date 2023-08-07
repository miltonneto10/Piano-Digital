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
    key.style.height = '241px';
    key.style.borderBotton = 'none';
}

const handleMouseUP = (key) => {

    if (key.className.includes('black')) {
        key.classList.remove('black--pressed');
        return;
    }

    key.style.background = 'white';
    key.style.height = '240px';
    key.style.borderBotton = '8px solid #ddd';
}

keys.forEach((key) => {
    key.addEventListener('mousedown', () => handleMouseDown (key))
    key.addEventListener('mouseup', () => handleMouseUP (key))
});

checkbox.addEventListener('change', ({target}) =>{
    if (target.checked) {
        switcher.classList.add('switcher--active');
        keysSection.classList.remove('disabled-keys');
        return;
    }

    switcher.classList.remove('switcher--active');
    keysSection.classList.add('disabled-keys');
})

const keyDownMapper = {
    "a": () => handleMouseDown(keys[0]),
    "b": () => handleMouseDown(keys[1]),
    "c": () => handleMouseDown(keys[2]),
    "d": () => handleMouseDown(keys[3]),
    "e": () => handleMouseDown(keys[4]),
    "f": () => handleMouseDown(keys[5]),
    "g": () => handleMouseDown(keys[6]),
    "h": () => handleMouseDown(keys[7]),
    "i": () => handleMouseDown(keys[8]),
    "j": () => handleMouseDown(keys[9]),
    "k": () => handleMouseDown(keys[10]),
    "l": () => handleMouseDown(keys[11]),
    "m": () => handleMouseDown(keys[12]),
    "n": () => handleMouseDown(keys[13]),
    "o": () => handleMouseDown(keys[14]),
    "p": () => handleMouseDown(keys[15]),
    "q": () => handleMouseDown(keys[16]),
    "r": () => handleMouseDown(keys[17]),
    "s": () => handleMouseDown(keys[18]),
    "t": () => handleMouseDown(keys[19]),
    "u": () => handleMouseDown(keys[20]),
    "v": () => handleMouseDown(keys[21]),
    "w": () => handleMouseDown(keys[22]),
    "x": () => handleMouseDown(keys[23]),
}

const keyUPMapper = {
    "a": () => handleMouseUP(keys[0]),
    "b": () => handleMouseUP(keys[1]),
    "c": () => handleMouseUP(keys[2]),
    "d": () => handleMouseUP(keys[3]),
    "e": () => handleMouseUP(keys[4]),
    "f": () => handleMouseUP(keys[5]),
    "g": () => handleMouseUP(keys[6]),
    "h": () => handleMouseUP(keys[7]),
    "i": () => handleMouseUP(keys[8]),
    "j": () => handleMouseUP(keys[9]),
    "k": () => handleMouseUP(keys[10]),
    "l": () => handleMouseUP(keys[11]),
    "m": () => handleMouseUP(keys[12]),
    "n": () => handleMouseUP(keys[13]),
    "o": () => handleMouseUP(keys[14]),
    "p": () => handleMouseUP(keys[15]),
    "q": () => handleMouseUP(keys[16]),
    "r": () => handleMouseUP(keys[17]),
    "s": () => handleMouseUP(keys[18]),
    "t": () => handleMouseUP(keys[19]),
    "u": () => handleMouseUP(keys[20]),
    "v": () => handleMouseUP(keys[21]),
    "w": () => handleMouseUP(keys[22]),
    "x": () => handleMouseUP(keys[23]),
}

document.addEventListener('keydown', (event) => {
    event.preventDefault();
    keyDownMapper[event.key]()
});

document.addEventListener('keyup', (event) => {
    event.preventDefault();
    keyUPMapper[event.key]()
});