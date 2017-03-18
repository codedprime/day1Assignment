(function() {
  'use strict';
   var run = require("../app/findMinMax.js");
 var findMinMax = run.findMinMax;

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it('should return [0, 100] for [100, 0,9,4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([100,0,9,4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([0,100]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

    });

  });

  describe("Case for invalid input ", function() {
   it("should return 'invalid' since Ten is not an integer number", function() {
       expect(findMinMax('Ten')).toEqual('invalid');
    });
   it("should return 'invalid' since Ten is not an integer number", function() {
       expect(findMinMax(['Ten','four','one'])).toEqual('invalid');
    });
    it("should return 'invalid input' for empty entries", function() {
    expect(findMinMax('')).toEqual('invalid');
    });
    it("should return 'invalid input' since x is not an array", function() {
    expect(findMinMax("x")).toEqual('invalid');
    });
    it("should return 'invalid input' since 0 is not an array", function() {
    expect(findMinMax(0)).toEqual('invalid');
    });
    it("should return 'invalid input' since 1,2,3,4 is not an array", function() {
    expect(findMinMax(1,2,3,4)).toEqual('invalid');
    });


});

})();


