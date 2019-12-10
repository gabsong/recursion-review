// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

const stringifyJSON = function(obj) {
  // your code goes here
  let result = '';
  if (typeof obj === 'number') {
    result += obj + '';
  } else if (obj === null) {
    result += 'null';
  } else if (typeof obj === 'boolean') {
    result += obj;
  } else if (typeof obj === 'string') {
    result += '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    result += '[';
    for (let i = 0; i < obj.length; i++) {
      result += stringifyJSON(obj[i]);
      if (i !== obj.length - 1) {
        result += ',';
      }
    }
    result += ']';
  } else if (typeof obj === 'function') {
    // do nothing
  } else if (obj === undefined) {
    // do nothing
  } else {
    result += '{';
    for (let key in obj) {
      if (!(obj[key] === undefined || typeof obj[key] === 'function')) {
        result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }
    if (result.length > 1) {
      result = result.substring(0, result.length - 1);
    }
    result += '}';
  }
  return result;
};
