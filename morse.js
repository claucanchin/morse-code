var alphabet = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  v: '...-',
  x: '-..-',
  y: '-.--',
  z: '--..'
};

// console.log(Object.keys(alphabet));

var firstWord = "hello world"
var secondWord = "we love javascript"

//splitting the strings into array
var firstWordArray = firstWord.split("");
var secondWordArray = secondWord.split("");

//return an array of alphabet's property names (a, b, c...)
var alphabetArray = Object.keys(alphabet);
//console.log(alphabetArray);

//function to match alphabetArray with someArray
var encode = function(someArray) {

    var encodedArray = [];

    for (i = 0; i < someArray.length; i++) {
        for (j = 0; j < alphabetArray.length; j++) {
            if (someArray[i] === alphabetArray[j]) {
                encodedArray.push(alphabet[alphabetArray[j]]);
            }
        }
    }
    return encodedArray;
}

console.log("hello world");
console.log(encode(firstWordArray));
console.log("we love javascript")
console.log(encode(secondWordArray));