console.log("\n----------SWITCH STATEMENT-----------\n")

// Let's suppose the user can select the language of the web application.
// And we receive the value the user selected and store in a variable.

// For example:
let selectedLanguage = "EN" // Change this variable to simulate user selection.

// We want to greet the user in their language.
if (selectedLanguage === "EN") {
  console.log("Good morning, welcome to my website!")
} else if (selectedLanguage === "IT") {
  console.log("Buongiorno, benvenuto nel mio sito!")
} else if (selectedLanguage === "ES") {
  console.log("Buenos dias!")
} else if (selectedLanguage === "FR") {
  console.log("Bonjour!")
} else {
  // This happens in case none of the conditions above matched
  console.log("Language not supported!")
}

/* This is a chain of if statements with some specific traits:
- 1st: the condition is always the same: same variable === to something
- 2nd: the only things that change are the value after the === and the code-block we do
*/

// In case we have something like this we can use a switch
// Just Syntactic Sugar for a chain of if statements as described above.
switch (selectedLanguage) { // The variable based on which you want to switch what you do
  case "EN": // In case the value is "EN"...
    console.log("Good morning, welcome to my website!")
    break

  case "IT":
    console.log("Buongiorno, benvenuto nel mio sito!")
    break

  case "ES":
    console.log("Buenos dias!")
    break

  case "FR":
    console.log("Bonjour!")
    break

  default:
    console.log("Language not supported!")
    break
}



