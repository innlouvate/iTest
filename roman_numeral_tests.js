const testModule = require('./test_framework.js');
const kataModule = require('./roman_numerals_example.js');

testModule.test("Test failure", testModule.assert.equals(1, 2));
testModule.test("Test success", testModule.assert.equals(1, 1));


testModule.test("Roman numerals for 1", testModule.assert.equals(kataModule.arabicToRoman(1), "I"));
testModule.test("Roman numerals for 2", testModule.assert.equals(kataModule.arabicToRoman(2), "II"));
testModule.test("Roman numerals for 3", testModule.assert.equals(kataModule.arabicToRoman(3), "III"));
testModule.test("Roman numerals for 4", testModule.assert.equals(kataModule.arabicToRoman(4), "IV"));
testModule.test("Roman numerals for 5", testModule.assert.equals(kataModule.arabicToRoman(5), "V"));
testModule.test("Roman numerals for 6", testModule.assert.equals(kataModule.arabicToRoman(6), "VI"));
testModule.test("Roman numerals for 7", testModule.assert.equals(kataModule.arabicToRoman(7), "VII"));
testModule.test("Roman numerals for 8", testModule.assert.equals(kataModule.arabicToRoman(8), "VIII"));
testModule.test("Roman numerals for 9", testModule.assert.equals(kataModule.arabicToRoman(9), "IX"));
testModule.test("Roman numerals for 10", testModule.assert.equals(kataModule.arabicToRoman(10), "X"));
testModule.test("Roman numerals for 11", testModule.assert.equals(kataModule.arabicToRoman(11), "XI"));
