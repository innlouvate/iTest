"use strict";
const testModule = require('./test_framework.js');

const numerals = { M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1 }

String.prototype.repeat = function(times) {
   return (new Array(times + 1)).join(this);
}

function arabicToRoman(num) {
  let roman = '', i;
  for ( i in numerals ) {
    while ( num >= numerals[i] ) {
      roman += i;
      num -= numerals[i];
    }
  }
  return roman;
}

module.exports = {
  arabicToRoman
}
