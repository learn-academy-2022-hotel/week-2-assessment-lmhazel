# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: A parameter is the variables placed into a function. They are used in the argument portion of a fucntion. A function is like a machine that can be reused with different inputs (the parameter). The argument part of this machine is the intructions for the machine that tell it what to do specifically. 

Researched answer: Functions are a reusable pieces of code which can be compared to a machine that takes in different information and manipulates it based on what the coder wants to achieve. Parenthesis in a function expression are used to store the parameter. A parameter takes the place of arguments and is a named variable that is passed through a function. However, in order to make the code more dynamic, renaming the variable outside of the code block can be useful. So, arguments are used to renassign the parameter and give it different, changeable values for varying inputs to the function. Overall, parameters are a part of the function expression that stores the input for the function and arguments are used for reassigning the parameter and done outside of the function in order to be more dynamic. 

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: The built-in method .map() is used with higher-order functions in order to create an array in which a particular action is performed on the array and produces an array of the same length. The predefined parameters that .map() takes in are arrays and strings. Arrays are optimal because they are what .map() was designed to perform actions on and may not produce a desired outcome with anything else. 

Researched answer:The JavaScript built-in method .map() takes in an array and uses iteration on the array to produce an array of the same length however, having had the desired action performed on it. For example, the iteration using .map() may call for all the variables within an array to be divided by 3. The output would be an array of the same length as the input however, the variables would all have been divided by 3. The predefined parameters for the .map() method are the current value, the index, and the array the higher-order function calls on. The current value is required and the index and array are optional.  

3. What is the difference between map and filter?

Your answer: .map() and .filter() are both JavaScript buit-in methods used on higher-order functions. Higher-order functions are used for iteration when performing an action one on the parameters. .map() is used to perform an action on the parameter and produce an array of the same length as the parameter. .filter() is used to manipulate the parameter to either become a smaller subset or the same length after performing the action. 

Researched answer: Higher-order functions are a type of function meant to perform iterations to a parameter, specifically arrays. These are very useful in JavaScript because it can be a more condensed version of a for loop. Two types of array methods used with higher-order functions are .map() and .function(). They are very similar however have notable differences. First, .map() is used to take an array and perform the function on every variable within the array. The output is a new array of the same length with manipulated variables. .function(), on the other hand, performs the function and returns a new array with only the variables that satify the conditions of the function. .filter() will have an output that is the same length or a subset of the original array. 

4. What is iteration?

Your answer: Iteration is a type of function in which is repeatedly performed on parameters either a specific amount of times or until the function is complete. An example of when this could be used is when one has a set of numbers in which they want to multiply each number by 9. Instead of making a code block for each number in the set, they could put the set of numbers into an array and use an iteration function to cut down on the lines of code. 

Researched answer: In JavaScript, Iteration is the process of performing a certain function either a specific amount of times or until a condition is met. Two forms of iteration are for loop and higher-order function. Higher-order funciton is preferred because of its concisness. An example of when this could be used is when one has a set of numbers in which they want to multiply each number by 9. Instead of making a code block for each number in the set, they could put the set of numbers into an array and use an iteration function to cut down on the lines of code. 

5. What is the difference between a class and an object?

Your answer: Class and objects are both means to hold data but class holds objects within it. Class is like a folder and objects are the files. 

Researched answer: Objects cna hold both data and methods to be performed. They also store key value pairs as well as methods within curly braces. The data can be single indexes of an array. Classes are meants to store data and behavior such as objects.  Unlike how objects use camelCase, objects use PascalCase. They also are meant to be resusable. Overall, class is a a bleuprint for the object to be held in. 

6. STRETCH: What is hoisting in JavaScript?

Your answer: Hoisting is when a variable is used before a declaration.

Researched answer: Hoisting is when the assignment of a function, class, or variable comes before the execution of code where that item is found. This allows us to define all data before performing an action. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: Basically, user stories are specific details on what is attempting to be expressed to the user of any type of software. For example, I may want my user to feel like they can learn more info about animals when they use my service.

2. Spread operator: The spread operator is used to take something that can be iterated, like an array, and breaks it out into individual elements. This is normally used to create objects in JavaScript. This makes it easier to read and understand. 

3. React state: State is a built-in object in REACT which is used to store data. This is useful because it makes it easier to manage data that may be changing frequently. 

4. React props: Props in REACT stands for properties which are the properties of an object. Props is similar to state as they are both ways to store information. Props are  passed to the component. 

5. DOM events: DOM events are a way to notify the programmer that something has happened. Examples of these are when something is clicked on the website or if a page is refreshed.
