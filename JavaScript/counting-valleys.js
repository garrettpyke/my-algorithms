///// Counting Valleys /////
// (from HackerRank.com)
/*
A string input describes a hiking journey in steps up or steps down. The challenge: find the number of valleys hiked.

sample input: 
8 (integer)
UDDDUDUU (string)

Visually this looks like:
_/\      _ 
   \    /
    \/\/

This would be considered 1 valley. A valley is defined as any number of steps below sea level followed by any number of steps back to sea level. Hikes always begin and end at sea level.
*/

// If we represent the position above/below sea level as an integer based on steps made, whenever the integer *increases* to 0 a valley was just "passed".
//  We could test for mountains and valleys with the same logic if needed.

const log = (arg) => console.log(arg) //lazy shortcut for console.log

testSteps = 8;
testTrip = 'UDDDUDUU'

valleyCount = (steps, trip) => {
    valleys = 0;
    position = 0;
    for(i=0; i < steps; i++) {
        if (trip.at(i) === "D") {
            position--;
        }
        else if (trip.at(i) === "U") {
            position ++;
            if (position === 0) {
                valleys++;
            }
        }
        log(`Pass: ${i}, valleys: ${valleys}, position: ${position}`)
    }
    return `Number of valleys: ${valleys}`
}

log(valleyCount(testSteps, testTrip))
