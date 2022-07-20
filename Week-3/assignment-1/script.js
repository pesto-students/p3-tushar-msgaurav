/**
 * @param fn - a function which is to be memoized
 * @return - a function which accepts array of n number of arguments & return memoized value from the cache store
*/

// A memoize function that remembers previous inputs and stores them in cache:
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = args.toString();
    console.log("Cache Store:", cache);
    console.info("function called with " + key);
    if (cache.has(key)) {
      console.info("fetching from cache store..");
      return cache.get(key);
    }
    console.info("calculating the result...");
    cache.set(key, fn(...args));
    return cache.get(key);
  }
}

/**
 * @param args - array of n number of arguments
 * @return - a sum of all the number inputs
*/

// Given reducer method:
function add(...args) {
  const total = args.reduce((
    (prevVal, currVal) => prevVal + currVal
  ), 0)
  return total
}

// Create a method called memoize such that:
const memoizeAdd = memoize(add);

/**
 * @param args - array of n number of arguments
*/

// A function which measures the execution time:
function debugMemoize(...args) {
  console.time();
  console.log("Total:", memoizeAdd(...args));
  console.timeEnd();
};

// then calling...
debugMemoize(100, 100); // return 200     default: 0.426025390625 ms
debugMemoize(100);      // return 100     default: 0.22802734375 ms
debugMemoize(100, 200); // return 300     default: 0.203857421875 ms
debugMemoize(100, 100); // return 200     default: 0.220947265625 ms    (without computing)