// create car1 object:
const car1 = {
  company: 'Jaguar',
  transmission: 'Automatic',
  getColorModal: function (color, modal) {
    return `${this.company}, ${this.transmission}, ${color}, ${modal}`
  }
};

// create car2 object:
const car2 = {
  company: 'Tesla',
  transmission: 'Automatic'
};

/*
  Here we've two car object but car2 hasn't getColorModal method,
  but we can use getColorModal method in car2 with the help of call() function, 
*/

// calling call() function...
/* invoke getColorModal method from car1 to car2 to change the "this" instance */
console.log(car1.getColorModal.call(car2, 'Black', '2022'));    // return => Tesla, Automatic, Black, 2022

// calling apply() function...
/*
  The apply() function is similar to the call() function.
  The difference is:
  The call() function takes arguments separately.
  The apply() function takes arguments as an array.
*/
console.log(car1.getColorModal.apply(car2, ['White', '2020']));    // return => Tesla, Automatic, White, 2020

// calling bind() function:
/*
  bind() function returns a new function with a certain value, when called, has its "this" keyword set to the provided value,
  bind() accepts parameter just like call()
*/
const newCar = car1.getColorModal.bind(car1, 'Black', '2022');
console.log(newCar());    // return => Jaguar, Automatic, Black, 2022

/*
  Difference b/w call(), apply() & bind():
  - call() & apply() function for borrowing methods from an object and call the function immediately
  - bind() function is helpful for developer to call function later with a certain value or certain "this" keyword
*/