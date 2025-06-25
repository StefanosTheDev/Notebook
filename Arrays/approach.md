// To captialize the First letter Of each Word This is the approach.

Access The first index of the position of the String. Check If it's capitalized. If not return .

If that is not capatlized. Grab that index position capatilize it. THen inser it back into the orginal string.

CharAt Retrive the charachter at specifci position

subString(1) starts at index 1, not 0

in JS strings are zero indexed taht means.

// Capitalize Names problem 1 Note

// Capitalize Names Problem 1V2 Notes

Slice vs Substring is interested.
most devs prefer slice()( for substring because its mnore flexible if you need negative indexing values. getting N last chatrachters. Older code base leverage Substring .)

So the overall approach what i learned here is if you want to capatizlie the first letter of the array elements.

// Step 1: Iterate over teh elements.
// return (Transformed Element [Position 1 index]) + element.

takes the first charachter element 0
capitalizes it .toUpperCase()
adds the rest of the world element.slice(1)

////////////////////////////////////////////////////////////

Extract Domains. Look at the word. Look at the index position of where teh @ symbol. Then From that position to the end of the string extract that and print that.

🔪 slice() – cuts out a portion of a string (or array) using index positions
✂️ split() – splits a string into pieces using a separator
js
Copy
Edit

//Reduces” an array to a single value (sum, object, string, etc.) by accumulating as you go.

// Reduce()
//Iterates over each element for side-effects (no returned array). Great for logging, mutation, or triggering async calls.
// forEach()

//Returns the first element that matches your condition (or undefined). Handy for lookups.

// Find()

// const word = 'stefanos';
// const remainingLetters = word.substring(0);

// console.log(remainingLetters);

// capitalizeNames(names);
