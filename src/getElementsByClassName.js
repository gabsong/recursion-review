// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
const getElementsByClassName = function(className) {
  // your code here
  const arr = [];

  const lookup = function(className, e) {
    if (e.classList.contains(className)) {
      arr.push(e);
    }

    for (let i = 0; i < e.children.length; i++) {
      // calling lookup on children
      lookup(className, e.children[i]);
    }
  };

  lookup(className, document.body);

  // return array with elements
  return arr;
};
