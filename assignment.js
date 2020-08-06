// Feet to Mile conversion
function feetToMile(feet) {
  if (feet < 0) {
    return "Enter a valid value";
  } else {
    mile = feet / 5280;
    return mile;
  }
}
var feet = 26400;
var result = feetToMile(feet);
console.log(result);

// Wood calculation
function woodCalculator(chair, table, bed) {
  if (chair < 0 || table < 0 || bed < 0) {
    return "Enter a valid value";
  } else {
    return chair * 1 + table * 3 + bed * 5;
  }
}
var chair = 5;
var table = 1;
var bed = 2;
var result = woodCalculator(chair, table, bed);
console.log(result);

// Brick calculation
function brickCalculator(floor) {
  var firstCatagory = 0;
  var secondCatagory = 0;
  var thirdCatagory = 0;
  if (floor < 0) {
    return "Enter a valid value";
  } else if (floor > 20) {
    firstCatagory = 10;
    secondCatagory = 10;
    thirdCatagory = floor - 20;
  } else if (floor > 10) {
    firstCatagory = 10;
    secondCatagory = floor - 10;
    thirdCatagory = 0;
  } else {
    firstCatagory = floor;
    secondCatagory = 0;
    thirdCatagory = 0;
  }
  var totalFeet = firstCatagory * 15 + secondCatagory * 12 + thirdCatagory * 10;
  var brickNum = totalFeet * 1000;
  return brickNum;
}
var floor = 25;
var result = brickCalculator(floor);
console.log(result);

//Friend who has the smallest name
function tinyFriend(friend) {
  var tinyName = friend[0];
  for (var i = 1; i < friend.length; i++) {
    var name = friend[i];
    if (name.length < tinyName.length) {
      tinyName = name;
    } else if (name.length == tinyName.length) {
      tinyName = tinyName + ", " + name;
    }
  }
  return tinyName;
}
var friend = ["kishan", "hossain", "himu", "razu"];
var result = tinyFriend(friend);
console.log(result);
