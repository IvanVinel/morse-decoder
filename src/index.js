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
const value = {
    '11': '-',
    '10': '.',
};
const space = '**';
function decode(expr) {
    const letter = expr.match(/.{1,10}/g);
    const symbol = letter.reduce( (acc,item) => {
        const str = item.match(/.{1,2}/g)
        if (str.every(i=>i.includes(space))) return acc.concat(' ');
        const result = str.reduce( (acc1, item1) => {
            if (value[item1]) return acc1.concat(value[item1]);
            return acc1;
        }, '');
        return acc.concat(MORSE_TABLE[result]);
    }, '');
    console.log(symbol)
    return symbol;
}

module.exports = {
    decode
}