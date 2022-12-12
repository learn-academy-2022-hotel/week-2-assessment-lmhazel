// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.
//Pseudo Code: The name of the function will be divisible3 which will assess if the variable in the input is divisible by 3. 
//Input: a number
//Output: A string with the number from the input and whether it is divisable by 3 or not. 
//Function: divisible3 runs a function on the parameter called newNumber. newNumber is a variable that is assigned to the variable that was provided (object1, object2, object3) and changes it from an object data type to a number. divisible3 uses that parameter and divides it by 3 and sees if the remainder is equal to 0 using the remainder operator and the strictly equal to symbol. If the variable's remainder is 0 then the output is "(that number) is divisible by three." If the variable's remainder is not 0 then the output is "(that number is not divisible by three." 

// a) Create a test with expect statements for each of the variables provided.
const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

describe("divisible3", () => {
    it("returns whether or not the input is divisible by three", () => {
      expect(divisible3()).toEqual("15 is divisible by three")
    })
  })
  //output: good failure

// b) Create the function that makes the test pass.

var newNumber = object3.number

const divisible3 = (object) => {
    if (object % 3 === 0){
        return `${newNumber} is divisible by three`
    } 
    else {return `${newNumber} is not divisible by three`}
}
//console.log(divisible3(newNumber))

//output: -7 is not divisible by three

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
//Pseudo code: 
//Input: an array of words
//Output: the same array of workds but with the first letter of each word capitalized
//Function: The function capitalWord takes in the array (randomNouns1, randomNouns2) and returns the array by using .map to alter the array by taking each value and capitalizing the letter at the zeroth index using .toUpperCase and .substring to return the value from the 1st index location

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

describe("capitalWords", () => {
        it("returns an array with all the words capitalzed", () => {
          expect(capitalWords()).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        })
      })
//output: good failure

// b) Create the function that makes the test pass.

const capitalWords = (array) => {
    return array.map((value) => {
        return value[0].toUpperCase() + value.substring(1)
    })
}
//console.log(capitalWords(randomNouns1))
//outcome:[ 'Streetlamp', 'Potato', 'Teeth', 'Conclusion', 'Nephew' ]

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.
//Pseudo code:
//Input: string
//Output: the index of the first vowel
//Function: First, I used the function named vowelIndex and used the parameter statement. This function returns the statement using the .search() method that references the regex variable which contains all vowels. The .search() returns the index of the first appearance of any of the values from regex. Then, I console.log() the function but use the provided variables (vowelTester1, vowelTester2, vowelTester3) as the argument. This gives an output of the index of the first appearance of any vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe("vowelIndex", () => {
    it("returns the index of the first vowel", () => {
        expect(vowelIndex()).toEqual(1)
       })
})
// output: good failure

// b) Create the function that makes the test pass.

const regex = /[aeiou]/
const vowelIndex = (statement) => {
    return statement.search(regex)
}
//console.log(vowelIndex(vowelTester1))
//output: 1
