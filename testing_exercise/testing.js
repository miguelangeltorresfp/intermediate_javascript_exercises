/**
 * Replaces a character with another in a string
 * @param {*} str
 * @param {*} char
 * @param {*} repChar
 */
const replaceWith = (str, char, repChar) => {
  return str.split('').reduce((prev, next) => {
    if (next.toLowerCase() === char.toLowerCase()) {
      prev += repChar;
    } else {
      prev += next;
    }
    return prev;
  }, '');
};

/**
 * Copies an array a certain number of times
 * @param {*} arr
 * @param {*} num
 */
const expand = (arr, num) => {
  let newArr = [];
  for (var i = 0; i < num; i++) {
    newArr = [...newArr, ...arr];
  }
  return newArr;
};

/**
 * Returns true if all values are numbers
 * Returns false if not all values are numbers
 * @param  {...any} args
 */
const acceptNumbersOnly = (...args) => args.every((el) => !isNaN(el));

/**
 * Merges and sorts two arrays
 * @param {*} arr1
 * @param {*} arr2
 */
const mergeArrays = (arr1, arr2) => [...arr1, ...arr2].sort((a, b) => a - b);

/**
 * Merge Objects
 * It overwrites the same keys in earlier objects when merging
 * @param {*} obj1
 * @param {*} obj2
 */
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
