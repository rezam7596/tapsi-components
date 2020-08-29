"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeNonNumbers = exports.convertPersianNumberToEnglishNumber = exports.convertEnglishNumberToPersianNumber = void 0;
var persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
var persianNumberToEnglishNumber = {
  '۰': '0',
  '۱': '1',
  '۲': '2',
  '۳': '3',
  '۴': '4',
  '۵': '5',
  '۶': '6',
  '۷': '7',
  '۸': '8',
  '۹': '9'
};

var convertEnglishNumberToPersianNumber = function convertEnglishNumberToPersianNumber(englishText) {
  if (typeof englishText !== 'string') {
    return englishText;
  }

  var resultStr = englishText;

  for (var i = 0; i < 10; i += 1) {
    resultStr = resultStr.replace(RegExp(i, 'g'), persianNumbers[i]);
  }

  return resultStr;
};

exports.convertEnglishNumberToPersianNumber = convertEnglishNumberToPersianNumber;

var convertPersianNumberToEnglishNumber = function convertPersianNumberToEnglishNumber(persianText) {
  if (typeof persianText !== 'string') {
    return persianText;
  }

  var resultStr = persianText; // eslint-disable-next-line guard-for-in,no-restricted-syntax

  for (var persianNumber in persianNumberToEnglishNumber) {
    resultStr = resultStr.replace(RegExp(persianNumber, 'g'), persianNumberToEnglishNumber[persianNumber]);
  }

  return resultStr;
};

exports.convertPersianNumberToEnglishNumber = convertPersianNumberToEnglishNumber;

var removeNonNumbers = function removeNonNumbers(text) {
  return text.replace(/[^0-9.]/g, '');
};

exports.removeNonNumbers = removeNonNumbers;