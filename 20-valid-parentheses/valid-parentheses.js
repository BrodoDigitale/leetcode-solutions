/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let stack = []

    for(let i = 0; i < s.length; i++) {
      if(s[i] === "(" || s[i] === "{" || s[i] === "[") {
        //push opening tag
        stack.push(s[i]);
      } else {
        //return case: closing tag without opening tag
        if(!stack.length) {
          return false;
        }
        const brackets = stack[stack.length - 1] + s[i];
        if(brackets !== "()" && brackets !== "[]" && brackets !== "{}") {
          //return case: brackets pair is not valid
          return false
        }
        //pop a valid pair of brackets
        stack.pop();
      }
  }
   //check that all opening tags are matched
   return stack.length === 0;
}