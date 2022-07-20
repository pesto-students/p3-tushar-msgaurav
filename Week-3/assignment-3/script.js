function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }

  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?

/**
 * What is the output of the above problem?
 * output => Count is 0
*/

/**
 * Why?
 * Explanation:
 * When we run script file, createIncrement() function execute and return [increment, log] in the form of array.
 * Then with the help of destructuring in line-13, we've stored the increment() & log() in variables respectively.
 * 
 * Now increment() called three times thus the count value is 3 but the output is 0 when called log().
 * This happened because at the beginning the message variable is set `Count is 0` then log() won't get access
 * the message variable even after its value change thrice.
 * 
 * log() only get the message variable value at the beginning because message variable exists within the scope,
 * This behaviour is called "Clousure".
*/

// we can get the actual message variable value if we put message variable in log() function's body as shown below:
function _log() {
  let message = `Count is ${count}`;
  console.log(message);
}