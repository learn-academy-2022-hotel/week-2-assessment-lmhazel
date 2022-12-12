// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Hotel 2022"
//console.log(cohort.split(""))

// a) Your answer: Hotel 2022
// b) Verify and explain: My answer was wrong, I forgot that the split method creates a new array at the "splits" even when there's no argument on where to make these splits.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
//console.log(greeter("LEARN Student"))

// a) Your answer: Hello, LEARN Student!
// b) Verify and explain: My answer was incorrect because I got "undefined". I think it's incorrect because there is no return in the function to show what the function should return. 

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
//console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: My answer was correct because the method .map() returns an array of the same length however transforms the values based on how they're being manipulated. In this case, the number data type is beiing multiplies and displays the variables multiplied by two. 

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
//console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: My answer was correct because the function uses the .filter() method to filer out any of the numbers from the array that don't have a remainder of 0 when divided by 2. 

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
//console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: My answer was correct because myCodingSkills is a class that contains the object languages. In the languages object at the 0th index location is the value "JavaScript"

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
//console.log(learnStudent)

// a) Your answer: George Hotel 2022
// b) Verify and explain: My answer was incorrect, the real answer is Learn { student: 'George', cohort: 'Hotel', year: 2022 }. I forgot that for classes, the output is going to include the name of the object unless modified
