//have an object for numbers to words
var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
//have an object for numbers to places
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};
var numberToWords = function(number) {
  //instantiate a groupedArray
  //instantiate a wordsArray
  //convert number into string
  //split the string into an array
  //iterate through the array from right to  left
    //group every  3 characters and unshift into a groupedArray
  //iterate through the groupedArray from right to left
    //convert the groups of three into their respective words
      //keep track of the previous
  let groupedArray = [];
  let wordsArray = [];
  let string = JSON.stringify(number);
  //account for decimal places
  let decimals;
  if (string.includes('.')) {
    decimals = string.split('.');
  }
  //split only the first value for our algorithm - deal with decimal at the end
  let splitString;
  if (decimals) {
    splitString = decimals[0].split('');
  } else {
    splitString =  string.split('');
  }
  
  for (let i = splitString.length - 1; i >= 0; i -= 3) {
    if (splitString[i - 2]) {
      groupedArray.unshift(splitString[i - 2] + splitString[i - 1] + splitString[i]);
    } else if (splitString[i - 1]) {
      groupedArray.unshift(splitString[i - 1] + splitString[i]);
    } else {
      groupedArray.unshift(splitString[i]);
    }
  }
  //iterate through the groupedArray from right to left
  let thousandCount = 0;
  for (let i = groupedArray.length - 1; i >= 0; i--) {
    //instantiate chunk with empty string
    let wordChunk = '';
    let numberChunk = groupedArray[i];
    //if length is === 3
    if (numberChunk.length == 3) {
      if (numberChunk[0] > 0) {
        wordChunk += `${numbersToWords[numberChunk[0]]} hundred`;
      }
      if (numberChunk[1] > 1) {
        if (numberChunk[0] > 0) {
          wordChunk += ' and '
        }
        wordChunk += numbersToWords[numberChunk[1] + "0"];
        if (numberChunk[2] > 0) {
          wordChunk += `-${numbersToWords[numberChunk[2]]}`;
        }
      } else if (numberChunk[1] == 1) {
        if (numberChunk[0] > 0) {
          wordChunk += ' and '
        }
        wordChunk += numbersToWords[numberChunk[1] + numberChunk[2]];
      } else if (numberChunk[1] == 0) {
        if (numberChunk[2] > 0) {
          wordChunk += numbersToWords[numberChunk[2]];
        }
      }
        //if first number is greater than zero
          //add number plus hundred to chunk
        //if second number is greater than 1
          //add number(tens) to chunk
          //if third number is greater than 0
            //add -number to the chunk
        //else if number is === 1
          //add second number plus third number converted to the chunk (10 through 19)
        //else if number === 0
          //if third number is greater than 0
            //add number to chunk
    }
    if (groupedArray[i].length === 2) {
      if (numberChunk[0] > 1) {
        wordChunk += numbersToWords[numberChunk[0] + "0"];
        if (numberChunk[1] > 0) {
          wordChunk += `-${numbersToWords[numberChunk[1]]}`;
        }
      } else if (numberChunk[0] == 1) {
        wordChunk += numbersToWords[numberChunk[0] + numberChunk[1]];
      } else if (numberChunk[0] == 0) {
        if (numberChunk[1] > 0) {
          wordChunk += numbersToWords[numberChunk[1]];
        }
      }
    //if length is === 2
        //if first number is greater than 1
          //add number(tens) to chunk
          //if second number is greater than 0
            //add -number to the chunk
        //else if number is === 1
          //add first number plus second number converted to the chunk (10 through 19)
        //else if number === 0
          //if second number is greater than 0
            //add number to chunk
    }
    if (groupedArray[i].length === 1) {
    //if length is === 1
        //if first number is greater than 0 
          //add number to chunk
      if (numberChunk[0] > 0) {
        wordChunk += numbersToWords[numberChunk[0]];
      }
    }
    if (thousandCount > 0 && groupedArray[i] !== "000") {
      wordChunk += ` ${numbersToPlace[Math.pow(1000, thousandCount)]}`;
    }
    thousandCount++;
    //check what place from the right of the groupedArray we are and add place to the chunk
    //unshift wordsArray  with the chunk
    if (wordChunk !== "") {
      wordsArray.unshift(wordChunk);
    }
    console.log(groupedArray);
    console.log(wordsArray);
  } 
  // console.log(decimals);
  
  let result = wordsArray.join(', ');
  if (decimals) {
    result +=  ` and ${decimals[1]}/100`;
  }
  //99999999.99 -> ["99", "999", "999"]
  //have an array for the strings
  return result;
}

console.log(numberToWords(245.13));