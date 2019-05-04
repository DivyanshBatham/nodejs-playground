// Refer to these articles:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// https://stackoverflow.com/questions/33723263/how-to-change-what-an-es6-arrow-functions-this-points-to

class OBJ {
  constructor() {
    this.sum = 0;
  }

  // With arrow functions, this by default points to the outer scope, i.e. here OBJ:
  //   add(obj) {
  //     obj.arr.forEach(n => (this.sum += n));
  //   }

  // You can't make this to point to something else with arrow functions:
  //   add(obj) {
  //     obj.arr.forEach(n => (this.sum += n), obj);
  //   }

  // TypeError: Cannot read property 'sum' of undefined
  //   add(obj) {
  //     obj.arr.forEach(function(n) {
  //       this.sum += n;
  //     });
  //   }

  // ReferenceError: sum is not defined
  //   add(obj) {
  //     obj.arr.forEach(function(n) {
  //       sum += n;
  //     });
  //   }

  // This will add the sum to the object which was passed in.
  add(obj) {
    obj.arr.forEach(function(n) {
      this.sum += n;
    }, obj);
  }

  // This will add the sum to the OBJ class object O
  //   add(obj) {
  //     obj.arr.forEach(function(n) {
  //       this.sum += n;
  //     }, this);
  //   }
}
let obj = {
  sum: 0,
  arr: [1, 2, 3, 4]
};

const O = new OBJ();
console.log("Before addition: ");
console.log(O.sum);
console.log(obj.sum);

console.log("After addition: ");
O.add(obj);
console.log(O.sum);
console.log(obj.sum);