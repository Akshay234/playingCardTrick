var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const MAX_TIME_DISPLAYABLE = 3;

const TOTAL_LENGTH = 21;


class Trick {

  constructor() {
    this.timesDisplayed = 0;
  }


  divideInBatches(numbers) {
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

  revealNumber(numbers) {
    return numbers[Math.floor(numbers.length / 2)];
  };

  processInput(batches, self, input) {
    var numbers = [];

    switch (input) {
      case '1':
        numbers = batches.batch_2.concat(batches.batch_1).concat(batches.batch_3);
        break;
      case '2':
        numbers = batches.batch_1.concat(batches.batch_2).concat(batches.batch_3);
        break;
      case '3':
        numbers = batches.batch_1.concat(batches.batch_3).concat(batches.batch_2);
        break;
      default:
        throw new Error(input + ' is a wrong input');
    }

    if (self.isTimeToReveal()) {

        rl.write(`\nDude your number is ${self.revealNumber(numbers)}\n`);
        rl.close();
    } else {
        rl.write('\nNow which batch consist your number\n')
        self.start(numbers);
    }
  };

  isTimeToReveal() {
    return this.timesDisplayed == MAX_TIME_DISPLAYABLE;
  }

  start(numbers = this.generateRandomNumbers()) {
    var batches = this.divideInBatches(numbers);
    this.timesDisplayed++;
    this.display(batches);
    rl.question('\nBatch No: ', this.processInput.bind(null, batches, this));
  }





  display(batches) {

    var numbersToDisplay =
        this.decorate('Batch 1==>  ', batches.batch_1) +
        this.decorate('\nBatch 2==>  ',batches.batch_2) +
        this.decorate('\nBatch 3==>  ',batches.batch_3) +
        '\n';
    rl.write(numbersToDisplay);
  };

  generateRandomNumbers() {
    var numbers = [];
    while (numbers.length < TOTAL_LENGTH) {
      var number = Math.round(Math.random() * TOTAL_LENGTH);
      if (numbers.indexOf(number) == -1 && number != 0) numbers.push(number);
    }
    return numbers;
  };

  decorate(title, numbers) {
    var maxSpaceLength = 6;
    var numbersWithPadding = numbers.map(function (number) {
      var spaceLength = maxSpaceLength - String(number).length;
      var rightPadding = Math.floor(spaceLength / 2);
      var leftPadding = spaceLength - rightPadding;

      return ' '.repeat(leftPadding) + number + ' '.repeat(rightPadding);
    });
    numbersWithPadding.unshift(title);
    return numbersWithPadding.join('|');
  };
}

module.exports = Trick;
