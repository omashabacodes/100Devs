//Working with variables
  // Declare two variables: admin and name.
  let admin, name;
  // Assign the value "John" to name.
  name = "John";
  // Copy the value from name to admin.
  admin = name;
  // Show the value of admin using alert (must output “John”).
  alert(admin);

//Giving the right name
  // Create a variable with the name of our planet. How would you name such a variable?
  let ourPlanetName = Earth;
  // Create a variable to store the name of a current visitor to a website. How would you name that variable?
  let currentUserName = "John";

//Uppercase const?
  //Examine the following code:
  const birthday = '18.04.1982';

  const age = someCode(birthday);
  // Here we have a constant birthday date and the age is calculated from birthday with the help of some code (it is not provided for shortness, and because details don’t matter here).

  //Would it be right to use upper case for birthday? For age? Or even for both?
  const BIRTHDAY = '18.04.1982'; // make uppercase?

  const AGE = someCode(BIRTHDAY); // make uppercase?

  //Answer
  //It would be ok to use uppercase const for BIRTHDAY since it's a hard-coded value, but not for age, since it's value is acquired (calculated) by someCode.