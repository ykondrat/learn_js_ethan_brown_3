// Scope
//console.log(greatings); // Error
let greatings = 'Hello world';

console.log(newVariable); // undefined (all of var are up to the top)
var newVariable = 'Hello world';

//Numbers
let count = 10; // decimal literal

const blue = 0x0000ff; // hex  ff == decimal 255
const umask = 0o0022; // octal 22 == decimal 18
const roomTemp = 21.5;
const c = 3.0e6; // 3.0 * 10^6 == 3 000 000
const e = -1.6e-19; // -1.6*10^-19 == 0.00000000000000000016

const inf = Infinity; // also can use Number.POSITIVE_INFINITY;
const ninf = -Infinity; // also can use Number.NEGATIVE_INFINITY;
const nan = NaN; // also can use Number.NaN;

const small = Number.EPSILON; // smallest number that can be add to 1 to get more than 1

const bigInt = Number.MAX_SAFE_INTEGER;
const minInt = Number.MIN_SAFE_INTEGER;

const max = Number.MAX_VALUE;
const min = Number.MIN_VALUE;


console.log(small, bigInt, minInt, max, min);

// String

const dialog = 'He looked up and said "dont\'t do that!" to Max.';
const s = 'In JavaScript, use \\ as an escape character in strings.';

// Also we can use \n (new line) \r \t
console.log(dialog);

let currentTemp = 19.5;

const message1 = 'The current temperature is ' + currentTemp + '\u00b0c';
const message2 = `The current temperature is ${currentTemp} \u00b0c`;

const multiline1 =   'line1\
                    line2'; // line1line2
const multiline2 =   'line1\n\
line2'; // It works
console.log(multiline2);


// Symbol
const RED = Symbol();
const ORANGE = Symbol('Color of sunset');

console.log(RED, ORANGE);

// Null undefined
console.log(undefined * null);
console.log(undefined + null);
console.log(undefined + undefined);
console.log(undefined * undefined);
console.log(null + null);
console.log(null * null);
