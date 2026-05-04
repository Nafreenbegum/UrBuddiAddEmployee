const { faker } = require('@faker-js/faker');

// 🔹 Store used FROM dates
const usedDates = new Set();

// 🔹 Store used ranges (NEW)
const usedRanges = [];

// 🔹 Check weekend
function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}

// 🔹 Move to next weekday
function getNextWeekday(date) {
  const newDate = new Date(date);

  while (isWeekend(newDate)) {
    newDate.setDate(newDate.getDate() + 1);
  }

  return newDate;
}

// 🔹 Check overlap (NEW)
function isOverlapping(newFrom, newTo) {
  return usedRanges.some(range => {
    return (
      newFrom <= range.to &&
      newTo >= range.from
    );
  });
}

// 🔹 Generate unique weekday FROM date
function generateUniqueFromDate() {
  let date;

  do {
    date = faker.date.soon({ days: 20 });
    date = getNextWeekday(date);
  } while (usedDates.has(date.toISOString().split('T')[0]));

  const formatted = date.toISOString().split('T')[0];
  usedDates.add(formatted);

  return date;
}

function generateLeaveData() {

  let fromDateObj, toDateObj;

  do {
    fromDateObj = generateUniqueFromDate();

    // 🔹 Always AFTER + weekday
    toDateObj = new Date(fromDateObj);
    toDateObj.setDate(
      fromDateObj.getDate() + faker.number.int({ min: 1, max: 3 })
    );

    toDateObj = getNextWeekday(toDateObj);

  } while (isOverlapping(fromDateObj, toDateObj)); // 🔥 KEY FIX

  // 🔹 Store this range (NEW)
  usedRanges.push({
    from: new Date(fromDateObj),
    to: new Date(toDateObj)
  });

  return {
    from: fromDateObj.toISOString().split('T')[0],
    to: toDateObj.toISOString().split('T')[0],

    subject: faker.helpers.arrayElement([
      "Medical leave request",
      "Personal leave request",
      "Family function leave",
      "Sick leave application",
      "Vacation leave request"
    ]),

    reason: faker.helpers.arrayElement([
      "I am not feeling well and need rest.",
      "I have a personal commitment to attend.",
      "I need to take care of a family matter.",
      "I have a medical appointment scheduled.",
      "I am planning a short vacation."
    ]),

    requestType: faker.helpers.arrayElement([
      "Leave",
      "Work from Home"
    ])
  };
}

module.exports = { generateLeaveData };