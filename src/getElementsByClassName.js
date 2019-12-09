// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, e) {
  // your code here
  var arr = [];
  e = e || document.body;

  if (e.className === className) {
    arr.push(e);
  }

  for (let i = 0; i < e.children.length; i++) {
    // calling getElementsByClassName on children
    let result = getElementsByClassName(className, e.children[i]);
    console.log(e.children[i].className, result);
  }

  // return array with elements
  return arr;
};
