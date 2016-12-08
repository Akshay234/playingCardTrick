var magic = {};
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


magic.divideInBatches = function (numbers) {
  var batches = {batch_1: [], batch_2: [], batch_3: []};
  var batchIndex = 0;
  var keys = Object.keys(batches);

  for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    batches[keys[batchIndex]].push(number);
    batchIndex = (batchIndex + 1) % 3;
  }

  return batches;
};

magic.counter = 0;

magic.showTheNumber = function (numbers) {
  console.log('Your number: ', numbers[10]);
};

magic.userInputHandler = function (setOfNumbers, magic, input) {
  var numbers = [];
  if (input == 1) {
    numbers = setOfNumbers.batch_2.concat(setOfNumbers.batch_1).concat(setOfNumbers.batch_3);
  }
  else if (input == 2) {
    numbers = setOfNumbers.batch_1.concat(setOfNumbers.batch_2).concat(setOfNumbers.batch_3);
  }
  else if (input == 3) {
    numbers = setOfNumbers.batch_1.concat(setOfNumbers.batch_3).concat(setOfNumbers.batch_2);
  }

  if (magic.counter == 3) {
    magic.showTheNumber(numbers);
    rl.close();
  } else {
    magic.main(numbers);
  }
};

magic.main = function (numbers) {
  var setOfNumbers = magic.divideInBatches(numbers);
  magic.counter++;
  magic.display(setOfNumbers)

};

magic.display = function (setOfNumbers) {
  var numbersToDisplay = "SET 1==>  " + magic.decorate(setOfNumbers.batch_1) + "\nSET 2==>  " + magic.decorate(setOfNumbers.batch_2) + '\nSET 3==>  ' + magic.decorate(setOfNumbers.batch_3) + '\n';
  // console.log(numbersToDisplay);
  rl.question(numbersToDisplay, magic.userInputHandler.bind(null, setOfNumbers, this));
};

magic.numbersGenerator = function () {
  var numbers = [];
  while (numbers.length < 21) {
    var number = Math.round(Math.random() * 21);
    if (numbers.indexOf(number) == -1 && number != 0) numbers.push(number);
  }
  return numbers;
};

magic.decorate = function (numbers) {
  var maxSpaceLength = 6;
  return numbers.map(function (number) {
    var spaceLength = maxSpaceLength - String(number).length;
    var rightPadding = Math.floor(spaceLength / 2);
    var leftPadding = spaceLength - rightPadding;

    return " ".repeat(leftPadding) + number + " ".repeat(rightPadding);
  }).join("|");
};

magic.main(magic.numbersGenerator());
