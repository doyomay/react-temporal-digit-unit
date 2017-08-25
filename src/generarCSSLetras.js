/*
let months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
let letters = [];
months.map((item) => letters = [...letters, ...item.split('')])
console.log(letters);

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

let unique = letters.filter(onlyUnique)
*/

//Pasar digito a clase
let letters = [
    { 'a': "1110111" },
    { 'b': "0011111" },
    { 'c': "1001110" },
    { 'd': "0111101" },
    { 'e': "1001111" },
    { 'f': "1000111" },
    { 'g': "1111011" },
    { 'h': "0110111" },
    { 'i': "0000110" },
    { 'j': "0111100" },
    { 'k': "0110111" },
    { 'l': "0001110" },
    { 'm': "1010100" },
    { 'n': "0010101" },
    { 'o': "1111110" },
    { 'p': "1100111" },
    { 'q': "1110011" },
    { 'r': "0000101" },
    { 's': "1011011" },
    { 't': "0001111" },
    { 'u': "0111110" },
    { 'v': "0011100" },
    { 'w': "0101010" },
    { 'x': "0110111" },
    { 'y': "0111011" },
    { 'z': "1101101" }
];

let lettersStyle = '';
let objeCToStyleClass = item => {
    let style = '';
    let nameClass = Object.keys(item)[0];
    item[nameClass].split('').map((v, i) => {
        if (v != 0) {
            style += `.digit.letter-${nameClass} span:nth-child(${i + 1}),`;
        }
    })
    style = style.replace(/,+$/, '');
    style += '{background-color: #f55f46; animation: pulse-color 2s infinite;}';

    lettersStyle += style;
}

letters.map(objeCToStyleClass)

//FIN Pasar digito a clase

//Pruebas de digitos

let lettersString = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z';
let ArrayLetters = lettersString.split(',');
let index = 0;
let domDigits = document.querySelectorAll('.digit');
Array.from(domDigits).map((item) => {
    item.classList.remove("undefined");
    item.classList.add(`letter-${ArrayLetters[index]}`);
    index++;
});