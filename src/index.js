const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const len = expr.length / 10;
    let arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(expr.slice(i * 10, i * 10 + 10));
    }
    let word = [];
    
    for (let el of arr) {
        if (el !== '**********') {
            let letter = '';
            let l = '';
            for (let j = 0; j < 5; j++) {
                
                l = el.slice(j * 2, j * 2 + 2);
                if (l === '00') continue;
                if (l === '10') letter += '.';
                if (l === '11') letter += '-';
            }
            word.push(MORSE_TABLE[letter]);
            letter = '';

        } else {
            word.push(' ');
        }
    }

    return word.join('');
}

module.exports = {
    decode
}