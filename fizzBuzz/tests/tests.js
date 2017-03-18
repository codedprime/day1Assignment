(function(){
  'use strict';
  var run = require("../app/fizzBuzz.js");
  var fizzBuzz = run.fizzBuzz;

  describe("Fizz Buzz tests ", function() {
    it("should return `Fizz` for number divisible by 3", function() {
      expect(fizzBuzz(3)).toBe('Fizz');
    });
    it("should return `Buzz` for number divisible by 5", function() {
      expect(fizzBuzz(5)).toBe('Buzz');
    });
    it("should return `FizzBuzz` for 15", function() {
      expect(fizzBuzz(15)).toBe('FizzBuzz');
    });
    it("should return `FizzBuzz` for 45", function() {
      expect(fizzBuzz(45)).toBe('FizzBuzz');
    });
    it("should return `FizzBuzz` for 90", function() {
      expect(fizzBuzz(90)).toBe('FizzBuzz');
    });
    it("should return `Fizz` for 63", function() {
      expect(fizzBuzz(63)).toBe('Fizz');
    });
    it("should return 7 since its indivisible by 3 and 5", function() {
      expect(fizzBuzz(7)).toBe(7);
    });
    it("should return 101 since its indivisible by 3 and 5", function() {
      expect(fizzBuzz(101)).toBe(101);
    });
  });

  describe("Case for invalid input ", function() {
     it("should return 'invalid' since Four is not an integer number", function() {
         expect(fizzBuzz('Four')).toEqual('invalid');
      });
      it("should return 'invalid input' for empty entries", function() {
      expect(fizzBuzz('')).toEqual('invalid');
      });
      it("should return 'invalid input' since x is not a number", function() {
      expect(fizzBuzz("x")).toEqual('invalid');
      });
      it("should return 'invalid input' since 0 is not a natural number", function() {
      expect(fizzBuzz(0)).toEqual('invalid');
      });

  });
})();



