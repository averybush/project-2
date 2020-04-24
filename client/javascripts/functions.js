// jshint esversion: 6

//3a
function reverseWord(w) {
  //return word but reversed
  let splitString = w.split("");
  let reversedArray = splitString.reverse();
  let joinArray = reversedArray.join("");
  for (let j = 0; j < w.length; j++) {
  }
  return joinArray;
}

let revWords1 = (s) => {
  let wordArray = s.split(" "),
    result ="";

  for (let i = 0; i < wordArray.length; i++){
    let currentWord = wordArray[i];
    let reversedWord = reverseWord(currentWord);
    //change result
      result = result + reversedWord + " ";
  }
  return result;
};

//3b
function reverseWord(w) {
  //return word but reversed
  let splitString = w.split("");
  let reversedArray = splitString.reverse();
  let joinArray = reversedArray.join("");
  for (let j = 0; j < w.length; j++) {
  }
  return joinArray;
}

let revWords2 = (s) => {
  let wordArray = s.split(" "),
    result ="";

  wordArray.forEach(function(item) {
    let currentWord = item;
    let reversedWord = reverseWord(currentWord);
    //change result
      result = result + reversedWord + " ";
  });
  return result;
};

//3c
function reverseWord(w) {
  //return word but reversed
  let splitString = w.split("");
  let reversedArray = splitString.reverse();
  let joinArray = reversedArray.join("");
  for (let j = 0; j < w.length; j++) {
  }
  return joinArray;
}

let revWords3 = (s) => {
  let wordArray = s.split(" "),
    result ="";

  for (item of wordArray) {
    let currentWord = item;
    let reversedWord = reverseWord(currentWord);
    //change result
      result = result + reversedWord + " ";
  }
  return result;
};

//5 xc
let containsDuplicates = s => {
  let word = s.split("");
  //let cArr = [0, 0, 0, 0],
  let cArr = new Array(26).fill(0),
    code;
  for (var i = 0; i < s.length; i++) {
    code = word[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[code]++;
    }
  }
  return false;
};
