//Is "else" required?
// The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result:
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}