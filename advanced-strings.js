console.log("\n----------STRINGS ARE ARRYAS OF CHARACTERS----------\n")

let text = "Welcome Epicode students, hope you like JS"
          //012345678........

console.log(text)
console.log("The third character of this string is:", text[2])


console.log("\nLet's print all the characters one by one:")
// We want to print one by one, each one on its own line, all the characters


let i = 0; // We declare a variable to track where we are in the array. We start from 0, the first element.
while (i < text.length) {
  console.log(text[i])
  i += 1 // or, we can also use i++
}

// Another way to write exactly the same thing
// for (let i = 0; i < text.length; i++) { // i++ is just another way to write i += 1
//   let currentCharacter = text[i]
//   console.log(currentCharacter)
// }

console.log("\n-----------------TO LOWER/UPPER CASE---------------\n")

// Methods/functions: we can use them with the dot
// Just like we did for arrays.
// But they are specific for strings: for example we have
// toLowerCase & toUpperCase
console.log(text.toLowerCase())
console.log(text.toUpperCase())

console.log("\n-----------------REPLACE---------------\n")

// replace will replace only the first occurence
text = text.replace('Welcome', 'Good morning')
console.log(text)

// replace will replace all the occurences
text = text.toLowerCase().replaceAll('s', 'X')
console.log(text)

console.log("\n-----------------SLICE---------------\n")

let epicodeSlice = text.slice(13,20)
console.log(epicodeSlice)

console.log("\n----------------SPLIT--------------\n")

let words = text.split(" ")
console.log(words)

let passphrase = "this-is-my-passphrase"
console.log(passphrase.split('-'))
