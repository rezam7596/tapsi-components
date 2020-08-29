"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDaysOfMonth = getDaysOfMonth;
exports.addZero = addZero;
exports.checkToday = checkToday;

/**
 * Get days of a month that should be shown on a month page
 *
 * @param month A moment object
 * @returns {Array}
 */
function getDaysOfMonth(month, isGregorian) {
  var days = [];
  var monthFormat = isGregorian ? 'Month' : 'jMonth';
  var dayOffset = isGregorian ? 0 : 1;
  var current = month.clone().startOf(monthFormat);
  var end = month.clone().endOf(monthFormat); // Set start to the first day of week in the last month

  current.subtract((current.day() + dayOffset) % 7, 'days'); // Set end to the last day of week in the next month

  end.add(6 - (end.day() + dayOffset) % 7, 'days');

  while (current.isBefore(end)) {
    days.push(current.clone());
    current.add(1, 'days');
  }

  return days;
}

function addZero(val) {
  val = Number(val);
  if (val < 10) return "0".concat(val);
  return val;
}

function checkToday(compare) {
  var today = new Date();
  var todayString = String(today.getFullYear()) + addZero(String(today.getMonth() + 1)) + addZero(String(today.getDate()));
  return compare === todayString;
}