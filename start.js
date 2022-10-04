//  THIS REPO REQUIRES NODE.JS
const fs = require('fs');

// run this file to be assigned a random problem from the list

// this is a random number generator that will generate a number between 1 and 75
// that number corresponds to a problem from the blind 75 list (https://neetcode.io/practice)
// all of these problems are from LeetCode and are common interview questions


// this will keep track of the problems that have been assigned by creating a file called "problems.txt"
// if the file does not exist, it will create it

// you can change this if you want, it is just the file that keeps track of the problems that have been assigned
const fileName = 'problems.txt';
// you change change this to use a different problem list
const max = 75;


if (!fs.existsSync(fileName)) {
    fs.writeFileSync(fileName, '');
}

// this will read the file and store the problems that have been assigned in an array
const problems = fs.readFileSync(fileName, 'utf-8').split('\n');

// user has been assigned every problem in the list
if(problems.length >= max) {
    console.log('Congragulations, You have completed all of the Blind 75');
    console.log('You can now delete the problems.txt file to reset and change the max variable to use a different problem list');
    console.log('Try the Blind 150 list: https://neetcode.io/practice');
    return;
}

function getRandomProblem(max) {
    let isUnassigned = false;
    let random = null

    // this will keep generating a random number until it finds a problem that has not been assigned
    while (!isUnassigned) {
        // this will generate a random number between 1 and 75
        random = Math.floor(Math.random() * max) + 1;

        if(!problems.includes(random)) {
            // if the random number has not been assigned, it will return the number
            isUnassigned = true; 
        }
    }
    // save the number of the problem that was assigned
    problems.push(r);
    fs.writeFileSync(fileName, problems.join('\n'));
    // return the number of the problem that was assigned
    return random;
}

const r = getRandomProblem(max);

// give the user the number
console.log(`Your problem today is problem ${r} (from the top down) /n `);
console.log('from https://neetcode.io/practice');