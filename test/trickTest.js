var Trick = require('../src/trick.js');
var assert = require('assert');


describe('Trick', function () {
  describe('generateRandomNumbers', function () {
    it('should generate random numbers of given length when set length is given', function () {
      var trick = new Trick(60);
      assert.equal(60, trick.generateRandomNumbers().length);
    });

    it('should generate random numbers of default length (21) when set length is not given', function () {
      var trick = new Trick();
      assert.equal(21, trick.generateRandomNumbers().length);
    })
  });

  describe('divideInBatches', function () {
    it('should divide given numbers into three batches', function () {
      var trick = new Trick();
      var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
      var expectedBatches = {
        batch_1: [1, 4, 7, 10, 13, 16, 19],
        batch_2: [2, 5, 8, 11, 14, 17, 20],
        batch_3: [3, 6, 9, 12, 15, 18, 21]
      };

      assert.deepEqual(expectedBatches, trick.divideInBatches(numbers));
    });
  });

  describe('revealNumber', function () {
    it('should give the middle number of the given number set', function () {
      var trick = new Trick();
      var numbers = [1, 2, 3, 4, 5];
      var expectedNumber = 3;
      assert.equal(expectedNumber, trick.revealNumber(numbers));
    })
  });

  describe('decorate', function () {
    it('should give the string representation of given set of numbers separated by |', function () {
      var trick = new Trick();
      var inputSet = [1, 4, 5, 6, 17];
      var expectedRepresentation = '   1  |   4  |   5  |   6  |  17  ';
      assert.equal(expectedRepresentation, trick.decorate(inputSet));
    })
  })

});